import Axios from 'axios';
import { getHeaders } from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import AuthAction from '../Actions/AuthAction';
import TeamDetailsAction from '../Actions/TeamDetailsAction';
import Apis from '../Apis';

class TeamDetailsMiddleware {

  static teamDetails = ({ id }) => {
// console.warn("ghgjgj", name);
    return dispath => {
      return new Promise(async () => {
        try {
          let response = await Axios.get(
            `${Apis.getTeamdetails}/${id}`,
            await getHeaders(),
          );
          // console.warn("response=============", response)
          if (response.data.success) {
            dispath(TeamDetailsAction.teamDetails(response.data.data));
          }
        } catch (error) {
          console.warn('err ', error);
        }
      });
    };
  };
}

export default TeamDetailsMiddleware;
