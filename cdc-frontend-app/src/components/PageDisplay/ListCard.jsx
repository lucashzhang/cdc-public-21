import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "../../utilities/theme.module.scss";
import "./styles.scss";

function ListCard({ title, to }) {
  return (
    <Link className="ListCard" to={to}>
      {title}
    </Link>
  );
}

export default ListCard;
