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
        <div className="Directors">
            <header>
                <h1>Sponsors</h1>
            </header>
            <div className="container">
                
            </div>
        </div>
    );
}

export default Sponsors;
