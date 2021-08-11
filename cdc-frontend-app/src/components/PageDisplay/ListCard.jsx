import React from "react";
import { Link } from "react-router-dom";
import { LinkIcon } from "@heroicons/react/solid";
import "./styles.scss";

function ListCard({ title, to }) {
  return (
    <Link className="ListCard" to={to}>
      {title}
      <LinkIcon />
    </Link>
  );
}

export default ListCard;
