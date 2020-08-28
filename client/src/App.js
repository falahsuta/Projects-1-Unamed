import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DarkMode from "./components/DarkMode";
import ScrollToTop from "./components/ScrollToTop";
import AppBar from "./components/AppBar";

import Landing from "./components/pages/Landing";
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
              <Route exact path="/" component={Landing} />
              <Route exact path="/tag/:tag" component={TagPage} />
            </Switch>
          </Router>
        </DarkMode>
      </Container>
    </React.Fragment>
  );
};
