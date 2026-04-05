"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  speed?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  className,
  delay = 0,
  once = false,
  speed = 1,
}) => {
  const lines = text.split(/\\n|\n/);

  const staggerDelay = 0.03 / speed;
  const duration = 0.8 / speed;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 / speed,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
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
        duration,
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
      viewport={{ once, margin: "-100px" }}
    >
      {lines.map((line, lineIndex) => (
        <motion.span
          key={lineIndex}
          className="block overflow-hidden"
          variants={lineVariants}
        >
          {line.split(" ").map((word, wordIndex, wordArr) => (
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
              {wordIndex < wordArr.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default SectionTitle;
