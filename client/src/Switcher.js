import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./AppBar";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Container } from "@material-ui/core";
import PostCard from "./PostCard";

export default () => {
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
        <AppBar />
        <Container>
          <Typography gutterBottom variant="h5" component="h2">
            Hot Disscuss Today
            <Divider
              style={{
                marginTop: "9px",
                marginBottom: "19px",
                width: "270px",
                transform: "translate(-0.8em, 0)",
              }}
              variant="middle"
            />
          </Typography>
          <Box my={2}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs>
                <PostCard />
              </Grid>
              <Grid item xs>
                <PostCard />
              </Grid>
              <Grid item xs>
                <PostCard />
              </Grid>
              <Grid item xs>
                <PostCard />
              </Grid>
            </Grid>
          </Box>
        </Container>
        <div style={{ marginTop: "320px" }}></div>

        <Switch checked={darkState} onChange={handleThemeChange} />
      </ThemeProvider>
    </Container>
  );
};
