import { combineReducers } from "redux";

const postReducer = (post = null, action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    case "CLOSE_POST":
      return null;
    default:
      return post;
  }
};

// const userReducer = (user = { currentUser: null }, action) => {
const userReducer = (user = null, action) => {
  switch (action.type) {
    case "FETCH_CURRENTUSER":
      return action.payload;
    case "SIGNIN_CURRENTUSER":
      return action.payload;
    case "SET_CURRENTUSER":
      return action.payload;
    case "SIGNOUT_CURRENTUSER":
      return action.payload;
    default:
      return user;
  }
};

export default combineReducers({
  post: postReducer,
  user: userReducer,
});
