import {
  START_FETCHING,
  FRIEND_RETRIEVED,
  FETCH_FAILED,
  CLEAR_ERROR,
} from "../actions/index";

const initialState = {
  friends: [],
  isFetching: false,
  error: "",
};

const counter = (state = initialState, action) =>{

  switch(action.type){
    case 
  }

}


// export const reducer = (state = initialState, action) => {
//   console.log("reducer", action);
//   switch (action.type) {
//     case START_FETCHING:
//       return { ...state };
//     default:
//       return { ...state };
//   }
//   // switch (action.type) {
//   //   case CLEAR_ERROR:
//   //     return { ...state, error: "" };
//   //   case START_FETCHING:
//   //     return { ...state, isFetching: true, error: "" };

//   //   //Here think about how you are dealing with the data
//   //   case FRIEND_RETRIEVED: {
//   //     return {
//   //       ...state,
//   //       friends: [...state.friends, action.payload],
//   //       isFetching: false,
//   //     };
//   //   }
//   //   case FETCH_FAILED: {
//   //     return {
//   //       ...state,
//   //       error: action.payload,
//   //       isFetching: false,
//   //     };
//   //   }
//   //   default:
//   //     return { ...state };
//   // }
// };
