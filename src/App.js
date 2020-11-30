import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Landing from "./components/landing/Landing";
import PathList from "./components/paths/PathList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateStone from "./components/stones/CreateStone";
import Stone from "./components/stones/Stone";
import EditStone from "./components/stones/EditStone";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/landing" exact component={Landing} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/paths" exact component={PathList} />
          <Route
            path="/paths/:pathid/stone/create"
            exact
            component={CreateStone}
          />
          <Route
            path="/paths/:pathid/stone/:stoneid/edit"
            exact
            component={EditStone}
          />
          <Route path="/paths/:pathid/stone/:stoneid" exact component={Stone} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
