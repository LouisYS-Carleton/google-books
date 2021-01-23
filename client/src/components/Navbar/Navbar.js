import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <navbar
      className="navbar"
      style={{
        margin: "10px",
        justifyContent: "flex-start",
        backgroundColor: "antiquewhite",
        borderBottom: "thick solid black",
      }}
    >
      <h1 className="navbar-header">Google Books</h1>
      <Link to="/search">
        <h3 style={{ margin: "10px" }}>Search</h3>
      </Link>
      <Link to="/saved">
        <h3 style={{ margin: "10px" }}>Saved</h3>
      </Link>
    </navbar>
  );
}

export default Nav;
