import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul style={{ display: "flex" }}>
      <Link to="/">
        <li style={{ marginLeft: 10, listStyle: "none" }}>Home</li>
      </Link>
      <Link to="/clients">
        <li style={{ marginLeft: 10, listStyle: "none" }}>Clients</li>
      </Link>
    </ul>
  );
}

export default Navigation;
