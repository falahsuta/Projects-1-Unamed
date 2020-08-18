import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";

import Modal from "./components/Modal";
import Comment from "./components/Comment";
import SignUpForm from "./components/form/signup/SignUpForm";
// import SignInForm from "./components/form/signin/SignInForm";
import TagAll from "./components/TagAll";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <Router>
            <AppBar />
            <Switch>
              <Route path="/" exact component={Landing} />
              {/* <Route path="/tag" exact component={TagPage} /> */}
              {/* <Comment /> */}
              {/* <SignInForm /> */}
              {/* <SignUpForm /> */}
              {/* <SignInForm /> */}
              {/* <Modal /> */}
              <Route path="/yes" exact component={SignUpForm} />
            </Switch>
          </Router>
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
