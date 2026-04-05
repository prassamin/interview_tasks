"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "./ParallaxImage";
import { ArrowUp, Plus } from "lucide-react";

const projects = [
  {
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp",
    title: "Aldan Branding",
    category: ["Branding", "UX"],
    year: 2025,
    url: "https://floka.casethemes.net/portfolio/no-code-website/",
    companyLogo:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon7.svg",
  },
  {
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg",
    title: "Aldan Branding",
    category: ["Branding", "Module", "Product", "UX", "Website"],
    year: 2025,
    url: "https://floka.casethemes.net/portfolio/web3-crypto/",
    companyLogo:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon6.svg",
  },
  {
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp",
    title: "Aldan Branding",
    category: ["Branding", "UX"],
    year: 2025,
    url: "https://floka.casethemes.net/portfolio/low-code-development/",
    companyLogo:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon5.svg",
  },
  {
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp",
    title: "Aldan Branding",
    category: ["Branding", "Product", "UX"],
    year: 2025,
    url: "https://floka.casethemes.net/portfolio/no-code-website/",
    companyLogo:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon4.svg",
  },
  {
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp",
    title: "Aldan Branding",
    category: ["Branding", "Module", "Product", "UX"],
    year: 2025,
    url: "https://floka.casethemes.net/portfolio/no-code-website/",
    companyLogo:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon3.svg",
  },
];

const PortfolioSection = () => {
  return (
    <section className="max-1025:mt-15 max-1201:mt-20 mt-30 font-sans overflow-hidden">
      <div className="container mx-auto px-5 flex flex-col">
        <div className="flex flex-col mb-20">
          <span className="text-xs uppercase tracking-widest mb-10 font-display font-medium border-b border-black/5 py-3.5 w-full">
            Portfolio
          </span>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 w-full">
            <div className="w-[35%]" />
            <SectionTitle
              text="Strategy to build powerful digital solutions."
              className="text-[42px] max-1025:text-[42px] 1025:text-5xl font-display tracking-tight leading-[1.1]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3">
          {projects.map((project, index) => {
            const isLarge = (index + 1) % 3 === 0;

            return (
              <motion.div
                key={index}
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                className={cn(
                  "flex flex-col group cursor-pointer",
                  isLarge ? "sm:col-span-2" : "sm:col-span-1",
                  "max-1201:mb-5 max-[1400px]:mb-7.5 mb-12.5",
                )}
              >
                {/* header */}
                <ParallaxImage
                  src={project.image}
                  alt={project.title}
                  fill
                  parallaxAmount={10}
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  containerClassName={cn(
                    "rounded-[20px] bg-gray-100 transition-all duration-500 group/item aspect-video",
                    isLarge && "h-80 md:h-120",
                  )}
                >
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                    <div className="flex items-center gap-2 text-white">
                      <Image
                        src={project.companyLogo}
                        alt="Logo"
                        width={28}
                        height={28}
                        className="brightness-0 invert w-30"
                      />
                    </div>
                  </div>

                  <button className="bg-white absolute top-2 right-2 group-hover/item:opacity-100 group-hover/item:top-6 group-hover/item:right-6 md:group-hover/item:top-8 md:group-hover/item:right-8 transition-all duration-500 opacity-0 rounded-full p-3.5 text-black hover:bg-black hover:text-white">
                    <ArrowUp
                      className="rotate-45 transition-transform duration-500"
                      size={22}
                    />
                  </button>

                  <span className="text-white text-sm absolute left-2 bottom-2 opacity-0 group-hover/item:opacity-100 group-hover/item:bottom-6 group-hover/item:left-6 transition-all duration-500">
                    {project.category.join(", ")}
                  </span>
                </ParallaxImage>

                {/* footer */}
                <div className="flex justify-between items-center mt-3 bg-white px-4 py-5 rounded-xl">
                  <h3 className="text-sm md:text-sm uppercase">
                    {project.title}
                  </h3>
                  <span className="text-sm md:text-sm font-medium text-[#c0c0c0]">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
            <Plus
              size={16}
              className="group-hover:rotate-90 transition-all duration-300"
            />
          </div>
          <span className="text-sm font-display text-black uppercase">
            MORE WORKS
          </span>
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
