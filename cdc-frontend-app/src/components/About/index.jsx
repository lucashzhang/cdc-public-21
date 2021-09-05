import React from "react";
import ReactMarkdown from "react-markdown";
import GridAnimation from "../GridAnimation";
import Magnify from "../../assets/magnifying3.svg";
import "./styles.scss";

function About({ content }) {
  return content ? (
    <div className="About" id="about">
      <div className="row">
        <div className="about-video-container">
          <GridAnimation>
            {content["video"] ? (
              <iframe
                className="about-video dropshadow"
                src={content["video"]}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            ) : (
              <img src={Magnify} />
            )}
          </GridAnimation>
        </div>
        <div className="about-text">
          <header>
            <h1>{content["header"] ?? "About"}</h1>
          </header>
          <ReactMarkdown className="container">
            {content["content"]}
          </ReactMarkdown>
        </div>

      </div>
    </div>
  ) : null;
}

export default About;
