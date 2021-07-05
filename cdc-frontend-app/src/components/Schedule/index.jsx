import React from "react";
import Accordion from "../Accordion";
import "./styles.scss";

function Schedule({ contents }) {
  return contents ? (
    <div className="Schedule">
      <header>
        <h1>FAQ</h1>
      </header>
      <div className="row">
        {contents['faqs'].map((qa) => (
          <Accordion
            id={qa.Question}
            key={qa.Question}
            header={qa.Question}
            body={qa.Answer}
          />
        ))}
      </div>
    </div>
  ) : null;
}

export default Schedule;
