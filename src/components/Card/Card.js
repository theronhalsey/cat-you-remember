import React from "react";
import "./Card.css";

const Card = props => (
  <button
    className="card"
    id={`${props.id}`}
    style={{
      backgroundImage: `url(${props.link})`
    }}
  >
  </button>
);

export default Card;