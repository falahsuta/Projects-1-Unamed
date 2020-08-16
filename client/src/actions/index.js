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
  // console.log(response.data);
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const closePost = () => {
  return {
    type: "CLOSE_POST",
  };
};

export const getCurrentUser = () => async (dispatch) => {
  const response = await axios.get(
    "http://localhost:4001/api/users/currentUser",
    { credentials: true }
  );
  console.log(response.data);
  dispatch({ type: "FETCH_CURRENTUSER", payload: response.data });
};

// export const login = (value) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:4001/api/users/signin",
//       value
//     );
//   } catch (err) {
//     console.log(err.response);
//   }

//   dispatch({ type: "SIGNIN_USER" });
// };
