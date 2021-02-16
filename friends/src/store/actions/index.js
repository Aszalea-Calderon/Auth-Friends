//ACTIONS types//
//Login//
//Logout//
//Post Friend//
//Delete Friend//
//PUT and edit Friend//
//Get friend//
//Get Friends//
import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_RESOLVE = "LOGIN_RESOLVE";
//Depending on your backend will be if you need a start, success of fail for the Logout
export const LOGOUT = "LOGOUT";
export const POST_FRIEND_START = "POST_FRIEND_START";
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS";
export const POST_FRIEND_FAIL = "POST_FRIEND_FAIL";
export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAIL = "DELETE_FRIEND_FAIL";
export const PUT_FRIEND_START = "PUT_FRIEND_START";
export const PUT_FRIEND_SUCCESS = "PUT_FRIEND_SUCCESS";
export const PUT_FRIEND_FAIL = "PUT_FRIEND_FAIL";
export const GET_FRIEND_START = "GET_FRIEND_START";
export const GET_FRIEND_SUCCESS = "GET_FRIEND_SUCCESS";
export const GET_FRIEND_FAIL = "GET_FRIEND_FAIL";
export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";

//ACTION CREATORS//

//This be that Thunk. It will only dipatch two of them at a time because it will work or fail.You can have a 3rd case that happens regardless. login and reslove. This dispatches from start to finish. There will be a reducer for each of these actions
export const login = ({ username, password }) => (dispatch) => {
  dispatch({ type: LOGIN_START }); //Payload undefined
  axios
    .post("http://localhost:5000/api/login", { username, password })
    .then((res) => {
      localStorage.setItem("token", res.data.payload); //This relates to the server
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.error("Login Error: ", err);
      dispatch({ type: LOGIN_FAIL, payload: err });
    })
    .finally(() => {
      dispatch({ type: LOGIN_RESOLVE });
    });
};
