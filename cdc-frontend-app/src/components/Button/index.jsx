import React from "react";
import { motion } from "framer-motion";
import theme from "../../utilities/theme.module.scss";
import "./styles.scss";

const buttonVariants = {
  passive: {
    scale: 1,
  },
  after: {
    scale: 0.95,
  },
};

const pathVariants = {
  passive: {
    fill: theme.accent1,
  },
  active: {
    fill: theme.accent1Alt,
  },
};

function Button({ className, children }) {
  return (
    <motion.button
      className={`Button ${className || ""}`}
      variants={buttonVariants}
      initial="passive"
      whileTap="after"
      whileHover="active"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304 352"
        variants={pathVariants}
      >
        <path d="M2,88.602540 L152,2 302,88.602540 v173.215081 L152,350.410161 2,261.807621 z" />
      </motion.svg>
      <div className="buttonText">{children}</div>
    </motion.button>
  );
}

export default Button;
