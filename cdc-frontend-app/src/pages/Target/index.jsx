import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";
import { useParams, useHistory } from "react-router-dom";
import About from "../../components/About";
import FAQ from "../../components/FAQ";
import Resources from "../../components/Resources";

function Target() {
  const [pageContent, setPageContent] = useState({});
  const { targetId } = useParams();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    const controller = handleEndpoint(
      `targets?UID=${targetId}&_limit=1`,
      setPageContent
    );

    return () => {
      controller?.abort?.();
    };
  }, [targetId, history]);

  function handleSection(sectionInfo) {
    const { __component, id } = sectionInfo;
    switch (__component) {
      case "section.description":
        return <About key={`${__component}${id}`} content={sectionInfo} />;
      case "section.faq":
        return <FAQ key={`${__component}${id}`} contents={sectionInfo} />;
      case "section.resources":
        return <Resources key={`${__component}${id}`} contents={sectionInfo} />;
      default:
        return null;
    }
  }

  return pageContent && pageContent[0] && pageContent[0]["Sections"] ? (
    <div className="App-Content">
      <div className="App-Sections">
        {pageContent[0]["Sections"].map((section) => handleSection(section))}
      </div>
    </div>
  ) : null;
}

export default Target;
