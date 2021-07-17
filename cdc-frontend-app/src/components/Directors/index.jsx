import React from "react";
import { handleAPIURL } from "../../utilities/util";

import "./styles.scss";

function Directors({ content }) {
  return content ? (
    <div className="Directors">
      <header>
        <h1>Directors</h1>
      </header>
      <div className="row container">
        {(content.directors ?? []).map((director) => {
          if (director == null) return null;
          const { Name, Pronouns, Position, Picture, Linkedin, Email } =
            director;
          const { url, formats } = Picture;
          const { small } = formats;
          return (
            <div className="directorCard" key={`${Name}${Position}`}>
              <img lazy src={`${handleAPIURL()}${small?.url || url}`}></img>
              <h3>{Name}</h3>
              <div>{Position}</div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}

export default Directors;
