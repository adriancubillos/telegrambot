const { getAxiosInstance } = require('./axios');
const { errorHandler } = require('./helper');

const MY_TOKEN = process.env.TELEGRAM_TOKEN || '';
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;
const axiosInstance = getAxiosInstance(BASE_URL);

const sendMessage = (chatId, messageText) => {
  return axiosInstance
    .get('sendMessage', {
      chat_id: chatId,
      text: messageText,
    })
    .catch((ex) => {
      errorHandler(ex, 'sendMessage', 'axios');
    });
};

const handleMessage = async (messageObj) => {
  const messageText = messageObj.text || '';
  if (!messageText) {
    errorHandler('No message text', 'handleMessage');
    return '';
  }

  try {
    const chatId = messageObj.chat.id;

    if (chatId === '8406273451' || chatId === '-4819660956') {
      if (messageText.charAt(0) === '/') {
        const command = messageText.substr(1);
        switch (command) {
          case 'start':
            return sendMessage(chatId, "Hi!, I'm a bot. I can help you sort out your bills");

          default:
            return sendMessage(chatId, "Hi, I don't know that command");
        }
      } else {
        return sendMessage(chatId, messageText);
      }
    } else {
      sendMessage(chatId, 'Sorry, this bot is not enabled for all users');
    }
  } catch (error) {
    errorHandler(error, 'handleMessage');
  }
};

module.exports = { sendMessage, handleMessage };
