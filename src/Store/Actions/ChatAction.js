import {
  GET_CHATS_MESSAGES,
  GET_CHAT_HEADS,
  RESET_CHAT,
  UPDATE_CHAT_MESSAGES,
} from '../Types/actions_type';

class ChatAction {
  static getChatHeads = payload => {
    return {
      type: GET_CHAT_HEADS,
      payload: payload,
    };
  };
  static getChatMessages = payload => {
    return {
      type: GET_CHATS_MESSAGES,
      payload: payload,
    };
  };
  static updateChatMessages = payload => {
    return {
      type: UPDATE_CHAT_MESSAGES,
      payload: payload,
    };
  };
  static resetChat = payload => {
    return {
      type: RESET_CHAT,
    };
  };
}

export default ChatAction;
