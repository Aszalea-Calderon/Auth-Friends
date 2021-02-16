import axios from "axios";

// export const START_FETCHING = "START_FETCHING";
// export const FRIEND_RETRIEVED = "FRIEND_RETRIEVED";
// export const FETCH_FAILED = "FETCH_FAILED";
// export const CLEAR_ERROR = "CLEAR_ERROR";

export default INCREMENT = 'INCREMENT'

//Fetching the data
const increment = () =>{
  return{
    type: 'INCREMENT'
  }
}


// const

// export const fetchFriend = () => (dispatch) => {
//   dispatch({ type: START_FETCHING });
// };

//   //Axios call
//   axios
//     .get("http://localhost:5000")
//     .then((res) => {
//       console.log("res.data", res.data);
//       dispatch({ type: FRIEND_RETRIEVED, payload: res.data });
//     })
//     .catch((err) => {
//       console.error("Error getting a Friend from API:", err);
//       dispatch({ type: FETCH_FAILED, payload: err.message });
//     });
// };
// //Adding Friends
// export const addFriend = (newFriendInfo) => {
//   return { type: FRIEND_RETRIEVED, payload: newFriendInfo };
// };

// //Error Messages
// export const setError = (errorMessage) => {
//   return { type: CLEAR_ERROR, payload: errorMessage };
// };
