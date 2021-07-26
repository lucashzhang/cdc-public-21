import React, { useEffect, useState } from "react";
import { handleEndpoint } from "../../utilities/util";
import { useParams, useHistory } from "react-router-dom";
import About from "../../components/About";
import FAQ from "../../components/FAQ";

function Target() {
  const [pageContent, setPageContent] = useState({});
  const { targetId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const controller = handleEndpoint(`targets?UID=${targetId}`, setPageContent);

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
      default:
        return null;
    }
  }

  console.log(pageContent[0])

  return (
    <div className="App-Sections">
      {pageContent["Sections"] &&
        pageContent["Sections"].map((section) => handleSection(section))}
    </div>
  );
}

export default Target;
