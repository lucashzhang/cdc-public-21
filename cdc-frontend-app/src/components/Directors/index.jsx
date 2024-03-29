import React, { useEffect, useState } from "react";
import { handleAPIURL, handleEndpoint } from "../../utilities/util";
import WrappedCarousel from "../Carousel";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function Directors() {
    const [directors, setDirectors] = useState([]);
    useEffect(() => {
        handleEndpoint("directors", setDirectors);
    }, []);

    return directors && directors.length !== 0 && (
        <div className="Directors" id="directors">
            <header>
                <h1>Our Team of Directors</h1>
            </header>
            <div className="container">
                <WrappedCarousel>
                    {directors?.map((director) => {
                        if (director == null) return null;
                        const { name, position, picture } = director;
                        const { url, formats } = picture;
                        const { small } = formats;
                        return (
                            <div className="directorCard" key={`${name}${position}`}>
                                <LazyLoad height={300} offset={100} once>
                                    <img src={`${handleAPIURL()}${small?.url || url || ""}`} alt="" />
                                    <h3 className="directorName">{name}</h3>
                                    <div className="directorPosition">{position}</div>
                                </LazyLoad>
                            </div>
                        );
                    })}
                </WrappedCarousel>
            </div>
        </div>
    );
}

export default Directors;
