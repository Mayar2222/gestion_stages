import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link className="logo d-flex align-items-center" to={"/"}>
          <img src="assets/img/logo.png" alt />
          <span>FlexStart</span>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Acceuil
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                à propos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <Link className="getstarted scrollto" to={"/login"}>
                Se Connecter
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Header;
