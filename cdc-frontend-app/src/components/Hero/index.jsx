import React from 'react';
import keyart from '../../assets/cdckeyart3.svg';
import title from '../../assets/cdctitletext.svg';
import './styles.scss';

function Hero() {

  return (
    <div className="Hero row" id="hero">
      <div className="hero-left hero-column">
        <div className="hero-content">
          <img className="hero-title" src={title} alt="Carolina Data Challenge" />
          <div className="hero-link-container">
            <a className="hero-links" href="#" target="_self">
              <h4>Coming Soon!</h4>
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
