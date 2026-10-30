"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  shape: "dot" | "square" | "triangle";
  rotation: number;
  rotationSpeed: number;
};

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const pointer = {
      x: -1000,
      y: -1000,
    };

    const createParticles = (): Particle[] => {
      // Keep the animation lightweight on smaller screens.
      const area = width * height;
      const count = Math.min(100, Math.max(35, Math.floor(area / 11000)));

      return Array.from({ length: count }, () => {
        // Most particles are dots; only a few are geometric shapes.
        const random = Math.random();

        const shape: Particle["shape"] =
          random > 0.94 ? "triangle" : random > 0.85 ? "square" : "dot";

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.2 + 0.8,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          opacity: Math.random() * 0.45 + 0.2,
          shape,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.006,
        };
      });
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      // Reset the transform before scaling to prevent cumulative scaling.
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles = createParticles();
      draw(false);
    };

    const draw = (animate: boolean) => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (animate) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.rotation += particle.rotationSpeed;

          // Wrap particles around the edges.
          if (particle.x < -10) particle.x = width + 10;
          if (particle.x > width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = height + 10;
          if (particle.y > height + 10) particle.y = -10;

          // Push particles away from the pointer.
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const interactionRadius = 160;

          if (distance > 0 && distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const pushStrength = force * 3.5;

            particle.x += (dx / distance) * pushStrength;
            particle.y += (dy / distance) * pushStrength;
          }
        }

        context.save();
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);

        context.fillStyle = `rgba(36, 87, 255, ${particle.opacity})`;

        if (particle.shape === "dot") {
          context.beginPath();
          context.arc(0, 0, particle.radius, 0, Math.PI * 2);
          context.fill();
        } else if (particle.shape === "square") {
          const size = particle.radius * 2.2;

          context.fillRect(-size / 2, -size / 2, size, size);
        } else {
          const size = particle.radius * 2.8;

          context.beginPath();
          context.moveTo(0, -size);
          context.lineTo(size * 0.866, size / 2);
          context.lineTo(-size * 0.866, size / 2);
          context.closePath();
          context.fill();
        }

        context.restore();
      }
    };

    const animate = () => {
      draw(true);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();

      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const handlePointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const startAnimation = () => {
      window.cancelAnimationFrame(animationFrame);

      if (reducedMotion.matches) {
        draw(false);
        return;
      }

      animate();
    };

    resizeCanvas();
    startAnimation();

    window.addEventListener("resize", resizeCanvas);
    const hero = canvas.parentElement;

    hero?.addEventListener("pointermove", handlePointerMove);
    hero?.addEventListener("pointerleave", handlePointerLeave);
    reducedMotion.addEventListener("change", startAnimation);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      hero?.removeEventListener("pointermove", handlePointerMove);
      hero?.removeEventListener("pointerleave", handlePointerLeave);
      reducedMotion.removeEventListener("change", startAnimation);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />
  );
}
