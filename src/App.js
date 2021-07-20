import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Main/Layout";

function App() {
  return (
    <Switch>
        <Route>
          <Layout />
        </Route>
    </Switch>
  );
}

export default App;
