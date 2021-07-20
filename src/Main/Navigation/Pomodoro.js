import React from "react";
import image from "../images/Screenshot (71).png";

export default function Pomodoro() {
  const github = "https://github.com/ebromell/Tomatos";

  return (
    <div className="cardTitle">
      <img src={image} alt="application 1" />
      <h2>"Pomodoro Timer"</h2>
      <a href={github} target="example" rel="noopener">
        GitHub Repository
      </a>
      <p>
        <br />
        "The Pomodoro technique is a time-management method developed by
        <br />
        Francesco Cirillo in the late 1980s. The technique uses a timer to
        <br />
        break down work into intervals, traditionally 25 minutes in
        <br />
        length, separated by short breaks. Each interval is known as a
        <br />
        pomodoro, from the Italian word for tomato, after the
        <br />
        tomato-shaped kitchen timer that Cirillo used as a university
        <br />
        student."
        <br />
      </p>
    </div>
  );
}
