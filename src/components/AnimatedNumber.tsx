"use client";

import React, { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  motion,
} from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  once?: boolean;
}

const AnimatedNumber = ({
  value,
  duration = 2,
  delay = 0,
  className,
  suffix = "",
  prefix = "",
  decimals = 0,
  once = true,
}: AnimatedNumberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(springValue, (latest) => {
    return prefix + latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        animate(motionValue, value, {
          duration: duration,
          ease: "easeOut",
        });
      }, delay * 1000);
      return () => clearTimeout(timer);
    } else if (!once) {
      // reset if not once
      motionValue.set(0);
    }
  }, [isInView, value, motionValue, delay, duration, once]);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
};

export default AnimatedNumber;
