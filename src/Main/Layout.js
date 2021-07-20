import React from "react";
import { Switch, Route } from "react-router-dom";
import "../Main/CSS/layout.css";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Contact from "./Navigation/Contact";
import Artwork from "./Navigation/Artwork";
import Projects from "./Projects";

function Layout() {
  return (
    <div className="container title fade-in">
      <h1 className="title">Eric Bromell</h1>
      <h2>
        <NavBar />
        <Switch>
          <Route path="portfolio/Artwork">
            <Artwork />
          </Route>
          <Route path="portfolio/Projects">
            <Projects />
          </Route>
          <Route path="portfolio/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </h2>
    </div>
  );
}

export default Layout;
