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

import { Container } from "@material-ui/core";

export default (props) => {
  const [darkState, setDarkState] = useState(true);
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
        {props.children}
        <div style={{ marginTop: "320px" }}></div>
        <Switch checked={darkState} onChange={handleThemeChange} />
      </ThemeProvider>
    </Container>
  );
};
