import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";

import Hero from "../../components/Hero";
import About from "../../components/About";
import Event from "../../components/Event";
import PageDisplay from "../../components/PageDisplay";
import Schedule from "../../components/Schedule";
import FAQ from "../../components/FAQ";
import Directors from "../../components/Directors";
import Sponsors from "../../components/Sponsors";

function Landing() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const controller = handleEndpoint("home", setPageContent);

    return () => {
      controller?.abort?.();
    };
  }, []);

  return (
    <>
      <Hero />
      <div className="App-Content">
        <div className="App-Sections">
          <About content={pageContent["Description"]} />
          <Event />
          <PageDisplay />
          <Schedule content={pageContent["Schedule"]} />
          <FAQ contents={pageContent["FAQ"]} />
          <Directors />
          <Sponsors />
        </div>
      </div>
    </>
  );
}

export default Landing;
