"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  dimmedWords?: string[];
  dimmedClass?: string;
  delay?: number;
  wordDelay?: number;
  duration?: number;
}

export function TextReveal({
  text,
  className = "",
  highlightWords = [],
  highlightClass = "text-[#5DDCF6]",
  dimmedWords = [],
  dimmedClass = "text-white/30",
  delay = 0,
  wordDelay = 0.04,
  duration = 0.75,
}: TextRevealProps) {
  const lines = text.split("\n");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: wordDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 42,
      rotateX: 90,
      transformOrigin: "center top",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  let globalIndex = 0;

  return (
    <motion.span
      style={{ perspective: "1000px", display: "inline" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {lines.map((line, lineIdx) => {
        const words = line.split(" ").filter(Boolean);
        return (
          <React.Fragment key={`line-${lineIdx}`}>
            {lineIdx > 0 && <br className="hidden sm:block" />}
            {words.map((word) => {
              globalIndex++;
              const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
              const isHighlight = highlightWords.some(
                (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
              );
              const isDimmed = dimmedWords.some(
                (dw) => dw.toLowerCase() === cleanWord.toLowerCase()
              );

              let wordStyle = "inline-block mr-[0.25em] ";
              if (isHighlight) wordStyle += highlightClass;
              else if (isDimmed) wordStyle += dimmedClass;
              else wordStyle += "text-white/90";

              return (
                <motion.span
                  variants={child}
                  key={`w-${globalIndex}`}
                  className={wordStyle}
                  style={{ transformStyle: "preserve-3d", display: "inline-block" }}
                >
                  {word}
                </motion.span>
              );
            })}
          </React.Fragment>
        );
      })}
    </motion.span>
  );
}
