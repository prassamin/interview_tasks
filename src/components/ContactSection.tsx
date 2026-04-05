"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Plus, ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <section className="px-5 max-1025:mt-15 max-1201:mt-20 mt-30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl px-6 py-16 1025:p-20 1201:p-24 bg-[#0A0A0A]"
      >
        <div
          className="absolute inset-0 opacity-50 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-pattern.jpg')" }}
        />
        <div className="relative z-10 flex flex-col 1025:flex-row gap-16 1201:gap-24 container mx-auto items-center">
          {/* left */}
          <div className="1025:w-[50%] flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase font-display">
                GET IN TOUCH
              </span>
              <SectionTitle
                text="Tell us about your project — whether it's a website, SEO, or marketing."
                className="text-[40px] md:text-[50px] lg:text-5xl font-display tracking-tight leading-[1.1] text-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-6 text-white">
              <div className="flex flex-col gap-4 group">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center text-white/50">
                    <MessageCircle size={18} />
                  </div>
                  <span className="text-[11px] tracking-[0.2em] uppercase font-display">
                    TALK TO US
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-white/50 font-display">
                  Work and general inquiries +123 456 789 00
                </div>
              </div>

              {/* address */}
              <div className="flex flex-col gap-4 group">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center text-white/50">
                    <MapPin size={18} />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-display">
                    POST ADDRESS
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-white/50 font-display">
                  541 Melville Ave, Palo Alto, CA 94301, United States
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="lg:w-[50%] w-full">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col gap-8 shadow-3xl shadow-black/30 border border-black/5"
            >
              <h3 className="text-3xl font-display tracking-tight text-black">
                Have a project in mind?
              </h3>

              <motion.form
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-7"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="bg-background border border-transparent rounded-lg p-5 text-xs tracking-widest font-display text-black focus:placeholder:text-black transition-all duration-300 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="BUSINESS EMAIL"
                    className="bg-background border border-transparent rounded-lg p-5 text-xs tracking-widest font-display text-black focus:placeholder:text-black transition-all duration-300 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group flex flex-col gap-3">
                    <span className="text-[11px] font-medium text-black font-display uppercase tracking-[0.2em] px-1">
                      BUDGET
                    </span>
                    <div className="relative">
                      <select className="appearance-none w-full bg-background border border-transparent rounded-lg p-5 text-xs tracking-widest font-display text-black focus:placeholder:text-black transition-all duration-300 outline-none cursor-pointer">
                        <option>$1000 - $5000</option>
                        <option>$5000 - $10000</option>
                        <option>$10000+</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-7 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none group-hover:text-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="group flex flex-col gap-3">
                    <span className="text-[11px] font-medium text-black font-display uppercase tracking-[0.2em] px-1">
                      SERVICE
                    </span>
                    <div className="relative">
                      <select className="appearance-none w-full bg-background border border-transparent rounded-lg p-5 text-xs tracking-widest font-display text-black focus:placeholder:text-black transition-all duration-300 outline-none cursor-pointer">
                        <option>CONSULTANCY</option>
                        <option>UI/UX DESIGN</option>
                        <option>DEVELOPMENT</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-7 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none group-hover:text-black transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="MESSAGE"
                  rows={4}
                  className="bg-background border border-transparent rounded-lg p-5 text-xs tracking-widest font-display placeholder:text-black/30 focus:placeholder:text-black transition-all duration-300 outline-none resize-none"
                />

                <button className="flex items-center gap-4 group w-fit font-display mt-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                    <Plus size={18} />
                  </div>
                  <span className="text-sm font-medium tracking-[0.2em] uppercase text-black transition-all duration-500">
                    LET&apos;S TALK
                  </span>
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
