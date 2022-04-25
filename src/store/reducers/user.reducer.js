import { LOGIN_USER, LOGIN_USER_SUCCESS, REGISTER_USER, REGISTER_USER_SUCCESS } from "../actionTypes/actionTypes";

const initState = {
  loading: false,
  userList: [],
  token: "",
  userInfo:null
};

const userReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, token: payload };
    case REGISTER_USER:
        return {...state,loading:true}
    case REGISTER_USER_SUCCESS:
        return {...state,loading:false,userInfo:payload}

    default:
      return state;
  }
};

export default userReducer;
