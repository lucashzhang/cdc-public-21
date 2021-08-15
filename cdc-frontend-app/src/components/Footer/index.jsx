import React from "react";
import ReactMarkdown from "react-markdown";
import "./styles.scss";

function Footer() {
  return (
    <div className="Footer" id="footer">
      <ReactMarkdown>
        Copyright © 2021 [Carolina Analytics and Data Science](https://carolinadata.unc.edu/). All Rights Reserved
      </ReactMarkdown>
    </div>
  );
}

export default Footer;
