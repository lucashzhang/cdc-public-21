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

    return (
        <div className="Sponsors">
            <header>
                <h1>Sponsors</h1>
            </header>
            <div className="row">
                {sponsors && sponsors.length !== 0 && sponsors?.map(sponsor => {
                    const { id, logo, name, website } = sponsor;
                    const { url, formats } = logo;
                    const { small } = formats || {};
                    return (
                        <motion.a key={id + name} className="sponsor-card"
                            variants={cardVariants}
                            initial="passive"
                            whileTap="after"
                            whileHover="active"
                            href={website || "#sponsors"}
                            target={website ? "_blank" : "_self"}>
                            <LazyLoad>
                                <img src={`${handleAPIURL()}${small?.url || url || ""}`}></img>
                            </LazyLoad>
                        </motion.a>
                    )
                })}
                <motion.a className="sponsor-card"
                    variants={cardVariants}
                    initial="passive"
                    whileTap="after"
                    whileHover="active"
                    href="mailto:sponsors@cdcunc.com">
                    <h2>
                        Interested in Sponsoring our Hackathon?
                    </h2>
                </motion.a>
            </div >
        </div >
    );
}

export default Sponsors;
