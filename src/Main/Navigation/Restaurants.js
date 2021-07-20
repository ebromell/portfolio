import React from "react";
import image from "../images/reservations.png";

export default function Restaurants() {
  const github = "https://github.com/ebromell/Restaurants";

  return (
    <div className="cardTitle">
      <img src={image} alt="application 1" />
      <h2>"Reservation Manager"</h2>
      <a href={github} target="example" rel="noopener">
        GitHub Repository
      </a>
      <p>
        <br />
        "The software is used only by restaurant personnel when a customer
        <br />
        calls to request a reservation. This program allows the restaurant
        <br />
        personnel to create a reservation for a customer, check the status
        <br />
        of a current reservation and then update the status."
      </p>
    </div>
  );
}