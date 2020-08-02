import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import { Container } from "@material-ui/core";

export default () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <Container>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Switch checked={darkState} onChange={handleThemeChange} />
        <Navbar />
      </ThemeProvider>
    </Container>
  );
};
