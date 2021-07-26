import React from "react";
import { handleAPIURL } from "../../utilities/util";
import WrappedCarousel from "../Carousel";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function Directors({ content }) {
  return content ? (
    <div className="Directors">
      <header>
        <h1>Directors</h1>
      </header>
      <div className="container">
        <LazyLoad height={300} offset={100} once>
          <WrappedCarousel>
            {(content.directors ?? []).map((director) => {
              if (director == null) return null;
              const { Name, Position, Picture } = director;
              const { url, formats } = Picture;
              const { small } = formats;
              return (
                <div className="directorCard" key={`${Name}${Position}`}>
                  <img src={`${handleAPIURL()}${small?.url || url}`} alt="" />
                  <h3 className="directorName">{Name}</h3>
                  <div className="directorPosition">{Position}</div>
                </div>
              );
            })}
          </WrappedCarousel>
        </LazyLoad>
      </div>
    </div>
  ) : null;
}

export default Directors;
