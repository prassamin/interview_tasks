"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

const HappyUsersSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const logos = [
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon8.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon9.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon10.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon11.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon12.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon13.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon14.svg",
  ];

  return (
    <section className="mt-15 lg:mt-20 xl:mt-30 font-sans">
      <div className="container mx-auto px-5 flex flex-col">
        <div className="text-xs uppercase tracking-widest text-foreground mb-4 font-display font-medium py-6 w-full flex justify-between items-end">
          <span>HAPPY USERS</span>
          <span className="text-foreground/50">
            ©2025 <span className="text-foreground">CASE-THEMES™</span> STUDIO
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#f0f0f0] rounded-[40px] overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white aspect-5/3 flex items-center justify-center p-8 group"
              >
                <div className="relative w-full h-full max-w-40 transition-opacity duration-500">
                  <Image
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}

            <div className="bg-white aspect-5/3 flex flex-col justify-center gap-4 items-center text-center group">
              <span className="text-[10px] font-bold tracking-[0.2em] text-black/30 uppercase font-display">
                NEXT CAN BE YOU.
              </span>
              <Link
                href="/contact"
                className="text-sm lg:text-base font-bold tracking-widest text-black uppercase font-display hover:tracking-[0.2em] transition-all duration-500"
              >
                LET&apos;S TALK
              </Link>
            </div>
          </div>
        </motion.div>

        <div
          ref={imgRef}
          className="aspect-video w-full group relative mt-3 rounded-[40px] overflow-hidden bg-black"
        >
          <motion.div
            style={{ y: parallaxY }}
            className="absolute inset-0 scale-110"
          >
            <Image
              src={
                "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp"
              }
              fill
              alt="footer image"
              className="object-cover group-hover:scale-110 group-hover:blur-xs transition-all duration-500"
            />
          </motion.div>

          <motion.button className="absolute bottom-5 left-5 md:bottom-10 md:left-10 flex items-center gap-4 bg-white pl-2 pr-6 py-2 rounded-full text-black group/btn transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:left-1/2 group-hover:bottom-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white group-hover/btn:scale-90 transition-all duration-500">
              <Play size={20} fill="currentColor" />
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-display">
              PLAY REEL
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HappyUsersSection;
