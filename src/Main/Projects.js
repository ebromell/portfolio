import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../Main/CSS/projects.css"
import Pomodoro from "./Navigation/Pomodoro";
import Restaurants from "./Navigation/Restaurants";

export default function Projects() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Projects/Pomodoro">Pomodoro</Link>
            </li>
            {" "}
            <li>
              <Link to="/Projects/Restaurants">Restaurants</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Projects/Pomodoro">
            <Pomodoro />
          </Route>
          <Route path="/Projects/Restaurants">
            <Restaurants />
          </Route>
        </Switch>
      </div>
  );
}
