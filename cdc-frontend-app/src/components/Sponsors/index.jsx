import React, { useEffect, useState } from "react";
import { handleAPIURL, handleEndpoint } from "../../utilities/util";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function Sponsors() {
    const [sponsors, setSponsors] = useState([]);
    useEffect(() => {
        handleEndpoint("sponsors?_sort=tier:DESC", setSponsors);
    }, []);

    return (
        <div className="Sponsors" id="sponsors">
            <header>
                <h1>Our Sponsors</h1>
            </header>
            <div className="row">
                {sponsors && sponsors.length !== 0 && sponsors?.map(sponsor => {
                    const { id, logo, name, website } = sponsor;
                    const { url, formats } = logo;
                    const { small } = formats || {};
                    return (
                        <a key={id + name} className="sponsor-card"
                            href={website || "#sponsors"}
                            target={website ? "_blank" : "_self"}>
                            <LazyLoad>
                                <img src={`${handleAPIURL()}${small?.url || url || ""}`}></img>
                            </LazyLoad>
                        </a>
                    )
                })}
                <a className="sponsor-card"
                    href="mailto:sponsors@cdcunc.com">
                    <h2>
                        Interested in Sponsoring our Event?
                    </h2>
                </a>
            </div >
        </div >
    );
}

export default Sponsors;
