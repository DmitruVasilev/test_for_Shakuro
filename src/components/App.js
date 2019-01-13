import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import WelcomePage from "./WelcomePage";
import PayPage from "./PayPage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/pay_mobile/:operatorId?" component={PayPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
