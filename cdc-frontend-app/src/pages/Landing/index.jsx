import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";

import About from "../../components/About";
import PageDisplay from "../../components/PageDisplay";
import FAQ from "../../components/FAQ";
import Directors from "../../components/Directors";
import Sponsors from "../../components/Sponsors";

function Landing() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0)
    const controller = handleEndpoint("home", setPageContent);

    return () => {
      controller?.abort?.();
    };
  }, []);

  return (
    <div className="App-Sections">
      <About content={pageContent["Description"]} />
      <PageDisplay />
      <FAQ contents={pageContent["FAQ"]} />
      <Directors />
      <Sponsors />
    </div>
  );
}

export default Landing;