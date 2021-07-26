import React, { useState, useEffect, Children } from "react";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import Button from "../Button";
import "@brainhubeu/react-carousel/lib/style.css";

const slidesMod = (numSlides) => ({
  resolve: slidesToShowPlugin,
  options: {
    numberOfSlides: Math.max(numSlides, 1),
  },
});

function WrappedCarousel({ children, interval = 3000, max = 4 }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const carousel = setInterval(() => {
      const totalSlides = Children.count(children) ?? 0;
      setSlide((prevState) => (prevState + 1) % totalSlides);
    }, interval);

    return function cleanup() {
      clearInterval(carousel);
    };
  }, [children, interval]);

  function onChange(val) {
    const totalSlides = Children.count(children) ?? 0;
    setSlide(Math.max(val % totalSlides, 0));
  }

  const arrowsMod = {
    resolve: arrowsPlugin,
    options: {
      arrowLeft: (
        <Button className="carouselButton" onClick={() => onChange(slide - 1)}>
          {"<"}
        </Button>
      ),
      arrowRight: (
        <Button className="carouselButton" onClick={() => onChange(slide + 1)}>
          {">"}
        </Button>
      ),
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
      value={slide}
    >
      {children}
    </Carousel>
  );
}

export default WrappedCarousel