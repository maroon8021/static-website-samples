import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <h1 className="title">RawCorpSite</h1>
      </Link>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/about/">
          About
        </Link>
        <Link className="navbar-item" to="/services/">
          Services
        </Link>
        <Link className="navbar-item" to="/news/">
          News
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
