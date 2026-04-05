"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Floka } from "./icons/floka";
import { Facebook } from "./icons/facebook";
import { LinkedIn } from "./icons/linkedin";
import { X } from "./icons/x";
import { LongArrow } from "./icons/long-arrow";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const spinningTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spinningTextRef.current) {
      gsap.to(spinningTextRef.current, {
        scrollTrigger: {
          trigger: spinningTextRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        rotation: 360,
        ease: "none",
      });
    }
  }, []);

  const menuItems = ["About Us", "Journal", "Faq", "Get In Touch", "Careers"];

  const socialIcons = [
    { icon: <Facebook size={20} />, label: "Facebook" },
    { icon: <X size={20} />, label: "X" },
    { icon: <LinkedIn size={20} />, label: "LinkedIn" },
  ];

  return (
    <footer className="mt-15 lg:mt-20 xl:mt-30 px-3.75 xl:px-5 flex flex-col overflow-hidden">
      <div className="bg-[#0A0A0A] rounded-[20px] text-white pb-5 pt-20 px-5 font-sans">
        {/* Top Hero Section */}
        <div className="flex flex-col items-center justify-center mb-32 relative">
          <h2 className="text-[150px] xl:text-[250px] tracking-tighter text-center font-display bg-clip-text bg-linear-to-b from-[#FFFFFFBD] via-[#ffffff3b] to-transparent text-transparent leading-[0.85]">
            Let&apos;s <br />
            <span>talk now</span>
          </h2>

          {/* Spinning Circle */}
          <div className="-mt-12 group cursor-pointer">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <div
                ref={spinningTextRef}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/circle-footer.svg"
                  alt="footer-spinning-text"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <LongArrow size={60} />
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex gap-12.5 xl:gap-35 items-start mt-29.5">
          {/* section 1 */}
          <div className="relative group overflow-hidden md:col-span-2 sm:w-161.25 flex flex-col gap-5 flex-1.5">
            <div className="w-full h-full relative">
              <Image
                width={1000}
                height={1000}
                src="/floka_footer_image.png"
                alt="Floka Team"
                className="w-full h-full object-cover grayscale max-h-125 brightness-75 rounded-2xl"
              />
              <Image
                src="/footer-logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-25 xl:h-47.5 max-w-full"
              />
            </div>
            <Floka />
          </div>

          {/* section 2 */}
          <div className="flex flex-col gap-6 lg:pl-12 -mt-36 md:mt-0 flex-1">
            <nav className="flex flex-col items-start gap-9 xl:gap-11.5">
              {menuItems.map((item) => (
                <FooterLink
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[28px] 2xl:text-[38px] hover:text-white/60 transition-colors duration-300 tracking-tight font-display leading-[1.05]"
                >
                  {item}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* section 3 */}
          <div className="flex flex-col gap-11.25 max-w-full xl:max-w-none flex-2 relative">
            <Image
              src="/footer-icon-bg.png"
              alt="footer-icon"
              width={1000}
              height={1000}
              className="absolute pointer-events-none top-0 left-0"
            />
            <div className="flex flex-col gap-8">
              <p className="text-white/50 text-lg leading-relaxed">
                At <span className="text-white font-medium">Floka</span>, we
                believe furniture should be more than just functional—it should
                tell your story. With a focus on timeless design, sustainable
                materials, and expert craftsmanship, we create pieces that feel
                personal.
              </p>

              <div className="flex flex-col items-start gap-2">
                <FooterLink
                  href="mailto:info@floka-design.com"
                  className="text-lg hover:text-white/80 transition-colors"
                >
                  info@floka-design.com
                </FooterLink>
                <p className="text-lg">+123 (456 789 00)</p>
                <p className="text-lg">12/A, Booston Tower, NYC</p>
              </div>
            </div>

            <div className="flex gap-2.5">
              {socialIcons.map((social, idx) => (
                <button
                  key={idx}
                  className="w-12.5 h-12.5 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 fill-white hover:fill-black"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="text-muted/70 text-center my-7.5 text-lg leading-[0.95]">
        Copyright © 2025{" "}
        <FooterLink
          className="text-foreground"
          href="https://themeforest.net/user/case-themes/portfolio"
        >
          Case-Themes
        </FooterLink>
      </span>
    </footer>
  );
};

export default Footer;

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  className = "",
  target,
}) => {
  return (
    <a
      href={href}
      target={target}
      className={`relative group inline-block w-fit ${className}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-px md:h-0.5 bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
    </a>
  );
};
