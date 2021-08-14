import React from "react";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Button from "../Button";
import "@brainhubeu/react-carousel/lib/style.css";

const slidesMod = (numSlides) => ({
  resolve: slidesToShowPlugin,
  options: {
    numberOfSlides: Math.max(numSlides, 1),
  },
});

function WrappedCarousel({ children, max = 4 }) {
  const arrowsMod = {
    resolve: arrowsPlugin,
    options: {
      arrowLeft: (
        <Button className="carouselButton">
          <ChevronLeftIcon />
        </Button>
      ),
      arrowRight: (
        <Button className="carouselButton">
          <ChevronRightIcon />
        </Button>
      ),
      addArrowClickHandler: true,
    },
  };

  return (
    <Carousel
      plugins={[slidesMod(max), arrowsMod]}
      breakpoints={{
        640: {
          plugins: [slidesMod(max - 3)],
        },
        1080: {
          plugins: [slidesMod(max - 2)],
        },
        1500: {
          plugins: [slidesMod(max - 1)],
        },
      }}
    >
      {children}
    </Carousel>
  );
}

export default WrappedCarousel;
