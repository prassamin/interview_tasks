"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Facebook } from "./icons/facebook";
import { LinkedIn } from "./icons/linkedin";
import { X } from "./icons/x";
import { ParallaxImage } from "./ParallaxImage";

const teamMembers = [
  {
    name: "Nicolas K. Ellington",
    role: "FOUNDER",
    image: "/images/team/member-1.png",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Carlos E. Ashcroft",
    role: "CEO",
    image: "/images/team/member-2.png",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Leonardo F. Ashton",
    role: "UX DESIGNER",
    image: "/images/team/member-3.png",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Ricardo P. Winslow",
    role: "UI DESIGNER",
    image: "/images/team/member-4.png",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

const TeamCard = ({
  member,
  index,
  isMobile,
}: {
  member: (typeof teamMembers)[0];
  index: number;
  isMobile: boolean;
}) => {
  const delay = isMobile ? index * 0.1 : Math.floor(index / 2) * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background rounded-3xl p-2.5 flex flex-col gap-6 group"
    >
      <ParallaxImage
        src={member.image}
        alt={member.name}
        containerClassName="aspect-square rounded-2xl bg-[#D2B691]"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        parallaxAmount={10}
      />

      <div className="flex flex-col gap-1 px-5 font-display">
        <h3 className="text-xl font-display tracking-tight text-black">
          {member.name}
        </h3>
        <p className="text-sm tracking-widest text-black/50">{member.role}</p>
      </div>

      <div className="flex gap-2 items-center px-5 pb-4">
        {Object.entries(member.socials).map(([key, value]) => (
          <a
            key={key}
            href={value}
            className="text-black hover:text-white bg-white hover:bg-black rounded-lg p-2 transition-all duration-500"
          >
            {key === "facebook" && <Facebook size={20} fill="currentColor" />}
            {key === "twitter" && <X size={20} fill="currentColor" />}
            {key === "linkedin" && <LinkedIn size={20} fill="currentColor" />}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("DESIGN TEAM");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className="max-1025:mt-15 max-1201:mt-20 mt-30 font-sans">
      <div className="container mx-auto px-5 2xl:px-0">
        <div className="flex flex-col 1025:flex-row gap-10 xl:gap-24 bg-white p-5 rounded-3xl">
          {/* left */}
          <div className="1025:w-1/2 flex flex-col gap-12 1025:pt-23.75 1025:pl-20">
            <div className="flex flex-col gap-4 pt-1">
              <span className="text-sm uppercase font-display">
                OUR AVENGERS
              </span>
              <SectionTitle
                text="Meet with our team member"
                className="text-[42px] lg:text-5xl font-display tracking-tight leading-[1.2]"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-8 pb-4">
                {["DESIGN TEAM", "DEVELOPMENT TEAM"].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm tracking-[0.01em] font-display transition-colors relative font-medium ${
                        isActive
                          ? "text-black"
                          : "text-black/30 hover:text-black/60"
                      }`}
                    >
                      {tab}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ scaleX: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{ originX: 0.5 }}
                            className="absolute bottom-0 left-0 right-0 h-px bg-black"
                          />
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>

              <p className="lg:text-lg text-black/60 leading-relaxed">
                What began over coffee-fueled brainstorming sessions has grown
                into a thriving digital agency dedicated to helping brands stand
                out.
              </p>

              <button className="flex items-center gap-4 group w-fit font-display mt-3 md:mt-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                  <Plus size={24} />
                </div>
                <span className="text-sm uppercase font-medium">
                  JOIN WITH US
                </span>
              </button>

              <div
                ref={imgRef}
                className="relative aspect-video rounded-3xl overflow-hidden bg-muted/20 mt-5 md:mt-10"
              >
                <motion.div
                  style={{ x }}
                  className="absolute inset-0 w-[120%] -left-[10%] h-full"
                >
                  <Image
                    src="/floka_footer_image.png"
                    alt="Team Group"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="lg:w-1/2 grid grid-cols-1 min-[576px]:grid-cols-2 gap-5 md:pt-7">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                index={index}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
