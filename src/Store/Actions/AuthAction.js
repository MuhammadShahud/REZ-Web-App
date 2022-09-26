import {
  GET_SPORT_TYPES,
  GET_USER_DATA,
  IS_AUTH,
  LOGOUT,
  SET_ROLE,
  SOCIAL_LOGIN,
  UPDATE_USER_PROFILE,
  GET_COLORS,
} from '../Types/actions_type';

class AuthAction {
  static isAuth = payload => {
    return {
      type: IS_AUTH,
      payload: payload,
    };
  };
  static getUserData = payload => {
    return {
      type: GET_USER_DATA,
      payload: payload,
    };
  };
  static updateUserProfile = payload => {
    return {
      type: UPDATE_USER_PROFILE,
      payload: payload,
    };
  };
  static setRole = payload => {
    return {
      type: SET_ROLE,
      payload: payload,
    };
  };
  static getSportTypes = payload => {
    return {
      type: GET_SPORT_TYPES,
      payload: payload,
    };
  };
  static logout = payload => {
    return {
      type: LOGOUT,
      payload: payload,
    };
  };
  static socialLogin = payload => {
    return {
      type: SOCIAL_LOGIN,
      payload: payload,
    };
  };
  static getColors = payload => {
    return {
      type: GET_COLORS,
      payload: payload,
    };
  };
}

export default AuthAction;
