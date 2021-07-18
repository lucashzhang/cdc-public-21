import React from "react";
import { motion } from "framer-motion";
import theme from "../../utilities/theme.module.scss";
import "./styles.scss";

function Button({className, children}) {
  return (
    <motion.button
      className={`Button ${className || ""}`}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 352">
        <motion.path
          initial={{ fill: theme.accent2 }}
          whileHover={{ fill: theme.accent2Alt }}
          d="M2,88.602540 L152,2 302,88.602540 v173.215081 L152,350.410161 2,261.807621 z"
        />
      </svg>
      <div className="buttonText">
        {children}
      </div>
    </motion.button>
  );
}

export default Button;
