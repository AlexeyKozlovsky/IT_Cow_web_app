import React from 'react';
import './Chat.css'
import {IconButton} from "@material-ui/core";
import {Mic, Send, Phone} from "@material-ui/icons";



const Chat = ({chatName="Электронный доктор"}) => {
    return (
            <div className="chat-container">
                <div className="chat-header">
                    {chatName}
                </div>
                <div className="chat-dialog-field">
                    <div className="chat-message-field bot-message">
                        <img className="chat-message-avatar"/>
                        <p className="chat-message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                            corporis! Voluptate voluptatum quos consectetur cumque.</p>
                    </div>

                    <div className="chat-message-field user-message">
                        <img className="chat-message-avatar"/>
                        <p className="chat-message-text">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="chat-create-message-field">
                    <input className="chat-message-input" placeholder="Напишите сообщение..."/>
                    <IconButton><Send/></IconButton>
                    <IconButton><Mic/></IconButton>
                </div>
            </div>
    );
};

export default Chat;