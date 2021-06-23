class ActionProvider {
    // The action provider receives createChatBotMessage which you can use to define the bots response, and 
    // the setState function that allows for manipulating the bots internal state.
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
    }
  
    handleMessageParser = () => {
      const messages = this.createChatBotMessage(
        "The message parser controls how the bot reads input and decides which action to invoke.",
        { widget: "messageParser", withAvatar: true }
      );
  
      this.addMessageToBotState(messages);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage("Как я могу вам помочь?", {
        withAvatar: true,
      });
  
      this.addMessageToBotState(message);
    };
  
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };

    reply = (message) => {
        var rep;
        const mes = message.toLowerCase()

        // ЭТО ДЛЯ ДЕМОНТРАЦИИ ТОГО, КАК БОТ ДОЛЖЕН РАБОТАТЬ.
        // МЫ НЕ ПЫТАЕМСЯ ВЫСТАВИТЬ ЭТО ЗА РАБОТУ БОТА. ЭТО ПРОСТО ДЕМОНСТРАЦИЯ ИДЕИ
        // В дальнейшем, при корректном подключении API реализовать продемонстрированный
        // функционал будет несложно
        
        switch (mes) {
            case "здравствуйте, сегодня утром проснулся от кашля":
                rep = this.createChatBotMessage("Не могли бы вы уточнить какой у вас кашель? Лающий, приступообразный, может кровохаркание?", {
                    withAvatar: true});
                break;
            case "ну, крови точно нет, скорее приступообразный":
                rep = this.createChatBotMessage("Тогда я могу вам порекомендовать врачей. Желаете ознакомиться со списком или расскажете о симптомах подробнее? Может быть у вас температура?", {
                    withAvatar: true});
                break;
            case "да, давайте поговорим подробнее":
                rep = this.createChatBotMessage("У вас есть температура?", {
                    withAvatar: true});
                break; 
            case "да, температура есть, высокая":
                rep = this.createChatBotMessage("", {
                    withAvatar: true});
                break;
        }
        

        this.addMessageToBotState(rep)
  }
}
  
  export default ActionProvider;