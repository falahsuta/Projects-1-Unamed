import axios from "axios";

// export const selectNav = (nav) => {
//   return {
//     type: "NAV_SELECTED",
//     payload: nav,
//   };
// };

export const fetchPost = () => async (dispatch) => {
  const response = await axios.get("http://localhost:4002/api/posts/sample");
  console.log(response.data.docs);
  dispatch({ type: "FETCH_POST", payload: response.data.docs });
};

export const closePost = () => {
  return {
    type: "CLOSE_POST",
  };
};
