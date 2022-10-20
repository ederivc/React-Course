import React from "react";
import "./main.css";

const Card = ({ image, name, status, species, location, origin }) => {
  return (
    <div className="cardContainer">
      <img src={image} alt="Image" />
      <div className="characterInfo">
        <strong className="characterName">{name}</strong>
        <div className="characterSpecs">
          <span>{status}</span>
          <span>-</span>
          <span>{species}</span>
        </div>
        <div className="characterLocation">
          <p>Last known location:</p>
          <p>{location}</p>
        </div>
        <div className="characterFooter">
          <p>First seen in:</p>
          <p>{origin}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
