// in ActionProvider.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setsections, editstatement } from '../../redux/Reducers/sectionreducer.js';
import { editformtext, setformtext } from '../../redux/Reducers/formtextreducer.js';
import store from '../../redux/Store/index.js';
const ActionProvider = ({ createChatBotMessage, setState, children, state }) => {
    console.log("actionprovider------------------------")
    console.log(state)

    const sections = useSelector((state) => state.sections.value)
    const dispatch = useDispatch()
    const handleOverall = (message) => {
        console.log("-----------------handle overall start")
        console.log(message)

        if (message == "start") {
            const reduxstate = store.getState()
            // console.log("reduxstate", reduxstate)
            // code used to hange content of editor
            // store.dispatch(editformtext({ section: "satrt" }))
            // console.log("state.questions[state.position].question", state.sections[state.position].question)
            const botMessage = createChatBotMessage(state.sections[state.position].questions);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
                position: prev.position + 1,
                formtext: "none"
            }));
        } else {

            console.log("------------------state.position >0")
            const reduxstate = store.getState()
            // console.log("reduxstate", reduxstate)
            // console.log("position", p)
            // console.log("sections", state.sections)
            // console.log("withing section section", state.sections[p])
            // let newsection = state.sections.map((item, index) => {
            //     console.log("within new section", index, p)
            //     if (index === p) {
            //         return { ...item, answer: message };
            //     } else {
            //         return item;
            //     }
            // });

            // code used to hange content of editor
            var inputString = reduxstate.formtext.value;
            var count = 0;
            console.log("position of question", state.position)
            var replacedString = inputString.replace(/_____/g, function (match) {
                count++
                console.log("within", count, state.position)
                return (count == state.position) ? "<span>answer</span>" : match
            });

            console.log("changed formtext", replacedString)
            // let changedFormText = "<span>" + reduxstate.formtext.value + + "<span>"
            store.dispatch(editformtext({ section: replacedString }))
            // console.log({ section: newsection, position: state.position })
            // dispatch(editstatement({ section: newsection, position: state.position }))
            console.log("------------------state.sections.length > state.position")
            console.log("state.sections[state.position]", state.sections, state.sections.length)
            console.log("state.position", state.position)
            if (state.position == state.sections.length) {

                const botMessage = createChatBotMessage("All Questions have ended. To Finish Type End");
                console.log("item to be saved", {
                    messages: botMessage,
                })
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                    answers: [...prev.answers, message],
                    position: prev.position + 1
                }));
            } else if (state.position > state.sections.length) {
                const botMessage = createChatBotMessage("Form Has Been Prepared");
                console.log("item to be saved", {
                    messages: botMessage,
                })
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                    answers: [...prev.answers, message],
                }));

            } else {
                const botMessage = createChatBotMessage(state.sections[state.position].questions);
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                    answers: [...prev.answers, message],
                    position: prev.position + 1
                }));
            }
            console.log("------------------state.sections.length > state.position end")
            console.log("------------------state.position >0 end")

            // if (state.sections.length > state.position) {
            //     console.log("------------------state.sections.length > state.position")
            //     console.log("state.questions[state.position].question", state.sections[state.position].question)
            //     const botMessage = createChatBotMessage(state.sections[state.position].questions);
            //     console.log(botMessage)
            //     console.log("item to be saved", {
            //         messages: botMessage,
            //         answers: message
            //     })
            //     setState((prev) => ({
            //         ...prev,
            //         messages: [...prev.messages, botMessage],
            //         answers: [...prev.answers, message],
            //         position: prev.position + 1
            //     }));
            //     console.log("------------------state.sections.length > state.position end")
            // } else {
            //     console.log("------------------state.sections.length > state.position else")
            //     const botMessage = createChatBotMessage("your form has been prepared");
            //     setState((prev) => ({
            //         ...prev,
            //         answers: [...prev.answers, message],
            //         messages: [...prev.messages, botMessage],
            //     }));
            //     console.log("------------------state.sections.length > state.position else end")
            // }
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
                // console.log("dataloaded")
                // console.log(data)
                setState((prev) => ({
                    ...prev,
                    sections: data[6].sections,
                    formtext: data[6].formtext
                }))
                dispatch(setformtext(data[6].formtext))
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