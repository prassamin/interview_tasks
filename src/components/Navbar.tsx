"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { MenuButton } from "./MenuButton";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full z-50 px-14 py-5.5 max-1201:px-3.75 max-1201:py-4.25 flex items-center justify-between pointer-events-auto"
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
            className="hover:text-white transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/pages"
            className="hover:text-white transition-colors relative group"
          >
            Pages
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-white transition-colors relative group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/blog"
            className="hover:text-white transition-colors relative group"
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
