"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { MenuButton } from "./MenuButton";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const overlayVariants: Variants = {
    initial: {
      clipPath: "circle(0% at 50% 50%)",
    },
    animate: {
      clipPath: "circle(150% at 50% 50%)",
      transition: {
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      clipPath: "circle(0% at 50% 50%)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-100 bg-black text-white p-10 lg:p-20 flex flex-col justify-between overflow-hidden"
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-6 max-1201:top-6.75 max-1201:right-3.75 right-14 flex items-center gap-2 group"
          >
            <span className="text-lg text-white/70 group-hover:text-white transition-colors duration-300">
              Close
            </span>
            <MenuButton
              className="[&_span]:bg-white"
              duration={400}
              size={22}
            />
          </button>

          <div className="flex flex-col container mx-auto lg:flex-row gap-30 grow pt-10">
            {/* left */}
            <div className="flex flex-col gap-20 lg:w-[60%]">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-3xl lg:text-5xl font-display leading-[1.1]"
              >
                Our approach is straightforward— prioritizing functionality,
                speed, and clarity for solutions.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="relative aspect-13/9 h-full w-full lg:w-fit rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img15.jpg"
                  alt="Creative team"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-4 lg:gap-6 lg:pr-20 lg:justify-center">
              {["Home", "Pages", "Portfolio", "Blog"].map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                >
                  <Link
                    href={"#"}
                    onClick={onClose}
                    className="group flex items-center gap-4 text-3xl font-display font-medium text-white/40 hover:text-white transition-all transform hover:translate-x-2"
                  >
                    <span>{link}</span>
                    <span className="text-2xl lg:text-3xl text-white/20 group-hover:text-white/40 ml-2">
                      +
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-end p-4">
            <Image
              src="/footer-logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="absolute bottom-10 right-10  lg:bottom-20 lg:right-20 h-25 max-w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
