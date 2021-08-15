import React from "react";
import ReactMarkdown from "react-markdown";
import GridAnimation from "../GridAnimation";
import Collage from "../Collage";
import "./styles.scss";

function About({ content }) {
  console.log(content);
  return content ? (
    <div className="About" id="about">
      <div className="row">
        <div className="container about-video-container">
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
              <Collage />
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
