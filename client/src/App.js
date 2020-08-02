import React from "react";
import Switcher from "./Switcher";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./AppBar";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <Switcher />
      </Container>
    </React.Fragment>
  );
};
