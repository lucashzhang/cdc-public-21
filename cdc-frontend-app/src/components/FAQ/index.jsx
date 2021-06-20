import React, { useState } from "react";
import Accordion from "../Accordion";
import "./styles.scss";

const dummy = [
  {
    question: "Why did the chicken cross the road?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis risus at semper iaculis. Proin at nulla vel augue egestas vulputate. Nulla facilisi. Proin feugiat suscipit ex ut aliquet. Nulla sed vulputate ipsum. Suspendisse sit amet ullamcorper tortor. Proin sed ligula egestas, porttitor massa id, porttitor orci. Nunc sit amet enim vel mauris bibendum consequat. Praesent maximus dignissim blandit. Vivamus vel euismod massa.",
  },
  {
    question: "What is Love?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis risus at semper iaculis. Proin at nulla vel augue egestas vulputate. Nulla facilisi. Proin feugiat suscipit ex ut aliquet. Nulla sed vulputate ipsum. Suspendisse sit amet ullamcorper tortor. Proin sed ligula egestas, porttitor massa id, porttitor orci. Nunc sit amet enim vel mauris bibendum consequat. Praesent maximus dignissim blandit. Vivamus vel euismod massa. ",
  },
  {
    question: "What's 1+1?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis risus at semper iaculis. Proin at nulla vel augue egestas vulputate. Nulla facilisi. Proin feugiat suscipit ex ut aliquet. Nulla sed vulputate ipsum. Suspendisse sit amet ullamcorper tortor. Proin sed ligula egestas, porttitor massa id, porttitor orci. Nunc sit amet enim vel mauris bibendum consequat. Praesent maximus dignissim blandit. Vivamus vel euismod massa. ",
  },
  {
    question: "What's 2+2?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis risus at semper iaculis. Proin at nulla vel augue egestas vulputate. Nulla facilisi. Proin feugiat suscipit ex ut aliquet. Nulla sed vulputate ipsum. Suspendisse sit amet ullamcorper tortor. Proin sed ligula egestas, porttitor massa id, porttitor orci. Nunc sit amet enim vel mauris bibendum consequat. Praesent maximus dignissim blandit. Vivamus vel euismod massa. ",
  },
  {
    question: "What's 3+2?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis risus at semper iaculis. Proin at nulla vel augue egestas vulputate. Nulla facilisi. Proin feugiat suscipit ex ut aliquet. Nulla sed vulputate ipsum. Suspendisse sit amet ullamcorper tortor. Proin sed ligula egestas, porttitor massa id, porttitor orci. Nunc sit amet enim vel mauris bibendum consequat. Praesent maximus dignissim blandit. Vivamus vel euismod massa. ",
  },
  {
    question: "What's 4+2?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis risus at semper iaculis. Proin at nulla vel augue egestas vulputate. Nulla facilisi. Proin feugiat suscipit ex ut aliquet. Nulla sed vulputate ipsum. Suspendisse sit amet ullamcorper tortor. Proin sed ligula egestas, porttitor massa id, porttitor orci. Nunc sit amet enim vel mauris bibendum consequat. Praesent maximus dignissim blandit. Vivamus vel euismod massa. ",
  }
];

function FAQ() {
  const [accordionOpen, setAccordionOpen] = useState();
  return (
    <div className="FAQ">
      <header>
        <h1>FAQ</h1>
      </header>
      <div className="question-container">
        {dummy.map((qa) => (
          <Accordion
            id={qa.question}
            key={qa.question}
            header={qa.question}
            body={qa.answer}
            open={qa.question === accordionOpen}
            setOpen={setAccordionOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
