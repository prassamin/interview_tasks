"use client";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const NavigateToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5.5 right-5.5 z-1000 flex items-center justify-center p-1"
        >
          <svg
            className="absolute -rotate-90 w-12.5 h-12.5"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#01252e"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: smoothProgress }}
            />
          </svg>
          <button
            onClick={scrollToTop}
            className="bg-[#01062e] text-white p-2.5 rounded-full hover:bg-[#01062e]/90 active:scale-95 transition-all shadow-lg cursor-pointer relative z-10"
          >
            <ArrowUp size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigateToTop;
