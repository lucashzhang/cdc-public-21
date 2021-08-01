import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "../../utilities/theme.module.scss";
import "./styles.scss";

function PageCard({ title, to }) {
  return (
    <Link className="PageCard" to={to}>
      {title}
    </Link>
  );
}

export default PageCard;
