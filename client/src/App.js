import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";

import Landing from "./components/pages/Landing";
import Form from "./components/form/Form";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <AppBar />
          <Form />
          {/* <Landing /> */}
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
