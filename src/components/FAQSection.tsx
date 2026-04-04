"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    question: "What is artificial intelligence (AI)?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/images/faq/faq-1.webp",
  },
  {
    question: "How does AI improve business efficiency?",
    answer:
      "Efficiency is at the core of our AI solutions. We streamline workflows and automate repetitive tasks to free up your team for high-value creative work.",
    image: "/images/faq/faq-1.webp",
  },
  {
    question: "How long does AI implementation take?",
    answer:
      "Project timelines vary based on complexity, but we typically deliver initial prototypes within 4-6 weeks for most specialized AI integrations.",
    image: "/images/faq/faq-2.webp",
  },
  {
    question: "What industries can benefit from AI?",
    answer:
      "From fintech to fashion, our AI applications are designed to be agnostic yet specialized, providing unique value across diverse global industries.",
    image: "/images/faq/faq-2.webp",
  },
  {
    question: "What are the costs of AI solutions?",
    answer:
      "We offer tailored pricing based on your specific needs, ensuring that you invest only in the technology that drives real ROI for your brand.",
    image: "/images/faq/faq-1.webp",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const rulerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rulerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section className="mt-15 lg:mt-20 xl:mt-30 font-sans overflow-hidden">
      <div className="container mx-auto px-5 flex flex-col">
        <span className="text-xs uppercase tracking-widest text-foreground/60 mb-10 font-medium border-b border-muted/10 py-3.5 w-full">
          FAQ & GET ANSWER
        </span>
        <div className="flex flex-col lg:flex-row  lg:items-end gap-16 xl:gap-44">
          <SectionTitle
            text="Have more questions?\nWe’ve answers."
            className="text-[42px] lg:text-5xl font-display tracking-tight leading-[1.1] lg:hidden"
            once
          />
          <div className="lg:w-[30%] flex flex-col pt-4">
            <div className="flex flex-col gap-8 max-w-sm">
              <p className="text-foreground/60 leading-relaxed">
                Don&apos;t found anything yet. Feel free to ask anything.{" "}
                <a
                  href="/contact"
                  className="text-foreground font-medium underline underline-offset-4 hover:text-foreground/80 transition-colors"
                >
                  Let&apos;s Talk
                </a>
              </p>

              <div className="relative aspect-square rounded-4xl overflow-hidden">
                <Image
                  src="/images/faq/thumbnail.png"
                  alt="Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-[70%] flex flex-col gap-20">
            <SectionTitle
              text="Have more questions?\nWe’ve answers."
              className="text-[42px] lg:text-5xl font-display tracking-tight leading-[1.1] lg:block hidden"
              once
            />
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-[14px] transition-colors duration-500 bg-white`}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left group"
                    >
                      <span
                        className={`text-xl font-display tracking-tight transition-colors duration-300 ${
                          isOpen ? "text-black" : "text-black/80"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 360 : 0 }}
                        transition={{
                          stiffness: 300,
                          damping: 15,
                        }}
                        className="w-7 h-7 rounded-full flex items-center justify-center bg-black text-white relative"
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
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="p-8 pt-0 flex flex-col md:flex-row gap-8">
                            <div className="relative w-full md:w-60 aspect-14/9 rounded-2xl overflow-hidden shrink-0">
                              <Image
                                src={faq.image}
                                alt="Context"
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="flex flex-col gap-6 justify-between">
                              <p className="text-black/60 leading-relaxed">
                                {faq.answer}
                              </p>

                              <button className="flex items-center gap-3 group/btn w-fit">
                                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover/btn:rotate-90 transition-transform duration-500">
                                  <Plus size={18} />
                                </div>
                                <span className="text-xs uppercase font-bold tracking-widest text-black">
                                  GET IN TOUCH
                                </span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        ref={rulerRef}
        className="container mx-auto px-5 pt-20 lg:pt-30 overflow-hidden"
      >
        <div className="flex items-center gap-10 lg:gap-20">
          <motion.div
            style={{ x }}
            className="flex flex-[1_0_auto] justify-between items-center min-w-[200%] gap-4"
          >
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 bg-muted/50 w-px shrink-0 ${i % 5 === 0 ? "h-4 opacity-100" : "h-2 opacity-20"}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
