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

  return targets && targets.length > 0 ? (
    <div className="PageDisplay" id="fields">
      <div className="row">
        <div className="page-display-content">
          <header>
            <h1>Data Science in Your Field</h1>
          </header>
          <div className="page-display-list container">
            {targets?.map(
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
        <div className="container page-display-grid-container">
          <GridAnimation>
            <Collage />
          </GridAnimation>
        </div>
      </div>
    </div>
  ) : null;
}

export default PageDisplay;
