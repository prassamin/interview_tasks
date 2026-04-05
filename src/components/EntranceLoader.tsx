"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A cinematic entrance loader representing the studio's "first strike" on a new project.
 * Features a sharp white line that divides the screen before splitting open to reveal content.
 */
export function EntranceLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 4500);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="pointer-drawn-entrance-loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }}
          className="fixed inset-0 z-9999 bg-transparent overflow-hidden pointer-events-none"
        >
          {/* top */}
          <motion.div
            initial={{ height: "50vh" }}
            animate={{ height: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.8, // Exactly when the point reaches the right
              ease: [0.77, 0, 0.175, 1],
            }}
            className="absolute top-0 left-0 w-full bg-black z-20 border-b border-white/10"
          />

          {/* bottom */}
          <motion.div
            initial={{ height: "50vh" }}
            animate={{ height: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.8,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="absolute bottom-0 left-0 w-full bg-black z-20 border-t border-white/10"
          />

          {/* pointer */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="relative w-full h-px">
              {/* drawn line */}
              <motion.div
                initial={{ width: 0, opacity: 1 }}
                animate={{
                  width: "100%",
                  opacity: [1, 1, 0],
                }}
                transition={{
                  width: {
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3,
                  },
                  opacity: { duration: 0.2, delay: 1.8 },
                }}
                className="h-full bg-white origin-left"
              />
              {/* pointer */}
              <motion.div
                initial={{ left: 0, opacity: 1 }}
                animate={{
                  left: "100%",
                  opacity: [1, 1, 0],
                }}
                transition={{
                  left: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
                  opacity: { duration: 0.2, delay: 1.8 },
                }}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] z-40"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
