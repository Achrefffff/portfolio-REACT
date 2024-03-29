import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import homme from "../../assets/homme.jpg";
import cv from '../../assets/CV_2024_ACHREF_CHOUIKH.pdf';

const Home = () => {
    const handleDownloadCV = () => {
      const link = document.createElement("a");
      link.href = cv; 
      link.download = "CV_2024_ACHREF_CHOUIKH.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <div className="home">
      <div className="left">
        <div className="titre">
          <h1>Achref &nbsp;CHOUIKH</h1>
          <h2>Développeur Web REACT | NODE</h2>
          <button className="button type1" onClick={handleDownloadCV}>
            <FontAwesomeIcon
              icon={faDownload}
              style={{
                color: "black",
                fontSize: "1.5em",
                backgroundColor: "#260940",
                marginRight: "12px",
              }}
            />
            <span className="btn-txt">MON CV</span>
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
