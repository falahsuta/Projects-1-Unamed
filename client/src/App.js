import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";
import Recommend from "./components/Recommend";
import Header from "./components/Header";
import headerData from "./components/header-data";
import Box from "@material-ui/core/Box";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <AppBar />
          <Container>
            <Box my={2}>
              <Header post={headerData} />
            </Box>
          </Container>
          <Recommend />
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
