import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const buttonVariants = {
  passive: {
    scale: 1,
  },
  after: {
    scale: 0.97,
  },
  active: {
    scale: 1.03
  }
};

function Button({ className, children, onClick }) {
  return (
    <motion.button
      className={`Button ${className || ""}`}
      variants={buttonVariants}
      initial="passive"
      whileTap="after"
      whileHover="active"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304 352"
      >
        <path d="M2,88.602540 L152,2 302,88.602540 v173.215081 L152,350.410161 2,261.807621 z" />
      </svg>
      <div className="buttonText">{children}</div>
    </motion.button>
  );
}

export default Button;
