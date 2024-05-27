// in the config
import React from 'react';
import {
    createChatBotMessage,
    createCustomMessage,
} from 'react-chatbot-kit';
import CustomMessage from './CustomMessage';
import MessageIn from '../CustomForm/Componenets/MessageIn';
import MessageOut from '../CustomForm/Componenets/MessageOut';
import Header from '../CustomForm/Componenets/Header';
// let config = {
//     initialMessages: [
//         createChatBotMessage(
//             `Type Start to begin filling the form`
//         ),
//         createChatBotMessage(
//             `Type Start to begin filling the form`
//         ),
//     ],
//     state: {
//         messages: [],
//         questions: [],
//         answers: [],
//         position: 0
//     },
//     customComponents: {
//         // Replaces the default header
//         header: () => <Header />,

//         // Replaces the default bot chat message container
//         botChatMessage: (props) => <MessageIn {...props} />,
//         userAvatar: (props) => <></>,
//         botAvatar: (props) => <></>,
//         // Replaces the default user chat message
//         userChatMessage: (props) => <MessageOut {...props} />
//     },
// };
const config = {
    initialMessages: [createChatBotMessage(`Hello world`)],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#04668a"
        },
        chatButton: {
            backgroundColor: "#0f5faf"
        }
    },
    customComponents: {
        // Replaces the default header
        header: () => <Header />,

        // Replaces the default bot chat message container
        botChatMessage: (props) => <MessageIn {...props} />,
        userAvatar: (props) => <></>,
        botAvatar: (props) => <></>,
        // Replaces the default user chat message
        userChatMessage: (props) => <MessageOut {...props} />
    },
    state: {
        messages: [{ message: 'Type start to start filling your form', type: 'bot', id: 1 }],
        sections: [],
        formtext: [],
        answers: [],
        position: 0,
        id: ""
    },
};

export default config;