import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";

import Landing from "./components/pages/Landing";
import Form from "./components/form/Form";

import Modal from "./components/Modal";
import Comment from "./components/Comment";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <AppBar />
          <Comment />
          {/* <Form /> */}
          {/* <New /> */}
          {/* <Landing /> */}
          {/* <Modal /> */}
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
