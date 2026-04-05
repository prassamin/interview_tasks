"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import SectionTitle from "./SectionTitle";

const BlogSection = () => {
  const blogs = [
    {
      tag: "WEB3",
      date: "NOV 07, 2025",
      title: "Seamless user interfaces, crafted with intent.",
      image: "/images/blog/blog-1.webp",
    },
    {
      tag: "WFR3",
      date: "NOV 07, 2025",
      title: "Creative web platforms, designed for growth.",
      image: "/images/blog/blog-2.webp",
    },
    {
      tag: "WEB3",
      date: "NOV 07, 2025",
      title: "Immersive virtual journeys, built with precision.",
      image: "/images/blog/blog-3.webp",
    },
    {
      tag: "WEB3",
      date: "NOV 07, 2025",
      title: "Seamless user interfaces, crafted with intent.",
      image: "/images/blog/blog-1.webp",
    },
    {
      tag: "WFR3",
      date: "NOV 07, 2025",
      title: "Creative web platforms, designed for growth.",
      image: "/images/blog/blog-2.webp",
    },
    {
      tag: "WEB3",
      date: "NOV 07, 2025",
      title: "Immersive virtual journeys, built with precision.",
      image: "/images/blog/blog-3.webp",
    },
  ];

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    skipSnaps: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <section className="max-1025:mt-15 max-1201:mt-20 mt-30 overflow-hidden font-sans">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="flex flex-col items-center max-1201:mb-16 mb-24 px-5 mx-auto">
          <span className="text-xs uppercase tracking-widest text-foreground mb-4 font-medium">
            Insights
          </span>

          <SectionTitle
            text="Company blog & updates"
            className="text-[42px] lg:text-5xl font-display text-center tracking-tight leading-[1.1]"
          />
        </div>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`flex-[0_0_98%] max-768:flex-[0_0_98%] max-1201:flex-[0_0_49.5%] flex-[0_0_calc(100%/3)] pl-3 flex flex-col group gap-3 select-none ${
                  index % 2 === 0 ? "flex-col" : "flex-col-reverse"
                }`}
              >
                {/* IMAGE */}
                <div className="relative aspect-square overflow-hidden rounded-3xl pointer-events-none">
                  <Image
                    src={blog.image}
                    fill
                    draggable={false}
                    className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    alt={blog.title}
                  />

                  <button className="absolute bottom-6 left-6 bg-white rounded-full p-2.5 hover:rotate-90 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <Plus size={18} className="text-black" />
                  </button>
                </div>

                {/* TEXT */}
                <div
                  className={`p-8 flex flex-col gap-6 rounded-3xl ${
                    index % 2 === 0
                      ? "bg-[#0F0F0F] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 text-xs uppercase tracking-widest ${
                      index % 2 === 0 ? "text-white/40" : "text-black/40"
                    }`}
                  >
                    <span
                      className={`font-bold ${
                        index % 2 === 0 ? "text-white" : "text-black"
                      }`}
                    >
                      {blog.tag}
                    </span>
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-xl leading-[1.2] tracking-tight font-display font-medium">
                    {blog.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
