import React from "react";
import ListCard from "./ListCard";
import "./styles.scss";

function Resources({ contents }) {
  return (
    <div className="Event" id="event">
      <div className="row">
        {contents["resources"].map((resource) => (
          <ListCard title={resource.title ?? ""} to={resource.link ?? "#"} />
        ))}
      </div>
    </div>
  );
}

export default Resources;
