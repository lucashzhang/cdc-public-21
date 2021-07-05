import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.scss';

function Landing() {

  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src={logo} className="Landing-logo" alt="logo" />
        <p>
          Hello, Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Landing-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Landing;