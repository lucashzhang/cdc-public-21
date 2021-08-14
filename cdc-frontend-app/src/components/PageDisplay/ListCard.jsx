import React from "react";
import { Link } from "react-router-dom";
import { LinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion"
import "./styles.scss";

const cardVariants = {
  passive: {
    scale: 1,
    transition: {
      duration: 0.2
    }
  },
  after: {
    scale: 0.98,
    transition: {
      duration: 0.2
    }
  },
  active: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
}

function ListCard({ title, to }) {
  return (
    <motion.div className="ListCard"
      variants={cardVariants}
      initial="passive"
      whileTap="after"
      whileHover="active" >
      <Link to={to} className="listcard-link" >
        <h4>{title}</h4>
        <LinkIcon />
      </Link>
    </motion.div>
  );
}

export default ListCard;
