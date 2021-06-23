import React from 'react'
import ChatBot from 'react-chatbot-kit'
import config from '../chatbot/config'
import ActionProvider from '../chatbot/ActionProvider'
import MessageParser from '../chatbot/MessageParser'
import { Container } from 'react-bootstrap'
import ScrollArea from 'react-scrollbar'
import '../../utils/App.css'


export default function ChatPage() {
    return (
        <div className="page"></div>
        // <div className="page">
        //      <Container>
        //         <ChatBot config={config} actionProvider={ActionProvider} messageParser={MessageParser}
        //         placeholderText="Напишите своё сообщение" />
        //     </Container>
        // </div>
           
    )
}