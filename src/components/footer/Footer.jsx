import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="icon2">
        <a href="https://github.com/Achrefffff" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              color: "white",
              fontSize: "1.5em",
              backgroundColor: "black",
              marginRight: "12px",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/achraf-chouikh-950b58159"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              color: "white",
              fontSize: "1.5em",
              backgroundColor: "black",
              marginRight: "12px",
            }}
          />
        </a>
        <a href="mailto:achref.chouik@gmail.com" target="_blank">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              color: "white",
              fontSize: "1.5em",
              backgroundColor: "black",
              marginRight: "12px",
            }}
          />
        </a>
        <a href="https://twitter.com/Href90" target="_blank">
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{
              color: "white",
              fontSize: "1.5em",
              backgroundColor: "black",
              marginRight: "12px",
            }}
          />
        </a>
      </div>

      <p>© 2024 Achref CHOUIKH - Tous droits réservés.</p>
      <p>
        {" "}
        Réalisé avec <strong>REACT</strong>
      </p>
    </footer>
  );
};

export default Footer;
