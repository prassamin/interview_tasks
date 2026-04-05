"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  parallaxAmount?: number;
  priority?: boolean;
  children?: React.ReactNode;
}

export const ParallaxImage = ({
  src,
  alt,
  fill = true,
  width,
  height,
  className,
  containerClassName,
  parallaxAmount = 10,
  priority = false,
  children,
}: ParallaxImageProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / parallaxAmount;
    const y = (e.clientY - centerY) / parallaxAmount;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0 w-[110%] -left-[5%] h-[110%] -top-[5%]"
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
      </motion.div>
      {children}
    </div>
  );
};
