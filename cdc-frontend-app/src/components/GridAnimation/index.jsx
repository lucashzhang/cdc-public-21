import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.scss";
import { propTypes } from "react-markdown";

const drawVariants = {
  hidden: {
    pathLength: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  visible: {
    pathLength: 0.1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    // opacity: 0,
    scale: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    // opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};

function GridAnimation({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    // triggerOnce: true,
  });

  return (
    <div>
      <svg className="grid-background" viewBox="0 0 393.56 278.47" ref={ref}>
        <motion.path
          d="M53.07,29.31V278.47M90,29.31v224m36.9-224V270m36.9-240.73v224m36.89-224v224m36.9-224v224m36.89-224v224m36.9-224v224M348.24,0V88.94M28.9,44.46H384.14M28.9,76H356M28.9,107.47H331.8M28.9,139H331.8M28.9,170.48H352.47M28.9,202H361.72M0,233.49H393.56M301,11h83.1M13.89,267.41H76.41M348.07,160.72v93"
          variants={drawVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </svg>
      <motion.div
        className="grid-children"
        variants={childVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default GridAnimation;
