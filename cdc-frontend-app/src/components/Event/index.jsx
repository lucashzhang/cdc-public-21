import React from "react";
import ListCard from "./ListCard";
import "./styles.scss";

function Event() {
  return (
    <div className="Event" id="event">
      <header>
        <h1>Our Event</h1>
      </header>
      <div className="row">
        <ListCard title="Data Challenge" to="/hackathon" />
        <ListCard title="Data Conference" to="/conference" />
      </div>
    </div>
  );
}

export default Event;
