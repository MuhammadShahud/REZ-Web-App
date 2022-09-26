import Axios from 'axios';
import {getHeaders} from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import Apis from '../Apis';
import FollowAction from '../Actions/FollowAction';

export default {
  ActiveEvents: ({callback}) => {
    return async dispatch => {
      try {
        let response = await Axios.get(
          `${Apis.ActiveEvents}`,
          await getHeaders(),
        );
        if (response.data.success) {
          callback(response);
        } else {
          callback(false);
        }
      } catch (error) {
        callback(false);
        console.warn('err ', error);
      }
    };
  },
  PastEvents: ({callback}) => {
    return async dispatch => {
      try {
        let response = await Axios.get(
          `${Apis.PastEvents}`,
          await getHeaders(),
        );

        console.warn('resss', response);
        if (response.data.success) {
          callback(response);
        } else {
          callback(false);
        }
      } catch (error) {
        callback(false);
        console.warn('err ', error);
      }
    };
  },
  EventDetail: ({event_id, callback}) => {
    return async dispatch => {
      try {
        let response = await Axios.get(
          `${Apis.EventDetails + event_id}`,
          await getHeaders(),
        );
        if (response.data.success) {
          callback(response);
        }
      } catch (error) {
        callback(false);
        console.warn('err ', error);
      }
    };
  },

  // sendHelp: ({
  //     name,
  //     email,
  //     description,
  //     callback,
  // }) => {
  //     return async dispatch => {
  //         try {
  //             let formData = new FormData();
  //             formData.append('name', name)
  //             formData.append('email', email)
  //             formData.append('description', description)
  //             let response = await Axios.post(
  //                 Apis.sendHelp,
  //                 formData,
  //                 await getHeaders(),
  //             );
  //             if (response.data.success) {
  //                 callback(response);
  //             }
  //         } catch (error) {
  //             callback(false);
  //             console.warn('err ', error);
  //         }

  //     };
  // },
};
