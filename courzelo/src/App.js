import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/assets/styles/tailwind.css";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth.js";
import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/home" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Redirect from="/" to="/home" />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
