"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Butterfly = {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  ampX: number;
  ampY: number;
  rot: number;
  driftX: number;
  driftY: number;
  flap: number;
  opacity: number;
  hue: "a" | "b";
};

function ButterflyIcon({ className }: { className?: string }) {
  // Lightweight SVG (no images) — fast + crisp
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 31c-6-12-18-18-24-12-6 6 0 18 12 24 6 3 12 2 12-12Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 31c6-12 18-18 24-12 6 6 0 18-12 24-6 3-12 2-12-12Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 30c0 10 2 18 2 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 30c0 10-2 18-2 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 12c3-3 7-4 10-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 12c-3-3-7-4-10-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ButterfliesBackground({
  count = 48,
  zIndex = 0,
}: {
  count?: number;
  zIndex?: number;
}) {
  const reduceMotion = useReducedMotion();

  const butterflies: Butterfly[] = useMemo(() => {
    // Deterministic pseudo-random so positions don't “jump” on re-render
    let seed = 1337;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    const clampCount = Math.max(8, Math.min(30, count));

    return Array.from({ length: clampCount }).map((_, i) => {
      const left = Math.round(rand() * 100);
      const top = Math.round(rand() * 100);
      const size = 12 + Math.round(rand() * 20); // 12–32
      const duration = 10 + rand() * 16; // 10–26s (different speeds)
      const delay = rand() * 4;
      const ampX = 10 + rand() * 22;
      const ampY = 14 + rand() * 30;
      const rot = 10 + rand() * 22;
      const driftX = (rand() - 0.5) * 160;
      const driftY = (rand() - 0.5) * 110;
      const flap = 0.5 + rand() * 0.7; // wing flap speed (0.5–1.2s)
      const opacity = 0.35 + rand() * 0.25; // 0.22–0.42
      const hue: Butterfly["hue"] = rand() > 0.55 ? "a" : "b";

      return {
        id: i + 1,
        left: `${left}%`,
        top: `${top}%`,
        size,
        duration,
        delay,
        ampX,
        ampY,
        rot,
        driftX,
        driftY,
        flap,
        opacity,
        hue,
      };
    });
  }, [count]);

  // If user prefers reduced motion — keep it subtle/static
  if (reduceMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex }}
        aria-hidden="true"
      >
        {butterflies.slice(0, Math.min(10, butterflies.length)).map((b) => (
          <div
            key={b.id}
            className="absolute"
            style={{ left: b.left, top: b.top, opacity: b.opacity }}
          >
            <div
              className={b.hue === "a" ? "text-[#7B8A61]" : "text-[#8C9870]"}
              style={{ width: b.size, height: b.size }}
            >
              <ButterflyIcon className="h-full w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true"
    >
      {butterflies.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: b.left, top: b.top }}
          initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, b.opacity, b.opacity],
            x: [
              0,
              b.ampX,
              -b.ampX * 0.85,
              b.ampX * 0.55,
              b.driftX,
            ],
            y: [
              0,
              -b.ampY,
              b.ampY * 0.75,
              -b.ampY * 0.45,
              b.driftY,
            ],
            rotate: [
              0,
              -b.rot,
              b.rot * 0.75,
              -b.rot * 0.45,
              b.rot * 0.2,
            ],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          {/* Wing flap + tiny wobble */}
          <motion.div
            className={b.hue === "a" ? "text-[#7B8A61]" : "text-[#8C9870]"}
            style={{ width: b.size, height: b.size }}
            animate={{
              scaleX: [1, 0.72, 1, 0.84, 1],
              scaleY: [1, 1.03, 1, 0.98, 1],
              rotate: [0, 2.5, -2.5, 1.2, 0],
            }}
            transition={{
              duration: b.flap,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ButterflyIcon className="h-full w-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
