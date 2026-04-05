"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "./ParallaxImage";
import BirdParticles from "./BirdParticles";

const HeroSection = () => {
  return (
    <section
      className={cn(
        "relative mx-auto rounded-3xl bg-black text-white font-sans flex flex-col justify-end",
        "h-full max-992:min-h-137.5 max-1025:min-h-175 max-1367:min-h-187.5 min-h-224.25",
        "max-1201:px-3.75 max-1201:pb-5 max-1201:pt-40 p-20",
        "max-1367:w-[calc(100%-30px)] w-[calc(100%-40px)]",
      )}
    >
      {/* video bg */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover rounded-3xl"
        >
          <source
            src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black/90 rounded-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center gap-7.5 1025:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-0 select-none w-fit"
        >
          <h1
            className={cn(
              "max-768:text-[80px] max-992:text-[120px] max-1025:text-[160px] max-1201:text-[180px] max-1367:text-[220px] text-[250px]",
              "font-normal font-display max-992:leading-none leading-[0.8] tracking-[-7.5px]",
            )}
          >
            Floka
          </h1>
          <h2
            className={cn(
              "max-992:text-[42px] max-1025:text-[60px] max-1201:text-[80px] text-[96px]",
              "font-display font-normal leading-none tracking-[-2.88px] text-[#FFFFFF4D]",
            )}
          >
            Studio
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full 768:w-1/2 992:w-105"
        >
          <div className="bg-white rounded-2xl p-2.5 flex flex-col gap-8 shadow-2xl">
            <div className="flex gap-5">
              <ParallaxImage
                src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg"
                alt="Head of Idea"
                containerClassName="aspect-square w-auto 992:h-35 h-30 rounded-2xl"
                className="object-cover"
                parallaxAmount={5}
              />
              <div className="flex flex-col items-start justify-start">
                <span className="text-sm tracking-widest text-black/40 uppercase">
                  Head of Idea
                </span>
                <h3 className="text-xl font-display font-bold text-black tracking-tight">
                  Almond D. Nelsi
                </h3>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 mt-5 group"
                >
                  <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white">
                    <Plus
                      size={16}
                      className="group-hover:rotate-90 transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm font-display text-black uppercase">
                    LET&apos;S TALK
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-1025:mt-5 mt-7.5">
            <span>No cookie-cutter websites. No fluff.</span>
            <p className="text-base text-white/70">
              Just real tools and smart strategies to grow your business and
              elevate your brand.
            </p>
          </div>
        </motion.div>
      </div>
      <BirdParticles friction={0.9} className="hidden 992:block"/>
    </section>
  );
};

export default HeroSection;
