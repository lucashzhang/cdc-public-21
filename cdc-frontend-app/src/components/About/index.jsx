import React from "react";
import ReactMarkdown from "react-markdown";
import "./styles.scss";

function About({ content }) {
  return content ? (
    <div className="About">
      <header>
        <h1>{content["Header"] ?? "About"}</h1>
      </header>
      <div className="row">
        <div className="container about-text">
          <ReactMarkdown>{content["Content"]}</ReactMarkdown>
        </div>
        <div className="container about-video-container">
          <iframe
            className="about-video dropshadow"
            src="https://www.youtube.com/embed/6FnwAbd2SDY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  ) : null;
}

export default About;
