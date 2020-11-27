import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Landing from "./components/landing/Landing";
import PathList from "./components/paths/PathList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateStone from "./components/stones/CreateStone";
import StoneDetails from "./components/stones/StoneDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/paths" exact component={PathList} />
          <Route path="/stone/create" exact component={CreateStone} />
          <Route path="/stone/:id" exact component={StoneDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
