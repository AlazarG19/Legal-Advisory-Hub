// in ActionProvider.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setsections, editstatement } from '../../redux/Reducers/sectionreducer.js';
import { editformtext, setformtext } from '../../redux/Reducers/formtextreducer.js';
import store from '../../redux/Store/index.js';
const ActionProvider = ({ createChatBotMessage, setState, children, state }) => {
    console.log("actionprovider------------------------")
    console.log(state)

    const dispatch = useDispatch()
    const handleOverall = (message) => {
        console.log("-----------------handle overall start")
        console.log(message)
        if (state.position == 0) {
            if (message == "start") {
                const botMessage = createChatBotMessage(state.sections[state.position].questions);
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                    position: prev.position + 1
                }));
            } else {
                const botMessage = createChatBotMessage("Type start to start filling your form");
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],

                }));

            }
        } else {
            if (message == "back") {
                console.log("===================back is clicked")
                const reduxstate = store.getState()
                console.log("before change form text", reduxstate.formtext.value)

                const inputString = reduxstate.formtext.value;
                const regex = /<span>.*?<\/span>/g;
                const matches = inputString.match(regex);
                console.log("matches", matches);

                if (matches && matches.length > 0) {
                    const lastMatchIndex = inputString.lastIndexOf(matches[matches.length - 1]);
                    const newString = inputString.slice(0, lastMatchIndex) + "_____" + inputString.slice(lastMatchIndex + matches[matches.length - 1].length);
                    console.log("changed form text", newString);
                    store.dispatch(editformtext({ section: newString }))
                }

                console.log("answers ", state.answers)
                console.log("messages ", state.messages)
                let newposition = state.position - 1
                let newanswers = state.answers.splice(0, state.answers.length - 1)
                let newmessages = state.messages.splice(0, state.messages.length - 2)
                console.log("new answers ", newanswers)
                console.log("new answers ", newmessages)

                setState((prev) => ({
                    ...prev,
                    messages: newmessages,
                    answers: newanswers,
                    position: newposition
                }));
                console.log("state changed ", state)
                console.log("===================back is clicked end")
            } else {

                console.log("------------------state.position >0")


                console.log("------------------state.sections.length > state.position")
                console.log("state.sections[state.position]", state.sections, state.sections.length)
                console.log("state.position", state.position)
                if (state.position == state.sections.length) {

                    const botMessage = createChatBotMessage("All Questions have ended. To Finish Type End");
                    console.log("item to be saved", {
                        messages: botMessage,
                    })
                    const reduxstate = store.getState()
                    var inputString = reduxstate.formtext.value;
                    var count = 0;
                    console.log("position of question", state.position)
                    var replacedString = inputString.replace(/_____/g, function (match) {
                        count++
                        return (count == 1) ? "<span>" + message + "</span>" : match
                    });

                    console.log("changed formtext", replacedString)
                    store.dispatch(editformtext({ section: replacedString }))
                    setState((prev) => ({
                        ...prev,
                        messages: [...prev.messages, botMessage],
                        answers: [...prev.answers, message],
                        position: prev.position + 1
                    }));
                } else if (state.position > state.sections.length) {
                    console.log("===================finsihe")
                    const botMessage = createChatBotMessage("Form Has Been Prepared");
                    console.log("item to be saved", {
                        messages: botMessage,
                    })
                    console.log("state", state)
                    setState((prev) => ({
                        ...prev,
                        messages: [...prev.messages, botMessage]
                    }));
                    console.log("===================finsihe end")

                } else {
                    const botMessage = createChatBotMessage(state.sections[state.position].questions);
                    const reduxstate = store.getState()
                    var inputString = reduxstate.formtext.value;
                    var count = 0;
                    console.log("position of question", state.position)
                    var replacedString = inputString.replace(/_____/g, function (match) {
                        count++
                        return (count == 1) ? "<span>" + message + "</span> " : match
                    });

                    console.log("changed formtext", replacedString)
                    store.dispatch(editformtext({ section: replacedString }))
                    setState((prev) => ({
                        ...prev,
                        messages: [...prev.messages, botMessage],
                        answers: [...prev.answers, message],
                        position: prev.position + 1
                    }));
                }
                console.log("------------------state.sections.length > state.position end")
                console.log("------------------state.position >0 end")
            }
        }
        console.log("-----------------handle overall end")
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/forms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("dataloaded")
                console.log(data)
                setState((prev) => ({
                    ...prev,
                    sections: data[data.length - 1].sections,
                    formtext: data[data.length - 1].formtext
                }))
                console.log(data[data.length - 1])
                dispatch(setformtext(data[data.length - 1].formtext))
            })
            .catch((error) => {
                // console.log("error while sending")
                console.error('Error:', error);
            });

    }, [])

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleOverall
                    },
                });
            })}
        </div>
    );
};


export default ActionProvider;