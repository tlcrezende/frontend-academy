import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="">
      <nav className="">
        <Link to="/" aria-label="Academy Tracker">
          Logo do App
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
