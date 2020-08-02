import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Header from "./Header";
import PostCard from "./PostCard";

const useStyles = makeStyles((props) => ({
  root: {
    minHeight: 59,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default (props) => {
  const mainFeaturedPost = {
    title: "DissCuss",
    description: "Platform's where new ideas emerge.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    linkText: "Continue reading…",
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="transparent" elevation={0}>
          <Toolbar className={classes.root}>
            <Container>
              <Navbar />
              <Divider style={{ marginTop: "3px" }} variant="middle" />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          {/* {[...new Array(34)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")} */}
          <Header post={mainFeaturedPost} />
        </Box>
      </Container>
    </React.Fragment>
  );
};
