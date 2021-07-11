import React from "react";
import { handleAPIURL } from "../../utilities/util";

import "./styles.scss";

function Directors({ content }) {
  return content ? (
    <div className="Directors">
      {(content.directors ?? []).map((director) => {
        if (director == null) return null;
        const { Name, Pronouns, Position, Picture, Linkedin, Email } = director;
        const { url, formats } = Picture;
        const { small } = formats;
        return (
          <div className="directorCard" key={`${Name}${Position}`}>
            <img src={`${handleAPIURL()}${small?.url || url}`}></img>
            <h3>{Name}</h3>
            {Pronouns && <p>{Pronouns}</p>}
            <b>{Position}</b>
          </div>
        );
      })}
    </div>
  ) : null;
}

export default Directors;
