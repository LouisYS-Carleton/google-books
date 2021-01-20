import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      Google Books
      <Link to="/search">Search</Link>
      <Link to="/saved">Saved</Link>
    </div>
  );
}

export default Nav;
