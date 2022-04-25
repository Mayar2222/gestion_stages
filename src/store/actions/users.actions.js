import { postApi } from "../../utils/apiHelpers";
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
} from "../actionTypes/actionTypes";

const registerUser = () => {
  return {
    type: REGISTER_USER,
    payload: null,
  };
};

const registerUserSuccess = (data) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: data,
  };
};

export const registerUserApi = (body) => async (dispatch) => {
  try {
    dispatch(registerUser());
    let result = await postApi("register/", body);
    dispatch(registerUserSuccess(result));
  } catch (error) {}
};

const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};
const loginUserSuccess = (token) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: token,
  };
};

export const loginUserApi = (body, navigator) => async (dispatch) => {
  try {
    dispatch(loginUser());
    let result = await postApi("api/login_check", body);
    if (result.token) {
      dispatch(loginUserSuccess(result.token));
      navigator("/admin");
    }
  } catch (error) {}
};
