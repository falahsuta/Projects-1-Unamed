import axios from "axios";

// export const selectNav = (nav) => {
//   return {
//     type: "NAV_SELECTED",
//     payload: nav,
//   };
// };

export const fetchPost = () => async (dispatch) => {
  const response = await axios.get(
    "http://localhost:4002/api/posts/?p=5f2c5c4150f0f409643c90f8"
  );
  console.log(response.data);
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const closePost = () => {
  return {
    type: "CLOSE_POST",
  };
};
