import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const headings = ["Front End Developer"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = (index) => ({
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, delay: index * 0.2 },
  },
});

const Headline = () => {
  return (
    <motion.div
      className="containerHead"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {headings.map((heading, headingIndex) => (
        <motion.div
          key={headingIndex}
          className="heading-container"
          variants={containerVariants}
        >
          {heading.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="word"
              variants={itemVariants(wordIndex)}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Headline;
