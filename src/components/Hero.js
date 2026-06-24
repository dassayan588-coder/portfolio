"use client";

import { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import { motion } from "framer-motion";

const texts = [
  "M.Sc. Zoology Student",
  "Machine Learning Enthusiast",
  "Cell Biology & Molecular Biology",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, typingSpeed]);

  return (
    <motion.div 
      className={styles.section}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.title}>
        Hi, I'm <span className="highlight">Sayan Das</span>.
      </h1>
      <h2 className={styles.subtitle}>
        <span style={{ fontFamily: "var(--font-mono)", color: "white" }}>{"> "}</span>
        {currentText}
        <span style={{ display: "inline-block", width: "8px", height: "1.2em", background: "var(--color-accent)", verticalAlign: "middle", marginLeft: "4px", animation: "blink 1s step-end infinite" }} />
      </h2>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}
