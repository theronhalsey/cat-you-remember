import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <ul className="navbar-nav">
        <li>Cat You Remember?
        </li>
        <li>Click on a tile to start the game!
        </li>
        <li>Score: 0 | Top Score: 0
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;