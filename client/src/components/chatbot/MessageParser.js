import axios from 'axios';
import { GET_SYMPT_URL_PREFIX } from './config';

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      // State represents the chatbot state and is passed 
      // in at initalization. You can use it to read chatbot state
      // inside the messageParser
      this.state = state
    }
  
    parse = (message) => {
      const lowerCase = message.toLowerCase();

    //   console.log(GET_SYMPT_URL_PREFIX+message)
    //     axios.get(GET_SYMPT_URL_PREFIX+message, {headers: {'Access-Control-Allow-Origin': '*'}}).then(res => {
    //         console.log(res)
    //     })
      
  
      if (
        lowerCase.includes("messageparser") ||
        lowerCase.includes("parse") ||
        lowerCase.includes("parser") ||
        lowerCase.includes("message parser")
      ) {
        return this.actionProvider.handleMessageParser();
      }

      return this.actionProvider.reply(message);
      //return this.actionProvider.handleDefault();
    };
  }
  
  export default MessageParser;