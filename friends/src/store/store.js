import { configureStore } from "@reduxjs/toolkit"; //This combines createStore and middleware
// import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export default configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

//If I deleted this the store would be mad. This is the store for the info
//Store is now here. YAY!
