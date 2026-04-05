"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const FeedbackSection = () => {
  const feedbacks = [
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      author: "Julian T.Beaumont",
      role: "IT Specialist",
      title: "Great Design Solutions",
      feedback:
        "Working with this team was a game-changer for our business. Their attention to detail and creative approach to problem-solving are top-notch. Highly recommended!",
      rating: 5,
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
    <section className="max-1025:mt-15 max-1201:mt-20 mt-30 font-sans overflow-hidden">
      <div className="container mx-auto px-5 flex flex-col">
        <span className="text-xs uppercase tracking-widest text-foreground mb-10 font-medium font-display border-b border-muted/10 py-3.5 w-full">
          user feedbacks
        </span>
        <div className="flex flex-col gap-25">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="text-[42px] max-1025:text-[42px] 1025:text-5xl font-display tracking-tight leading-[1.1] 768:max-w-[70%]"
            >
              Accelerating growth, and unlocking new potential.{" "}
              <div className="inline-flex items-center gap-2 mr-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Image
                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-highlight1.jpg"
                    key={index}
                    width={100}
                    height={100}
                    alt=""
                    className="inline-block w-10 h-10 rounded-full"
                  />
                ))}
              </div>
              Let’s build your brand—together.
            </motion.div>
          </div>
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex">
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className={`max-768:flex-[0_0_98%] max-1201:flex-[0_0_49.5%] flex-[0_0_calc(100%/3)] pl-3 flex flex-col group gap-3 select-none ${
                    index % 2 === 0 ? "flex-col" : "flex-col-reverse"
                  }`}
                >
                  {/* content */}
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-white group-hover:bg-black transition-colors duration-500 p-8">
                    {/* hover fill overlay */}
                    <div className="absolute inset-0 bg-black scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex mb-5">
                        {Array.from({ length: feedback.rating }).map(
                          (_, index) => (
                            <Star
                              size={18}
                              key={index}
                              className="text-amber-500 transition-colors duration-300"
                            />
                          ),
                        )}
                      </div>
                      <div className="w-full grow flex flex-col justify-between pb-8 font-display transition-colors duration-500 group-hover:text-white text-black">
                        <p className="text-xl">
                          &rdquo; {feedback.feedback} &rdquo;
                        </p>
                        <p className="text-lg opacity-70">
                          &rdquo;{feedback.title}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* meta */}
                  <div
                    className={`relative overflow-hidden p-6 flex ${index % 2 === 0 ? "flex-col" : "flex-col-reverse"} gap-2 rounded-3xl bg-white group-hover:bg-black transition-colors duration-500 text-black group-hover:text-white`}
                  >
                    {/* hover fill overlay */}
                    <div className="absolute inset-0 bg-black scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col gap-2">
                      <span
                        className={`text-xs uppercase tracking-widest opacity-60`}
                      >
                        {feedback.role}
                      </span>

                      <h3 className="text-xl leading-[1.2] tracking-tight font-display font-medium">
                        {feedback.author}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
