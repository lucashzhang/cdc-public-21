import React from "react";
import { LinkIcon } from "@heroicons/react/solid";
import "./styles.scss";

function ListCard({ title, to }) {
  return (
      <a href={to} className="ListCard" >
        <h4>{title}</h4>
        <LinkIcon />
      </a>
  );
}

export default ListCard;
