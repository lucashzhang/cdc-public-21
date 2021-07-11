import React, { useEffect, useState } from "react";
import { handleAPIURL } from "../../utilities/util";

import About from "../../components/About";
import FAQ from "../../components/FAQ";
import Directors from "../../components/Directors";

function Landing() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${handleAPIURL()}/home`, { signal }).then(async (data) => {
      const contents = await data.json();
      setPageContent(contents);
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="App-Content">
      <About content={pageContent["Description"]} />
      <FAQ contents={pageContent["FAQ"]} />
      <Directors content={pageContent["Directors"]} />
    </div>
  );
}

export default Landing;
