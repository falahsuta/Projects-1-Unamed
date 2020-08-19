import React from "react";
import DarkMode from "./components/DarkMode";
import "./styles.css";
import { Container } from "@material-ui/core";
import AppBar from "./components/AppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import ScrollToTop from "./components/ScrollToTop";

import SignUpForm from "./components/form/signup/SignUpForm";
import TagPage from "./components/pages/TagPage";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <DarkMode>
          <Router>
            <AppBar />
            <ScrollToTop />
            <Switch>
              {/* <Route path="/tag" exact component={TagPage} /> */}
              {/* <Comment /> */}
              {/* <SignInForm /> */}
              {/* <SignUpForm /> */}
              {/* <SignInForm /> */}
              {/* <Modal /> */}
              <Route exact path="/" component={Landing} />
              <Route exact path="/tag/:tag" component={TagPage} />
            </Switch>
          </Router>
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
