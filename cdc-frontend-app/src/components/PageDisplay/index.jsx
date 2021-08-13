import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";
import ListCard from "./ListCard";
import GridAnimation from "../GridAnimation";
import Collage from "../Collage";
import "./styles.scss";

function PageDisplay() {
  const [targets, setTargets] = useState();

  useEffect(() => {
    handleEndpoint("targets", setTargets);
  }, []);

  return (
    <div className="PageDisplay">
      <div className="row">
        <div className="container page-display-grid-container">
          <GridAnimation>
            <Collage/>
          </GridAnimation>
        </div>
        <div className="page-display-content">
          <header>
            <h1>Our Event</h1>
          </header>
          <div className="page-display-list container">
            <ListCard title="Hackathon" to="/hackathon" />
            <ListCard title="Data Conference" to="/conference" />
            {targets && targets?.map(
              (target) =>
                target["Name"] && (
                  <ListCard
                    title={target["Name"]}
                    to={`/t/${target["UID"]}`}
                    key={target["UID"]}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDisplay;
