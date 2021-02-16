//DUCKS-m Quack
//Declare
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESOLVE,
  //Depending on your backend will be if you need a start, success of fail for the Logout
  LOGOUT,
  POST_FRIEND_START,
  POST_FRIEND_SUCCESS,
  POST_FRIEND_FAIL,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAIL,
  PUT_FRIEND_START,
  PUT_FRIEND_SUCCESS,
  PUT_FRIEND_FAIL,
  GET_FRIEND_START,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_FAIL,
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAIL,
} from "../actions";

const initialState = {
  friends: [],
  error: null,
  status: "idle",
  loggedIn: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, status: "loading" };
    case LOGIN_SUCCESS:
      return { ...state, status: "success", loggedIn: true };
    case LOGIN_FAIL:
      return {
        ...state,
        status: "fail",
        loggedIn: false,
        error: action.payload,
      };
    case LOGIN_RESOLVE:
      return { ...state, status: "idle" };

    default:
      return { ...state };
  }
};
