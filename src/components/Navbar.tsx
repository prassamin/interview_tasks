"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { MenuButton } from "./MenuButton";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <div className="h-18 max-1201:h-20.25" aria-hidden="true" />

      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 px-14 py-5.5 max-1201:px-3.75 max-1201:py-4.25 flex items-center justify-between transition-colors duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="h-6 max-1201:h-11.75 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center justify-evenly w-full gap-10 text-base font-medium text-black">
          <Link
            href="/"
            className="transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/pages"
            className="transition-colors relative group"
          >
            Pages
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/portfolio"
            className="transition-colors relative group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/blog"
            className="transition-colors relative group"
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="mailto:info@floka.com"
            className="hidden md:block text-lg text-black"
          >
            info@floka.com
          </Link>
          <div className="w-px h-6 bg-black/10" />
          <MenuButton
            duration={400}
            size={22}
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </motion.header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
