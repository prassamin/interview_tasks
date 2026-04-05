"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Plus } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import AnimatedNumber from "./AnimatedNumber";

gsap.registerPlugin(ScrollTrigger);

const FunFactsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
      },
      (context) => {
        if (context.conditions?.desktop) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom-=20px center",
            pin: pinRef.current,
            scrub: 1,
          });
        }
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-background max-1025:mt-15 max-1201:mt-20 mt-30"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col 768:flex-row gap-5 1201:gap-30 relative">
          {/* left column */}
          <div className="relative w-[75%] 768:w-1/2 992:w-[40%] h-full">
            <div ref={pinRef} className="w-full py-5">
              <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden">
                <Image
                  src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-500x600.webp"
                  alt="Cinematic Urban Scene"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* right column content */}
          <div className="flex flex-col 768:w-[50%] 992:w-[60%] 768:py-5">
            {/* header */}
            <div className="max-w-xl mb-10 768:mb-16 lg:mb-24">
              <span className="inline-block text-[10px] font-display tracking-[0.3em] text-black uppercase mb-6">
                Fun Facts
              </span>
              <SectionTitle
                text="Consistently delivering impactful results through a perfect blend of design and functionality."
                className="text-[42px] max-1025:text-[42px] 1025:text-5xl font-display tracking-tight leading-[1.1]"
                once
                speed={2}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              {/* left column */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                {/* card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "bg-white rounded-xl flex items-center justify-between border border-black/5",
                    "max-1367:p-3.75 p-7.5",
                  )}
                >
                  <p className="text-black/50 text-[18px] leading-snug font-medium">
                    Successful projects completed
                  </p>
                  <div className="font-display tracking-tighter text-black leading-none flex items-start max-1025:text-[39px] text-[48px]">
                    <AnimatedNumber value={2} suffix="K" />
                    <span className="text-black/20">+</span>
                  </div>
                </motion.div>

                {/* card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={cn(
                    "bg-black p-12 rounded-xl flex flex-col relative",
                    "max-1367:p-3.75 p-7.5",
                  )}
                >
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.5 }}
                    className="relative flex justify-center items-center pt-5 pb-20 mt-10"
                  >
                    <motion.div
                      variants={{
                        initial: { rotate: 0, x: "-50%", y: "0%" },
                        animate: {
                          rotate: -15,
                          x: "-50%",
                          y: "0%",
                          transition: { delay: 0.1, duration: 0.8 },
                        },
                      }}
                      className="absolute w-30 aspect-4/5 z-1"
                    >
                      <div className="w-full h-full bg-white/10 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                          alt="Layer 1"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      variants={{
                        initial: { scale: 0.9 },
                        animate: {
                          scale: 1,
                          transition: { duration: 0.6 },
                        },
                      }}
                      className="relative w-30 aspect-4/5 z-2"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                        alt="Work Detail"
                        fill
                        className="object-cover rounded-xl shadow-2xl"
                      />
                    </motion.div>

                    <motion.div
                      variants={{
                        initial: { rotate: 0, x: "50%", y: "0%" },
                        animate: {
                          rotate: 15,
                          x: "50%",
                          y: "5%",
                          transition: { delay: 0.2, duration: 0.8 },
                        },
                      }}
                      className="absolute w-30 aspect-4/5 z-3"
                    >
                      <div className="w-full h-full bg-white/10 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                        <Image
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                          alt="Layer 2"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="mt-auto">
                    <p className="text-white/75 text-[18px] leading-[1.2]">
                      More than 2k+ projects completed—each crafted to deliver
                      real-world results for ambitious brands.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* right column */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                {/* card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "bg-white rounded-xl flex flex-col border border-black/5",
                    "max-1367:p-3.75 p-7.5",
                  )}
                >
                  <div className="flex gap-2.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={22}
                        fill="#F97316"
                        className="text-[#F97316]"
                      />
                    ))}
                  </div>
                  <div className="max-1367:text-[80px] text-[100px] font-display tracking-tighter text-black leading-none mb-8 border-b border-black/10 pb-5">
                    <AnimatedNumber value={4.9} decimals={1} />
                    /5
                  </div>

                  <p className="text-lg text-black/50 leading-relaxed font-medium mb-9">
                    We offer end-to-end creative solutions that make brands
                    unforgettable.
                  </p>

                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center w-fit gap-2 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                      <Plus
                        size={16}
                        className="group-hover:rotate-90 transition-all duration-300"
                      />
                    </div>
                    <span className="text-sm text-black font-display font-medium uppercase relative flex overflow-hidden h-4">
                      <div className="flex">
                        {"hire us now".split("").map((char, i) => (
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
                </motion.div>

                {/* card 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={cn(
                    "relative rounded-xl flex items-center justify-between overflow-hidden",
                    "max-1367:p-3.75 p-7.5",
                  )}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Worldwide base"
                    fill
                    className="object-cover z-0"
                  />
                  <div className="absolute inset-0 bg-black/50 z-0" />

                  <div className="relative z-10 flex items-center justify-between h-full">
                    <p className="text-white text-[18px] leading-snug font-medium">
                      Worldwide base around the world
                    </p>
                  </div>
                  <div className="font-display z-10 tracking-tighter text-white/90 leading-none flex items-start max-1025:text-[48px] text-[60px]">
                    <AnimatedNumber value={5} />
                    <span className="text-white/60">+</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
