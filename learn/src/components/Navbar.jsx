import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="general">
          <li>
            <Link to={"/"} >Home</Link>
          </li>
          <li>
            <Link to={"/admin"}>AdminPanel</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
