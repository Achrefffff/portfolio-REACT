import React from "react";
import "./Parcours.css";

const Parcours = () => {
  return (
    <section className="resume">
      <div className="container2">
        <div className="row">
          <div className="left-column">
            <h3 className="resume-title">Mon Parcours.</h3>
            <div className="resume-item">
              <h4>Titre RNCP en développement Web et Mobile</h4>
              <h5>2022 - 2024</h5>
              <p>
                <em>STUDI , France</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Master en Physiothérapie</h4>
              <h5>2010 - 2015</h5>
              <p>
                <em>Faculté des Sciences de la Santé, Tunis, Tunisie</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Bac Scientifique </h4>
              <h5>2010</h5>
              <p>
                <em>Faculté des Sciences de la Santé, Tunis, Tunisie</em>
              </p>
            </div>
          </div>
          <div className="right-column">
            <h3 className="resume-title">Expérience Professionnelle</h3>
            <div className="resume-item">
              <h4>Stage en Développement Web</h4>
              <h5>De janvier 2023 à juin 2023 </h5>
              <p>
                <em>Chez Littlewolf-tech, Tunis </em>
              </p>
              <ul>
                <li>
                  ARéservation d'hébergement : Développement de nouvelles
                  fonctionnalités, maintenance et tests
                </li>
                <li>Technologies : React.js, Node.js, Express, Firebase </li>
                <li>Methodology: Agile</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Kinésithérapeute</h4>
              <h5>2019 - 2022</h5>
              <p>
                <em>At Medico-Sports Center, Tunis</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
