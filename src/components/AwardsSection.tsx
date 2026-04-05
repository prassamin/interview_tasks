"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Awards } from "./icons/award";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";

const awards = [
  { title: "BEST DESIGNER AWARDS", platform: "AWWWARDS", year: "2025" },
  { title: "PEAKY UI DESIGNER", platform: "GOOGLE", year: "2024" },
  { title: "GREAT IN UX", platform: "APPLE", year: "2023" },
  { title: "BEST WEBSITE PICK", platform: "MICROSOFT", year: "2022" },
  { title: "NELSON UI & UX DESIGNER", platform: "SAMSUNG", year: "2021" },
];

const AwardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={containerRef}
      className="mt-15 lg:mt-20 xl:mt-30 font-sans bg-transparent"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-20 xl:gap-50">
          {/* left */}
          <div className=" sm:w-1/2 md:w-[40%] lg:w-[25%] flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="relative aspect-square rounded-4xl overflow-hidden bg-muted/20 mt-0 min-[991px]:mt-33.75 lg:mt-38.5 min-[1366px]:mt-37.5"
            >
              <Image
                src="/floka_footer_image.png"
                alt="Awards Portrait"
                fill
                className="object-cover"
              />
            </motion.div>
            <span className="text-xs tracking-widest font-display text-black uppercase">
              GET REWARDS
            </span>
          </div>

          {/* right */}
          <div className="lg:w-[70%] flex flex-col gap-6">
            <div className="relative w-30 h-30 flex items-center justify-center">
              <motion.div style={{ rotate }} className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="awardPath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="text-[6px] uppercase tracking-[0.2em] font-display fill-black/30">
                    <textPath href="#awardPath">
                      WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE/
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="opacity-60">
                <Awards />
              </div>
            </div>

            {/* heading */}
            <div className="max-w-2xl">
              <SectionTitle
                text="Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation."
                className="text-4xl lg:text-[45px] font-display tracking-tight leading-tight text-black/90"
              />
            </div>

            {/* awards */}
            <div className="flex flex-col border-t border-black/5 mt-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="grid grid-cols-[1fr_1fr_auto] py-8 border-b border-black/5 group cursor-default hover:bg-white hover:px-14 -mx-4 px-4 transition-all duration-500"
                >
                  <span className="text-xs tracking-widest font-semibold text-black/80 font-display">
                    {award.title}
                  </span>
                  <span className="text-xs tracking-widest text-black/40 font-display">
                    {award.platform}
                  </span>
                  <span className="text-xs tracking-widest text-black/30 font-display">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
