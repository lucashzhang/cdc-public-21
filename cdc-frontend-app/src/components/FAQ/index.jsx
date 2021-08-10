import React from "react";
import Accordion from "../Accordion";
import "./styles.scss";

function FAQ({ contents }) {
  return contents ? (
    <div className="FAQ">
      <header>
        <h1>FAQ</h1>
      </header>
      <div className="row">
        {contents['faqs'].map((qa) => (
          <Accordion
            id={qa.question}
            key={qa.question}
            header={qa.question}
            body={qa.answer}
          />
        ))}
      </div>
    </div>
  ) : null;
}

export default FAQ;
