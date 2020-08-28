import axios from "axios";

// export const selectNav = (nav) => {
//   return {
//     type: "NAV_SELECTED",
//     payload: nav,
//   };
// };

export const fetchPost = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:4002/api/posts/?p=${id}`);
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
    { withCredentials: true }
  );
  // console.log(response.data);
  dispatch({ type: "FETCH_CURRENTUSER", payload: response.data });
};

export const signIn = (value) => async (dispatch) => {
  // const headers = {
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // };

  const response = await axios.post(
    "http://localhost:4001/api/users/signin",
    value,
    {
      withCredentials: true,
      // headers,
    }
  );

  return {
    type: "SIGNIN_CURRENTUSER",
    payload: { currentUser: response.data },
  };
};

export const setCredentials = (value) => {
  return {
    type: "SET_CURRENTUSER",
    payload: value,
  };
};

export const createPost = (value) => async (dispatch) => {
  const response = await axios.post("http://localhost:4002/api/posts", value);
  // console.log(response.data);
  dispatch({ type: "CREATE_POST" });
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

export const signOut = () => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:4001/api/users/signout",
    {},
    { withCredentials: true }
  );

  dispatch({
    type: "SIGNOUT_CURRENTUSER",
    payload: { ...response.data, currentUser: null },
  });
};

export const commentPost = (value) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:4002/api/posts/comments",
    value
  );

  dispatch({
    type: "COMMENT_POST",
    // payload: { ...response.data, currentUser: null },
  });
};

export const commentReply = (value) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:4002/api/posts/comments/replies",
    value
  );

  dispatch({
    type: "COMMENT_REPLY",
  });
};

export const getFirstPost = () => async (dispatch) => {
  const response = await axios.get(
    "http://localhost:4002/api/posts?limit=6&page=1"
  );

  dispatch({
    type: "POST_TIMELINE",
    payload: response.data,
  });
};

export const getTagPost = (tag) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:4002/api/posts?limit=6&page=1&t=${tag}`
  );

  dispatch({
    type: "TAG_TIMELINE",
    payload: response.data,
  });
};

export const getContributePost = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:4002/api/posts?ui=${id}`);

  dispatch({
    type: "POST_CONTRIBE",
    payload: response.data.post,
  });
};

export const closeFirstPost = () => {
  return {
    type: "CLOSE_FIRSTPOST",
  };
};

export const closeContribe = () => {
  return {
    type: "CLOSE_CONTRIBE",
  };
};

export const navigate = () => {
  return {
    type: "NAVIGATE",
  };
};

export const antiNavigate = () => {
  return {
    type: "ANTI_NAVIGATE",
  };
};
