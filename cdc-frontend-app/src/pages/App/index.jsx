import React, { useEffect, useState } from "react";
import Landing from "../../components/Landing";
import About from "../../components/About";
import FAQ from "../../components/FAQ";
import "./styles.scss";

function App() {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:1337/home", { signal }).then(async (data) => {
      const contents = await data.json();
      setPageContent(contents);
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="App">
      <Landing />
      <About content={pageContent["Description"]} />
      <FAQ contents={pageContent["FAQ"]} />
      <Landing />
    </div>
  );
}

export default App;
