import { USER_LOGIN } from "../Types/actions_type";

const INITIAL_STATE = {
  user: false,
  userRole: "",
};

const LoginReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: true,
        userRole: action.payload,
      };

    default:
      return state;
  }
};

export { LoginReducers };
