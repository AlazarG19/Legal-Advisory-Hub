import CustomForm from "./components/CustomForm/CustomForm"
import config from './components/ChatbotKit/config.jsx';
import MessageParser from "./components/ChatbotKit/MessageParser.jsx";
import ActionProvider from "./components/ChatbotKit/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import MessageIn from "./components/CustomForm/MessageIn.jsx";
import MessageOut from "./components/CustomForm/MessageOut.jsx";
import Header from "./components/CustomForm/Header.jsx";
import CustomForm2 from "./components/CustomForm/CustomForm2.jsx";
function App() {

  return (
    <>
      <CustomForm2 />

      {/* <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /> */}
    </>
  )
}

export default App
