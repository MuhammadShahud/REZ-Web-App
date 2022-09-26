import Axios from 'axios';
import {getHeaders} from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import AuthAction from '../Actions/AuthAction';
import GetFacilityAction from '../Actions/GetFacilityAction';
import Apis from '../Apis';

class GetFacilityMiddleware {
  static getAllFacility = (next_page_url, searchText) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          if (next_page_url == undefined || searchText) {
            dispatch(GetFacilityAction.resetAllFacility());
          }
          let {data} = await Axios.get(
            Apis.getAllFacility(next_page_url, searchText),
            await getHeaders(),
          );
          if (data?.success) {
            dispatch(GetFacilityAction.getAllFacility(data.data));
            resolve(data);
          } else {
            alert(data?.message);
            reject(data);
          }
        } catch (error) {
          reject(error);
          console.warn('err =====', error);
        }
      });
    };
  };
  static getSchedulesOther = next_page_url => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          if (next_page_url == undefined) {
            dispatch(GetFacilityAction.resetAllSchedules());
          }
          let {data} = await Axios.get(
            Apis.getSchedulesOther(next_page_url),
            await getHeaders(),
          );
          if (data?.success) {
            dispatch(GetFacilityAction.getAllSchedules(data.data));
            resolve(data);
          } else {
            alert(data?.message);
            reject(data);
          }
        } catch (error) {
          reject(error);
          console.warn('err =====', error);
        }
      });
    };
  };

  static getFacilityEClassesById = ({id}) => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          console.warn('id ===', id);
          let response = await Axios.get(
            `${Apis.getEClassesByfacility(id)}`,
            await getHeaders(),
          );

          console.warn('ress', response);

          if (response.data.success) {
            resolve(response.data);
          } else {
            reject(false);
          }
        } catch (error) {
          reject(false);
          console.warn('err ===', error);
        }
      });
    };
  };
}

export default GetFacilityMiddleware;
