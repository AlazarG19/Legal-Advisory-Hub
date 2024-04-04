// in ActionProvider.jsx
import React, { useEffect } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children, state }) => {
    const handleOverall = (message) => {
        console.log(message)
        if (state.questions.length > state.position) {
            const botMessage = createChatBotMessage(state.questions[state.position].question);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
                answers: [...prev.answers, message],
                position: prev.position + 1
            }));
        } else {
            console.log(state)
            const botMessage = createChatBotMessage("your form has been prepared");
            setState((prev) => ({
                ...prev,
                answers: [...prev.answers, message],
                messages: [...prev.messages, botMessage],
            }));
        }
    }
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        // setState((prev) => ({
        //     ...prev,
        //     messages: [...prev.messages, botMessage],
        // }));
    };
    useEffect(() => {
        fetch(`http://localhost:8080/api/forms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setState((prev) => ({
                    ...prev,
                    questions: data[0].section
                }))
            })
            .catch((error) => {
                console.log("error while sending")
                console.error('Error:', error);
            });

    }, [])

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleOverall
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;