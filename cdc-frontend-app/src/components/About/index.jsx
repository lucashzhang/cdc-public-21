import React from "react";
import ReactMarkdown from "react-markdown";
import GridAnimation from "../GridAnimation";
import "./styles.scss";

function About({ content }) {
  return content ? (
    <div className="About">
      <div className="row">
        <div className="about-text">
          <header>
            <h1>{content["Header"] ?? "About"}</h1>
          </header>
          <ReactMarkdown className="container">
            {content["Content"]}
          </ReactMarkdown>
        </div>
        <div className="container about-video-container">
          <GridAnimation>
            <iframe
              className="about-video dropshadow"
              src="https://www.youtube.com/embed/6FnwAbd2SDY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </GridAnimation>
        </div>
      </div>
    </div>
  ) : null;
}

export default About;
