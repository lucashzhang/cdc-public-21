import React, { useEffect, useState } from "react";
import { handleAPIURL, handleEndpoint } from "../../utilities/util";
import { motion } from "framer-motion"
import LazyLoad from "react-lazyload";

import "./styles.scss";

const cardVariants = {
    passive: {
        scale: 1
    },
    after: {
        scale: 0.95,
    },
    active: {
        scale: 1.05
    }
}

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
                    const { id, name, logo, website } = sponsor;
                    const { url, formats } = logo;
                    const { small } = formats || {};
                    return (
                        <motion.div key={id} className="sponsor-card"
                            variants={cardVariants}
                            initial="passive"
                            whileTap="after"
                            whileHover="active">
                            <a className="sponsor-card-img" href={website || "#"} target={website ? "_blank" : "_self"}>
                                <LazyLoad>
                                    <img src={`${handleAPIURL()}${small?.url || url || ""}`}></img>
                                </LazyLoad>
                            </a>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    );
}

export default Sponsors;
