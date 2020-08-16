import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";

import Landing from "./components/pages/Landing";

import Modal from "./components/Modal";
import Comment from "./components/Comment";
import SignInForm from "./components/form/signin/SignInForm";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <AppBar />
          {/* <Comment /> */}
          <SignInForm />
          {/* <Landing /> */}
          {/* <Modal /> */}
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
