import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/MAC.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <p className="nom"> M.Achref.Chouikh 🌋</p>
      </div>
      <ul className="navigation">
        <li>
          <Link className="link" to="/">
            accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/parcours">
            Parcours
          </Link>
        </li>
        <li>
          <Link className="link" to="/projet">
            Projet
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
