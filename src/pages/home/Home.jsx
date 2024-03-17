import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import homme from "../../assets/homme.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="titre">
          <h1>Achref &nbsp;CHOUIKH</h1>
          <h2>Développeur Web REACT | NODE</h2>
          <button class="button type1">
            <FontAwesomeIcon
              icon={faDownload}
              style={{
                color: "black",
                fontSize: "1.5em",
                backgroundColor: "white",
                marginRight: "12px",
              }}
            />
            <span class="btn-txt">MON CV</span>
          </button>
        </div>
        <div className="icons">
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
      </div>
      <div className="right">
        <img src={homme} alt="" />
      </div>
    </div>
  );
};

export default Home;
