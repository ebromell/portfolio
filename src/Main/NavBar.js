import React from "react";
import { Link } from "react-router-dom";
import "./CSS/navbar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/portfolio/">Home</Link> <Link to="/Contact">Contact Me</Link>{" "}
          <Link to="/Projects">Projects</Link>{" "}
          <Link to="/ArtWork">ArtWork</Link>
        </li>
      </ul>
    </nav>
  );
}
