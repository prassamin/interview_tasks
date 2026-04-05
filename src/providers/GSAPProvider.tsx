"use client";

import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    ScrollTrigger.refresh();

    return () => resizeObserver.disconnect();
  }, []);

  return <>{children}</>;
};

export default GSAPProvider;
