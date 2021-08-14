import React, { useEffect, useState } from "react";
import { handleAPIURL, handleEndpoint } from "../../utilities/util";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function Sponsors() {
    const [sponsors, setSponsors] = useState([]);
    useEffect(() => {
        handleEndpoint("sponsors", setSponsors);
    }, []);

    return sponsors && sponsors.length !== 0 && (
        <div className="Sponsors">
            <header>
                <h1>Sponsors</h1>
            </header>
            <div className="row">
                {sponsors?.map(sponsor => {
                    const { id, name, logo } = sponsor;
                    const { url, formats } = logo;
                    const { small } = formats || {};
                    return (
                        <div key={id} className="sponsor-card">
                            <div className="sponsor-card-img">
                                <LazyLoad>
                                    <img src={`${handleAPIURL()}${small?.url || url || ""}`}></img>
                                </LazyLoad>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Sponsors;
