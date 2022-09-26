import Axios from 'axios';
import { getHeaders } from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import Apis from '../Apis';
import PlayerRequestTeamAction from '../Actions/PlayerRequestTeamAction';

class PlayerRequestTeamMiddleware {

  static playerRequestTeam = ({ id }) => {
// console.warn("ghgjgj", name);
    return dispath => {
      return new Promise(async () => {
        try {
          let formData = new FormData();
          formData.append('id', id)
          let response = await Axios.post(
            Apis.playerRequestToTeam,
            formData,
            await getHeaders(),
          );
          console.warn("response=============", response)
          if (response.data.success) {
            dispath(PlayerRequestTeamAction.playerRequestTeam(response.data.data));
          }
        } catch (error) {
          console.warn('err ', error);
        }
      });
    };
  };
}

export default PlayerRequestTeamMiddleware;
