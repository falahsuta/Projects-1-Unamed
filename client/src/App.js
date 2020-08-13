import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";

import Landing from "./components/pages/Landing";
import Form from "./components/form/Form";
import New from "./components/form/new";
import Modal from "./components/Modal";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <AppBar />
          {/* <Form /> */}
          {/* <New /> */}
          <Landing />
          {/* <Modal /> */}
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
