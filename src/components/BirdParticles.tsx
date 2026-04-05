"use client";

import { cn } from "@/lib/utils";
import React, { CanvasHTMLAttributes, useEffect, useRef } from "react";

// each single dot on the screen
interface ParticleProps {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  size: number;
  color: string;
  density: number;
}

class Particle implements ParticleProps {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number = 0; // horizontal speed
  vy: number = 0; // virtical speed
  size: number;
  color: string;
  density: number;
  private offset: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.homeX = x;
    this.homeY = y;
    this.size = 1.3;
    this.color = color;
    this.density = Math.random() * 20 + 5; // how much it runs away
    this.offset = Math.random() * Math.PI * 2; // for the random shake
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(
    mouse: { x: number | null; y: number | null; radius: number },
    time: number,
    stiffness: number,
    friction: number,
  ) {
    // some tiny movement so it looks alive even when no mouse
    const idleX = Math.sin(time + this.offset * 2) * 2;
    const idleY = Math.cos(time + this.offset) * 2;

    // this is where the dot wants to be
    const targetX = this.homeX + idleX;
    const targetY = this.homeY + idleY;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // if mouse is too close then run away
      if (distance < mouse.radius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        this.x -= directionX;
        this.y -= directionY;
      } else {
        // if mouse is gone then spring back to shape
        this.applySpringForce(targetX, targetY, stiffness, friction);
      }
    } else {
      this.applySpringForce(targetX, targetY, stiffness, friction);
    }
  }

  applySpringForce(
    targetX: number,
    targetY: number,
    stiffness: number,
    friction: number,
  ) {
    // basic spring physics with damping
    const ax = (targetX - this.x) * stiffness;
    const ay = (targetY - this.y) * stiffness;

    this.vx += ax;
    this.vy += ay;

    this.vx *= friction;
    this.vy *= friction;

    this.x += this.vx;
    this.y += this.vy;
  }
}

interface BirdParticlesProps extends CanvasHTMLAttributes<HTMLCanvasElement> {
  align?: "left" | "center" | "right";
  color?: string;
  radius?: number;
  particleSize?: number;
  imageSrc?: string;
  shapeWidth?: number;
  position?: "absolute" | "fixed";
  stiffness?: number; // how fast it pulls back
  friction?: number; // how much it bounches
}

const BirdParticles: React.FC<BirdParticlesProps> = ({
  className,
  align = "right",
  color = "#fff",
  radius = 250,
  particleSize = 1.3,
  imageSrc = "/bird.png",
  shapeWidth = 500,
  position = "absolute",
  stiffness = 0.05,
  friction = 0.85,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: null as number | null,
    y: null as number | null,
    radius: radius,
  });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationFrameId = useRef<number>(0);
  const time = useRef<number>(0);

  useEffect(() => {
    mouseRef.current.radius = radius;
  }, [radius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // this part scanns the image and finds where to put the dots
    const initParticles = (img: HTMLImageElement) => {
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;

      const containerWidth = canvas.width;
      const containerHeight = canvas.height;

      // makes sure the shape is not too big for the screen
      const targetWidth = Math.min(containerWidth * 0.9, shapeWidth);
      const aspectRatio = img.height / img.width;
      const targetHeight = targetWidth * aspectRatio;

      tempCanvas.width = targetWidth;
      tempCanvas.height = targetHeight;
      tempCtx.drawImage(img, 0, 0, targetWidth, targetHeight);

      const imageData = tempCtx.getImageData(0, 0, targetWidth, targetHeight);
      const data = imageData.data;

      const newParticles: Particle[] = [];
      const skip = 3; // every 3rd pixel for good fps

      // align the whole bird to left or right or center
      let offsetX = (containerWidth - targetWidth) / 2;
      if (align === "right") {
        offsetX = containerWidth - targetWidth - 50;
      } else if (align === "left") {
        offsetX = 50;
      }

      const offsetY = (containerHeight - targetHeight) / 2;

      // scan pixels and see which ones are not empty
      for (let y = 0; y < targetHeight; y += skip) {
        for (let x = 0; x < targetWidth; x += skip) {
          const index = (y * targetWidth + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 128) {
            const p = new Particle(x + offsetX, y + offsetY, color);
            p.size = particleSize;
            newParticles.push(p);
          }
        }
      }
      particlesRef.current = newParticles;
    };

    // resize handles the canvas drawing area
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      if (imageRef.current) {
        initParticles(imageRef.current);
      }
    };

    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      imageRef.current = image;
      setCanvasSize();
    };

    // get where our mouse is on the site
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!canvas || !e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.touches[0].clientX - rect.left;
      mouseRef.current.y = e.touches[0].clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", setCanvasSize);

    // drawing loop: clear -> update -> draw again and again
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time.current += 0.01;

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(
          mouseRef.current,
          time.current,
          stiffness,
          friction,
        );
        particles[i].draw(ctx);
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // cleanup events when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [
    align,
    color,
    imageSrc,
    particleSize,
    shapeWidth,
    radius,
    stiffness,
    friction,
  ]);

  return (
    <canvas
      {...props}
      ref={canvasRef}
      className={cn(`right-0 top-1/2 -translate-y-1/2`, className)}
      style={{
        ...props.style,
        mixBlendMode: "screen",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        position: position,
      }}
    />
  );
};

export default BirdParticles;
