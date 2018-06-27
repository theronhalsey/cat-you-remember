import React from "react";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    onClick={this.handleClick}
    id={`${props.id}`}
    clicked="false"
    style={{
      backgroundImage: `url(${props.link})`
    }}
  >
  </div>
);

export default Card;