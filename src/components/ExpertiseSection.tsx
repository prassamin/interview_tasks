"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const expertiseItems = [
  {
    id: 0,
    title: "User Interface & Experience Design",
    description:
      "Creating intuitive, visually stunning interfaces that prioritize user flow and brand identity.",
    tags: ["UX", "UI", "PROTOTYPING"],
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-accordion-img1-300x250.webp",
  },
  {
    id: 1,
    title: "Web Development",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions built with performance and scalability in mind.",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-300x250.webp",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    description:
      "Strategizing for visibility and growth through data-driven SEO practices and content optimization.",
    tags: ["STRATEGY", "GROWTH", "CONTENT"],
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-300x250.webp",
  },
  {
    id: 3,
    title: "Low-Code Development",
    description:
      "Rapidly deploying powerful applications using the latest low-code platforms without compromising on quality.",
    tags: ["SPEED", "EFFICIENCY", "PLATFORM"],
    image:
      "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-300x250.webp",
  },
];

const ExpertiseSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section
      className={cn(
        "max-1025:mt-15 max-1201:mt-20 mt-30 mx-5",
        "bg-black text-white rounded-2xl",
        "px-3.75 max-1367:pt-20 pt-30",
      )}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="flex flex-col items-center text-4xl max-992:text-[65px] max-1201:text-[100px] text-[120px] tracking-[-3.6px] leading-none font-display"
          >
            Company
            <span className="text-white/40">expertise</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10 mt-10">
          {expertiseItems.map((item) => {
            const isOpen = activeIndex === item.id;

            return (
              <div key={item.id} className="border-b border-white/10 group">
                <div
                  className="flex items-center justify-between py-6.25 cursor-pointer"
                  onClick={() => setActiveIndex(isOpen ? null : item.id)}
                >
                  <div className="flex items-center max-768:gap-7.5 gap-37.5">
                    <motion.div
                      animate={{ rotate: isOpen ? 360 : 0 }}
                      transition={{
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-full text-white relative"
                    >
                      <motion.div
                        className="absolute w-3 h-0.5 bg-white"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{
                          stiffness: 300,
                          damping: 15,
                        }}
                      />
                      <motion.div
                        className="absolute w-0.5 h-3 bg-white"
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          opacity: isOpen ? 0 : 1,
                          scale: isOpen ? 0 : 1,
                        }}
                        transition={{
                          stiffness: 300,
                          damping: 15,
                        }}
                      />
                    </motion.div>
                    <h3 className="text-[20px] font-display tracking-tight transition-colors duration-500 group-hover:text-white/80">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-between">
                        <div className="flex flex-col gap-10 max-w-xl max-768:ml-16.5 ml-45.5">
                          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-1.5 rounded-full bg-white/5 text-xs tracking-widest text-white uppercase"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="w-full flex justify-end">
                          <div className="relative aspect-square md:aspect-11/9 w-3/4 md:w-full md:max-w-75 lg:max-w-105 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-all duration-1000"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <motion.div
          initial="initial"
          whileHover="hover"
          className="flex items-center w-fit gap-2 group max-768:ml-16.5 ml-45.5 mt-8.75 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
            <Plus
              size={16}
              className="group-hover:rotate-90 transition-all duration-300"
            />
          </div>
          <span className="text-sm text-white font-display font-medium uppercase relative flex overflow-hidden h-4">
            <div className="flex">
              {"hire us today".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { y: 0 },
                    hover: {
                      y: "110%",
                      transition: {
                        delay: i * 0.02,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="flex absolute inset-0">
              {"hire us today".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "-110%" }}
                  variants={{
                    initial: { y: "-110%" },
                    hover: {
                      y: 0,
                      transition: {
                        delay: i * 0.02,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </span>
        </motion.div>

        {/* testimonial */}
        <div className="mt-30 pb-30 overflow-hidden whitespace-nowrap mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-20 items-center transform-gpu"
          >
            {[...Array(2)].map((_, j) => (
              <React.Fragment key={j}>
                {[
                  {
                    text: "Super speedy website designer",
                    avatar: "https://i.pravatar.cc/150?u=1",
                  },
                  {
                    text: "Great in UI/UX",
                    avatar: "https://i.pravatar.cc/150?u=2",
                  },
                  {
                    text: "Best design communicator",
                    avatar: "https://i.pravatar.cc/150?u=3",
                  },
                  {
                    text: "10/10 well recommended",
                    avatar: "https://i.pravatar.cc/150?u=4",
                  },
                ].map((testimonial, i) => (
                  <div
                    key={`${j}-${i}`}
                    className="flex items-center gap-4 shrink-0"
                  >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={testimonial.avatar}
                        alt="Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-lg md:text-xl text-white/70 font-display">
                      &ldquo; {testimonial.text} &rdquo;
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
