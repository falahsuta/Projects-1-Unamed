import React from "react";
import Troll2Fetch from "./Troll2Fetch";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user && user.currentUser && <Troll2Fetch userId={user.currentUser.id} />}
      {/* <Troll2Fetch /> */}
    </div>
  );
};
