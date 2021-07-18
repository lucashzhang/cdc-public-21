import React from "react";
import { handleAPIURL } from "../../utilities/util";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import Button from "../Button";
import "@brainhubeu/react-carousel/lib/style.css";

import "./styles.scss";

function Directors({ content }) {
  return content ? (
    <div className="Directors">
      <header>
        <h1>Directors</h1>
      </header>
      <div className="container">
        <Carousel
          plugins={[
            "infinite",
            "autoPlay",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <Button className="carouselButton">{"<"}</Button>,
                arrowRight: <Button className="carouselButton">{">"}</Button>,
                addArrowClickHandler: true,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                "infinite",
                "autoPlay",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "infinite",
                "autoPlay",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          {(content.directors ?? []).map((director) => {
            if (director == null) return null;
            const { Name, Position, Picture } = director;
            const { url, formats } = Picture;
            const { small } = formats;
            return (
              <div className="directorCard" key={`${Name}${Position}`}>
                <img src={`${handleAPIURL()}${small?.url || url}`} />
                <h3>{Name}</h3>
                <div>{Position}</div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  ) : null;
}

export default Directors;
