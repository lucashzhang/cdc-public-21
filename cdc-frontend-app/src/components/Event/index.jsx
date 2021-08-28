import React from "react";
import ListCard from "./ListCard";
import "./styles.scss";

function Event() {
  return (
    <div className="Event" id="event">
      <div className="row">
        <ListCard title="Hackathon" to="/hackathon" />
        <ListCard title="Data Conference" to="/conference" />
      </div>
    </div>
  );
}

export default Event;
