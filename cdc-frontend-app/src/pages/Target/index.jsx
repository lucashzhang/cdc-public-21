import React, { useEffect, useState } from "react";
import { handleAPIURL } from "../../utilities/util";
import { useParams, useHistory } from "react-router";
import About from "../../components/About";
import FAQ from "../../components/FAQ";

function Target() {
  const [pageContent, setPageContent] = useState({});
  const { targetId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${handleAPIURL()}/targets?UID=${targetId}`, { signal }).then(
      async (data) => {
        const contents = await data.json();
        if (contents.length === 0) history.push("/");
        setPageContent(contents[0]);
      }
    );

    return () => {
      controller.abort();
    };
  }, [targetId, history]);

  function handleSection(sectionInfo) {
    const { __component, id } = sectionInfo;
    switch (__component) {
      case "section.description":
        return <About key={`${__component}${id}`} content={sectionInfo} />;
      case "section.faq":
        return <FAQ key={`${__component}${id}`} contents={sectionInfo} />;
      default:
        return null;
    }
  }

  return (
    <div className="App-Content">
      {pageContent["Sections"] &&
        pageContent["Sections"].map((section) => handleSection(section))}
    </div>
  );
}

export default Target;
