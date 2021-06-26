import React from 'react'
import '../../utils/App.css'
import Chat from "../chatbot/Chat";
import './ChatPage.css'
import ChooseDoctorPage from './ChooseDoctorPage'


export default function ChatPage() {
    return (
        <div className="chat-page">
            <div className="chat">
                <Chat />
            </div>
            <div className="recom">
                <ChooseDoctorPage/>
            </div>

        </div>
           
    )
}