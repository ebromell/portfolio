import React from "react";
import Single from "./images/SingleLeg.gif";
import Full from "./images/Full.gif";
import Btwist from "./images/Btwist.gif";

export default function AboutMe() {
  return (
    <div>
      <div className="about">
          Full Stack PERN Developer <br />
          U.S. Marines between 2010 and 2018 <br />
          Concept/Character Artist
      </div>

      <div class="gifs">
        <img src={Single} alt="EB Stunt" className="rounded" />
        <img src={Full} alt="EB Stunt" className="rounded" />
        <img src={Btwist} alt="EB Stunt" className="rounded" />
      </div>
    </div>
  );
}
