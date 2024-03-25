import React, { useState } from "react";
import "./Projet.css";
import homme from "../../assets/homme.jpg";
import ecom from "../../assets/store.png";
import cinepro from "../../assets/procinema.jpg";
import garage from "../../assets/garage.jpg";
import y4 from "../../assets/y4.png";

const Projet = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (index, event) => {
    setHoveredIndex(index);
    setButtonPosition({ x: event.clientX, y: event.clientY });
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setShowButton(false);
  };
   const links = [
     "https://github.com/Achrefffff/Reservation_cinema-React-Native-",
     "https://github.com/Achrefffff/E-commerce-REACT_NODE_MongoDB",
     "https://github.com/Achrefffff/garage2",
     "https://github.com/Achrefffff/YoutubeBlackClone",
   ];

  return (
    <div className="container4">
      <div
        className="card"
        onMouseEnter={(e) => handleMouseEnter(0, e)}
        onMouseLeave={handleMouseLeave}
      >
        {showButton && hoveredIndex === 0 && (
          <button
            className="hover-button"
            style={{
              left: buttonPosition.x - 50,
              top: buttonPosition.y - 25,
              fontWeight: "bold",
            }}
          >
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              En savoir plus
            </a>
          </button>
        )}
        <div
          style={{
            filter: hoveredIndex === 0 ? "blur(3px)" : "none",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={cinepro} alt="" />
          <div className="card-body">
            <h3>Cinema Réservation.</h3>
            <p>
              Application mobile permettant de réserver et d'acheter des
              billets.
            </p>
          </div>
          <div className="li-style">
            <li className="card-li">React Native</li>
            <li className="card-li">Node</li>
            <li className="card-li">Firebase</li>
          </div>
        </div>
      </div>
      <div
        className="card"
        onMouseEnter={(e) => handleMouseEnter(1, e)}
        onMouseLeave={handleMouseLeave}
      >
        {showButton && hoveredIndex === 1 && (
          <button
            className="hover-button"
            style={{
              left: buttonPosition.x - 50,
              top: buttonPosition.y - 25,
              fontWeight: "bold",
            }}
          >
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              En savoir plus
            </a>
          </button>
        )}
        <div
          style={{
            filter: hoveredIndex === 1 ? "blur(3px)" : "none",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={ecom} alt="" />
          <div className="card-body">
            <h3>Ecom</h3>
            <p>Application Web e-commerce Full Stack avec administration</p>
          </div>
          <div className="li-style">
            <li className="card-li">ReactJS </li>
            <li className="card-li">MongoDB</li>
            <li className="card-li">Express </li>
            <li className="card-li">NodeJS</li>
          </div>
        </div>
      </div>
      <div
        className="card"
        onMouseEnter={(e) => handleMouseEnter(2, e)}
        onMouseLeave={handleMouseLeave}
      >
        {showButton && hoveredIndex === 2 && (
          <button
            className="hover-button"
            style={{
              left: buttonPosition.x - 50,
              top: buttonPosition.y - 25,
              fontWeight: "bold",
            }}
          >
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
              En savoir plus
            </a>
          </button>
        )}
        <div
          style={{
            filter: hoveredIndex === 2 ? "blur(3px)" : "none",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={garage} alt="" />
          <div className="card-body">
            <h3>Garage</h3>
            <p>
              Application garage présente les services avec une administration
              intégrée.
            </p>
          </div>
          <div className="li-style">
            <li className="card-li">PHP</li>
            <li className="card-li">Symfony</li>
            <li className="card-li">Javascript</li>
            <li className="card-li">MySql</li>
          </div>
        </div>
      </div>
      <div
        className="card"
        onMouseEnter={(e) => handleMouseEnter(3, e)}
        onMouseLeave={handleMouseLeave}
      >
        {showButton && hoveredIndex === 3 && (
          <button
            className="hover-button"
            style={{
              left: buttonPosition.x - 50,
              top: buttonPosition.y - 25,
              fontWeight: "bold",
            }}
          >
            <a href={links[3]} target="_blank" rel="noopener noreferrer">
              En savoir plus
            </a>
          </button>
        )}
        <div
          style={{
            filter: hoveredIndex === 3 ? "blur(3px)" : "none",
            width: "100%",
            height: "100%",
          }}
        >
          <img className="you-img" src={y4} alt="" />
          <div className="card-body">
            <h3>Youtube Clone</h3>
            <p>lorem ipsum dolores indolore estapé noway sddsfdsfsd</p>
          </div>
          <div className="li-style">
            <li className="card-li">ReactJS</li>
            <li className="card-li">YoutubeAPI</li>
            <li className="card-li">Vite</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projet;
