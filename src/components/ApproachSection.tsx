"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";

const ApproachSection = () => {
  const countRef = React.useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  const countValue = useMotionValue(0);
  const roundedValue = useTransform(countValue, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (isInView) {
      animate(countValue, 25, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, countValue]);

  return (
    <section className="max-1025:mt-15 max-1201:mt-20 mt-30 overflow-hidden">
      <div className="container mx-auto px-5">
        {/* header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-10 lg:mb-30">
          <div className="flex flex-col lg:w-3/5">
            <div className="relative w-30 h-30">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-foreground/30 uppercase font-medium tracking-[0.4em] text-[6px]"
                >
                  <path
                    id="textCircle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text>
                    <textPath fill="currentColor" href="#textCircle">
                      WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE/
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <Image
                src="/footer-logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="h-11 max-w-full brightness-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="max-w-60 text-sm text-black/60 leading-relaxed font-medium">
              We design every project with long-term success in mind.
            </div>
          </div>

          <SectionTitle
            text="Our approach is straightforward— prioritizing functionality, speed, and clarity for solutions."
            className="text-[42px] max-1025:text-[42px] 1025:text-5xl font-display tracking-tight leading-[1.1] lg:text-end"
            speed={2}
            once
          />
        </div>

        {/* Flex Layout Container */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-2.5 items-stretch pt-20 lg:pt-0">
          {/* left card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            ref={countRef}
            className={cn(
              "w-full md:w-[calc(50%-5px)] lg:w-[23%] bg-white rounded-3xl p-5 flex flex-col justify-between order-1",
              "max-1367:p-3.75 pt-2.5 pb-7.5 pl-7.5 pr-7",
            )}
          >
            <div>
              <div className="border-b border-black/10 pb-7.5">
                <div className="flex items-start">
                  <span className="text-[120px] font-display leading-none tracking-[-3.6px] text-black flex items-start">
                    <motion.span>{roundedValue}</motion.span>
                    <span className="text-black/10 -mt-4">+</span>
                  </span>
                </div>
                <p className="text-black/40 font-medium mt-3">
                  Years of experience
                </p>
              </div>

              <p className="mt-8 text-black/50 leading-relaxed font-medium text-lg">
                Explore how we transform ideas into extraordinary digital
                experiences.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-gray-100 relative"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-black font-semibold">
                1200+ happy users review
              </p>
            </div>
          </motion.div>

          {/* center card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full md:w-full lg:flex-1 h-125 bg-[#0e0e0e] rounded-[20px] relative flex flex-col justify-end p-10 min-h-150 lg:min-h-0 order-3 lg:order-2 max-lg:mt-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="absolute bottom-0 left-0 w-full h-[105%] z-0 pointer-events-none"
            >
              <Image
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
                alt="Brand Ambassador"
                fill
                className="object-contain object-bottom-left"
                priority
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e] via-transparent to-transparent rounded-[20px] pointer-events-none z-1" />

            <div className="relative z-10 px-4 md:px-0">
              <p className="text-2xl text-white font-display leading-relaxed mb-8 italic">
                &quot;At Floka, we merge strategy, creativity, and technology to
                shape brands that people love.&quot;
              </p>
              <span className="text-white text-xs font-medium flex gap-5 items-center">
                Merizo H. Yelso
                <span className="text-white/40 font-bold">/CEO</span>
              </span>
            </div>

            <div className="absolute top-10 right-10 z-10 flex flex-col gap-8 items-end">
              {Array.from({ length: 2 }).map((_, i) => (
                <Image
                  src={`https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon${i + 1}.svg`}
                  key={i}
                  alt={`Award ${i + 1}`}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </motion.div>

          {/* right cards */}
          <div className="w-full md:w-[calc(50%-5px)] lg:w-[23%] flex flex-col gap-2.5 order-2 lg:order-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={cn(
                "bg-white rounded-[20px] flex flex-col justify-between gap-8 flex-1",
                "max-1367:p-3.75 p-6 pt-5.5",
              )}
            >
              <div className="flex flex-col">
                <span className="text-black/40 text-sm leading-none">
                  Follow us
                </span>
                <h3 className="text-[20px] text-black font-display tracking-[-0.6px] mt-1">
                  For check updates
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Dribbble", "Behance", "Linkedin", "X", "Xing"].map(
                  (social) => (
                    <span
                      key={social}
                      className="px-4 py-1 font-medium rounded-full border border-[#e5e5e5] text-xs text-black uppercase tracking-widest hover:border-black cursor-pointer transition-all duration-300"
                    >
                      {social}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={cn(
                "bg-white rounded-[20px] flex flex-col justify-between gap-6 flex-1",
                "max-1367:p-3.75 p-6 pt-5.5",
              )}
            >
              <h3 className="text-black/40 text-sm leading-none">
                Impressions
              </h3>

              <div className="flex flex-col -gap-2 pt-5">
                {[
                  {
                    label: "Solutions",
                    val: 100,
                    class: "bg-[#f1f1f1] text-[#222]",
                  },
                  { label: "UI/UX", val: 90, class: "bg-black text-white" },
                  {
                    label: "Explore",
                    val: 72,
                    class: "bg-white text-black border border-[#e5e5e5]",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20, width: 0 }}
                    whileInView={{ opacity: 1, x: 0, width: `${item.val}%` }}
                    viewport={{ once: true }}
                    transition={{
                      opacity: { delay: 0.4 + i * 0.1, duration: 0.8 },
                      x: { delay: 0.4 + i * 0.1, duration: 0.8 },
                      width: {
                        delay: 0.6 + i * 0.1,
                        duration: 1.5,
                        ease: "easeOut",
                      },
                    }}
                    className={cn(
                      "h-10 rounded-lg flex justify-between items-center px-3 font-bold relative whitespace-nowrap overflow-hidden",
                      item.class,
                      i > 0 && "-mt-1",
                      i === 1 && "z-10",
                      i === 2 && "z-10",
                    )}
                  >
                    <span className="text-sm">{item.label}</span>
                    <span className="text-sm opacity-60 font-medium">
                      {item.val}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pt-20 overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_80%,black_80%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-10 text-[130px] font-display text-black transform-gpu"
        >
          {[...Array(2)].map((_, j) =>
            Array.from({ length: 10 }).map((_, i) => (
              <span key={`${j}-${i}`} className="shrink-0">
                See how our team combines creativity, technology, and strategy
              </span>
            )),
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
