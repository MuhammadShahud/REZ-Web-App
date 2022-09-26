import Axios from 'axios';
import { getHeaders } from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import Apis from '../Apis';
import PlayerRequestApproveAction from '../Actions/PlayerRequestApproveAction';

class PlayerRequestApproveMiddleware {

  static playerRequestApprove = ({ id ,cid ,type, action}) => {
// console.warn("ghgjgj", name);
    return dispath => {
      return new Promise(async () => {
        try {
          let formData = new FormData();
          formData.append('id', id)
          formData.append('content_id', cid)
          formData.append('content_type', type)
          formData.append('content_action', action)

          let response = await Axios.post(
            Apis.playerRequestApproved,
            formData,
            await getHeaders(),
          );
          console.warn("response=============", response)
          if (response.data.success) {
            dispath(PlayerRequestApproveAction.playerRequestApprove(response.data.data));
          }
        } catch (error) {
          console.warn('err ', error);
        }
      });
    };
  };
}

export default PlayerRequestApproveMiddleware;
