import React, { useEffect, useState } from "react";
import About from "../../components/About";
import FAQ from "../../components/FAQ";

function Landing() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`http://${process.env.NODE_ENV === 'development' ? "localhost:1337" : "api.cdcunc.com"}/home`, { signal }).then(async (data) => {
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
    </div>
  );
}

export default Landing;
