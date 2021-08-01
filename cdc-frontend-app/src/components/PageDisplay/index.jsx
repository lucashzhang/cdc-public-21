import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";
import PageCard from "./PageCard";
import GridAnimation from "../GridAnimation";
import WrappedCarousel from "../Carousel";
import "./styles.scss";

function PageDisplay() {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    handleEndpoint("targets", setTargets);
  }, []);

  return (
    <div className="PageDisplay">
      <div className="row">
        <div className="container page-display-grid-container">
          <GridAnimation>
            <div className="page-display-carousel">
              <WrappedCarousel max={1}>
                <PageCard title="Hackathon" to="/hackathon" />
                <PageCard title="Data Conference" to="/conference" />
                {targets.map(
                  (target) =>
                    target["Name"] && (
                      <PageCard
                        title={target["Name"]}
                        to={`/t/${target["UID"]}`}
                        key={target["UID"]}
                      />
                    )
                )}
              </WrappedCarousel>
            </div>
          </GridAnimation>
        </div>
        <div className="page-display-content">
          <header>
            <h1>Pages</h1>
          </header>
          <div className="page-display-list container">
            <PageCard title="Hackathon" to="/hackathon" />
            <PageCard title="Data Conference" to="/conference" />
            {targets.map(
              (target) =>
                target["Name"] && (
                  <PageCard
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
