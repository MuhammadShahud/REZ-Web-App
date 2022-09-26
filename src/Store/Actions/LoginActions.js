import { USER_LOGIN } from "../Types/actions_type";

const LoginAction = (user) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN,
      payload: user,
    });
  };
};

export { LoginAction };
