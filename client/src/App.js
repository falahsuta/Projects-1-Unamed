import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";

import Recommend from "./components/Recommend";
import Header from "./components/Header";
import headerData from "./components/header-data";
import Box from "@material-ui/core/Box";
// import Posts from "./";

import Landing from "./components/pages/Landing";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <AppBar />
          <Landing />
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
