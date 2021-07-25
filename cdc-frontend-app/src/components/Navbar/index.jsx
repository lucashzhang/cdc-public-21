import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const navVariants = {
  scrolling: {
    boxShadow: "0 2px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.12)",
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
};

function Navbar({ links }) {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    function reportScroll() {
      if (window.scrollY === 0) setIsScrolling(false);
      else if (isScrolling === false) setIsScrolling(true);
    }
    const scrollListener = window.addEventListener("scroll", reportScroll);

    return function cleanup() {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [isScrolling]);

  return (
    <motion.nav
      variants={navVariants}
      animate={isScrolling ? "scrolling" : ""}
      className="Navbar"
    >
      <div>

      </div>
    </motion.nav>
  );
}

export default Navbar;
