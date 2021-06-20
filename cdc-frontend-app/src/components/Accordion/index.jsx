import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from '../../utilities/theme.module.scss';
import "./styles.scss";

const contentVariants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

function Accordion({ id, open, setOpen, header, body }) {
  return (
    <div className="Accordion">
      <motion.button
        initial={false}
        animate={{ backgroundColor: open ? theme.primary : theme.backgroundLight }}
        onClick={() => setOpen(open ? undefined : id)}
        className="Accordion-header"
      >
        {header}      
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.section
            key={`Accordion-content-${id}`}
            variants={contentVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
              className="Accordion-body"
            >
              {body}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
