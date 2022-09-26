import Axios from 'axios';
import {getHeaders} from '../../Utils';
import ChatAction from '../Actions/ChatAction';
import EClassAction from '../Actions/EClassAction';
import Apis from '../Apis';

class ChatMiddleware {
  static getChatHeads = () => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const {data} = await Axios.get(Apis.getChatHeads, await getHeaders());
          console.log('React native =>', data, await getHeaders());
          if (data?.success) {
            dispatch(ChatAction.getChatHeads(data.data));
            resolve(data.data);
          }
        } catch (error) {
          reject(error);
          alert('Network Error');
          console.log(error.response);
        }
      });
    };
  };
  static sendMessage = ({chathead_id, recipient_user, message}) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          console.log('messagemessagemessage', message);
          formdata.append('chathead_id', chathead_id);
          formdata.append('id', recipient_user);
          formdata.append('message', message);

          const {data} = await Axios.post(
            Apis.sendMessage,
            formdata,
            await getHeaders(),
          );
          console.log('Data=>', data);
          if (data?.success) {
            dispatch(ChatAction.updateChatMessages(data.data));
            resolve(data);
          }
        } catch (error) {
          reject(error);
          alert('Network Error');
          console.log(error.response);
        }
      });
    };
  };
  static getChatMessages = ({recipient_user, next_page_url}) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          console.log('next_page_url', next_page_url);
          let formdata = new FormData();
          formdata.append('id', recipient_user);

          const {data} = await Axios.post(
            Apis.getChatMessages(next_page_url),
            formdata,
            await getHeaders(),
          );
          console.log('datadata=>', data);
          if (data?.success) {
            dispatch(ChatAction.getChatMessages(data.data));
            resolve(data.data);
          }
        } catch (error) {
          reject(error);
          alert('Network Error');
          console.log(error);
        }
      });
    };
  };
  static getChatSession = ({recipient_user_id}) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          formdata.append('id', recipient_user_id);

          const {data} = await Axios.post(
            Apis.createSession,
            formdata,
            await getHeaders(),
          );
          console.log('Data=>', data);
          if (data?.success) {
            resolve(data.data);
          }
        } catch (error) {
          reject(error);
          alert('Network Error');
          console.log(error);
        }
      });
    };
  };
}

export default ChatMiddleware;
