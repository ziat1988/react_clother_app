import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"; // syntax for importing SVG

import "./header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="option">
      <Link to="/shop">SHOP</Link>{" "}
    </div>
  </div>
);

export default Header;
