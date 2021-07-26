import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";

import About from "../../components/About";
import FAQ from "../../components/FAQ";
import Directors from "../../components/Directors";

function Landing() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const controller = handleEndpoint('home', setPageContent)

    return () => {
      controller?.abort?.();
    };
  }, []);

  return (
    <div className="App-Sections">
      <About content={pageContent["Description"]} id="#about" />
      <FAQ contents={pageContent["FAQ"]} id="#faq" />
      <Directors content={pageContent["Directors"]} id="#directors" />
    </div>
  );
}

export default Landing;
