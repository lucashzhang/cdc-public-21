import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";

import About from "../../components/About";
import Schedule from "../../components/Schedule";
import FAQ from "../../components/FAQ";

function Conference() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const controller = handleEndpoint("conference", setPageContent);

    return () => {
      controller?.abort?.();
    };
  }, []);

  return (
    <div className="App-Content">
      <div className="App-Sections">
        <About content={pageContent["Description"]} />
        <Schedule content={pageContent["Schedule"]} />
        <FAQ contents={pageContent["FAQ"]} />
      </div>
    </div>
  );
}

export default Conference;
