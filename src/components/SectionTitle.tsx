"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  text: string;
  className?: string;
  delay?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  className,
  delay = 0,
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  };

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={charVariants}
              className="inline-block text-inherit"
            >
              {char}
            </motion.span>
          ))}
          {/* Add space between words */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.h2>
  );
};

export default SectionTitle;
