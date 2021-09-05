import React from "react";
import { ExternalLinkIcon as LinkIcon } from "@heroicons/react/solid";
import "./styles.scss";

function ListCard({ title, to }) {
  return (
      <a href={to} target="_blank" className="ListCard" >
        <h4>{title}</h4>
        {to !== "#" && <LinkIcon />}
      </a>
  );
}

export default ListCard;
