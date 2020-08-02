import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  palette: {
    type: "dark",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
      </Container>
    </div>
  );
};
