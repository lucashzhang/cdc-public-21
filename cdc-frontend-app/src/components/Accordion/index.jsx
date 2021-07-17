import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from "framer-motion";
import theme from "../../utilities/theme.module.scss";
import "./styles.scss";

const contentVariants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

function Accordion({ id, header, body }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Accordion">
      <motion.button
        initial={false}
        animate={{
          backgroundColor: isOpen ? theme.secondary : theme.accent1,
          color: isOpen ? theme.primary : theme.text,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="Accordion-header"
      >
        {header}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
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
              {body && <ReactMarkdown>{body}</ReactMarkdown>}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
