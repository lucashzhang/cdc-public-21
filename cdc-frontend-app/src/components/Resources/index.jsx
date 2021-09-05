import React from "react";
import ListCard from "./ListCard";
import "./styles.scss";

function Resources({ contents }) {
  return (
    <div className="Resource">
      <header>
        <h1>{contents["title"]}</h1>
      </header>
      <div className="row container">
        {contents["resources"].map((resource) => (
          <ListCard title={resource.title ?? ""} to={resource.link ?? "#"} />
        ))}
      </div>
    </div>
  );
}

export default Resources;
