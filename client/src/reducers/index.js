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

export default combineReducers({
  post: postReducer,
});
