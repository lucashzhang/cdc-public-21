import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from 'react-router-dom'
import logo from '../../assets/cdcfinal.svg'
import "./styles.scss";

const navVariants = {
  scrolling: {
    boxShadow: "0 2px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.12)",
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
};

function NavControls() {
  const location = useLocation();
  const { pathname } = location;

  switch (pathname) {
    case "/":
      return (
        <>
          <Link to="#about" className="navButton" smooth><h4>About Us</h4></Link>
          <Link to="#event" className="navButton" smooth><h4>Our Event</h4></Link>
          {/* <Link to="#" className="navButton" smooth><h4>Schedule</h4></Link> */}
          <Link to="#faq" className="navButton" smooth><h4>FAQ</h4></Link>
          <Link to="#directors" className="navButton" smooth><h4>Directors</h4></Link>
          <Link to="#sponsors" className="navButton" smooth><h4>Sponsors</h4></Link>
        </>
      )
    case "/hackathon":
    case "/conference":
      return (
        <>
          <Link to="/#" className="navButton" smooth><h4>Home</h4></Link>
          <Link to="#about" className="navButton" smooth><h4>About Us</h4></Link>
          <Link to="#schedule" className="navButton" smooth><h4>Schedule</h4></Link>
          <Link to="#faq" className="navButton" smooth><h4>FAQ</h4></Link>
        </>
      )
    default:
      return (
        <>
          <Link to="/#" className="navButton" smooth><h4>Home</h4></Link>
        </>
      )
  }
}

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function reportScroll() {
      if (window.scrollY === 0 && isScrolling === true) setIsScrolling(false);
      else if (isScrolling === false) setIsScrolling(true);
    }
    window.addEventListener("scroll", reportScroll);

    return function cleanup() {
      window.removeEventListener("scroll", reportScroll);
    }
  }, [isScrolling]);

  return (
    <motion.nav
      variants={navVariants}
      animate={isScrolling ? "scrolling" : ""}
      className="Navbar"
    >
      <div className="navContent" smooth>
        <Link className="navLogo"  to="/#" smooth><img src={logo} alt=""></img></Link>
        <div className="navControls">
          <NavControls />
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
