import React from "react";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: `${props.image}`
    }}
  >
  </div>
);

export default Card;
