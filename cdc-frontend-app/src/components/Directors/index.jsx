import React from "react";
import { handleAPIURL } from "../../utilities/util";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import Button from "../Button";
import LazyLoad from "react-lazyload";
import "@brainhubeu/react-carousel/lib/style.css";

import "./styles.scss";

const arrowsMod = {
  resolve: arrowsPlugin,
  options: {
    arrowLeft: <Button className="carouselButton">{"<"}</Button>,
    arrowRight: <Button className="carouselButton">{">"}</Button>,
    addArrowClickHandler: true,
  },
};

const autoPlayMod = {
  resolve: autoplayPlugin,
  options: {
    interval: 4000,
  },
};

const slidesMod = (numSlides) => ({
  resolve: slidesToShowPlugin,
  options: {
    numberOfSlides: numSlides,
  },
});

function Directors({ content }) {
  return content ? (
    <div className="Directors">
      <header>
        <h1>Directors</h1>
      </header>
      <div className="container">
        <Carousel
          plugins={["infinite", slidesMod(4), arrowsMod, autoPlayMod]}
          breakpoints={{
            640: {
              plugins: ["infinite", slidesMod(1), autoPlayMod],
            },
            1080: {
              plugins: ["infinite", slidesMod(2), autoPlayMod],
            },
            1500: {
              plugins: ["infinite", slidesMod(3), autoPlayMod],
            }
          }}
          animationSpeed={1000}
        >
          {(content.directors ?? []).map((director) => {
            if (director == null) return null;
            const { Name, Position, Picture } = director;
            const { url, formats } = Picture;
            const { small } = formats;
            return (
              <div className="directorCard" key={`${Name}${Position}`}>
                <LazyLoad height={300} offset={100} once>
                  <img src={`${handleAPIURL()}${small?.url || url}`} alt="" />
                </LazyLoad>
                <h3 className="directorName">{Name}</h3>
                <div className="directorPosition">{Position}</div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  ) : null;
}

export default Directors;
