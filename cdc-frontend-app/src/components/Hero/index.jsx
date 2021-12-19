import React from "react";
import keyart from "../../assets/cdckeyart3.svg";
import title from "../../assets/cdctitletext.svg";
import "./styles.scss";

function Hero() {
  return (
    <div className="Hero row" id="hero">
      <div className="hero-left hero-column">
        <div className="hero-content">
          <img
            className="hero-title"
            src={title}
            alt="Carolina Data Challenge"
          />
          <div className="hero-link-container">
            <a
              className="hero-links"
              href="https://docs.google.com/forms/d/e/1FAIpQLSegq_r_e34oq5_cbCulmjguFVWWTXBrzJIdbGw3m8d8vgEepQ/viewform"
              target="_blank"
            >
              <h2>Carolina Data Challenge 2022 Interest Form</h2>
            </a>
            <a
              className="hero-links devpost-link"
              href="https://cdcunc21.devpost.com/"
              target="_blank"
            >
              <h2>2021 Devpost</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right hero-column">
        <img className="hero-graphic" src={keyart} alt="" />
      </div>
    </div>
  );
}

export default Hero;
