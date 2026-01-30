"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

function ButterflyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M32 31c-6-12-18-18-24-12-6 6 0 18 12 24 6 3 12 2 12-12Z" fill="currentColor" opacity="0.9" />
      <path d="M32 31c6-12 18-18 24-12 6 6 0 18-12 24-6 3-12 2-12-12Z" fill="currentColor" opacity="0.9" />
      <path d="M32 30c0 10 2 18 2 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 30c0 10-2 18-2 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 12c3-3 7-4 10-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 12c-3-3-7-4-10-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type Props = {
  cardId: string; // data-bfly-card="..."
  corner?: "tr" | "tl" | "br" | "bl";
  offset?: { x: number; y: number };
  delay?: number;
  size?: number;
};

export default function ButterflySticky({
  cardId,
  corner = "tr",
  offset = { x: 6, y: -10 },
  delay = 0.2,
  size = 26,
}: Props) {
  const [mounted, setMounted] = useState(false);

  // позиция цели для прилёта (фиксируем один раз)
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  // финальная позиция "приклейки" внутри карточки
  const [landed, setLanded] = useState(false);

  const color = useMemo(() => (cardId.length % 2 ? "#7B8A61" : "#8C9870"), [cardId]);

  useEffect(() => setMounted(true), []);

  const getCornerPoint = (el: Element) => {
    const r = el.getBoundingClientRect();
    const ox = offset.x ?? 0;
    const oy = offset.y ?? 0;

    const p = {
      tr: { x: r.right + ox, y: r.top + oy },
      tl: { x: r.left + ox, y: r.top + oy },
      br: { x: r.right + ox, y: r.bottom + oy },
      bl: { x: r.left + ox, y: r.bottom + oy },
    };

    return p[corner];
  };

  // ✅ Важно: цель фиксируем ОДИН раз (иначе при скролле "улетает")
  useEffect(() => {
    if (!mounted) return;

    const el = document.querySelector(`[data-bfly-card="${cardId}"]`);
    if (!el) return;

    const p = getCornerPoint(el);
    setTarget(p);
    // никаких scroll listeners
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, cardId, corner, offset.x, offset.y]);

  // когда закончился полёт — "приклеиваем"
  useEffect(() => {
    if (!target) return;
    const t = setTimeout(() => setLanded(true), Math.round((delay + 2.6) * 1000));
    return () => clearTimeout(t);
  }, [target, delay]);

  const showFly = mounted && !!target && !landed;

  // ---- FLY LAYER (Portal) ----
  const flyLayer =
    showFly && typeof document !== "undefined"
      ? createPortal(
          <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
            <motion.div
              className="absolute"
              initial={{ x: -90, y: 120, opacity: 0, rotate: -18, scale: 0.9 }}
              animate={{
                opacity: [0, 1, 1],
                x: [-90, target!.x * 0.55, target!.x],
                y: [120, target!.y - 140, target!.y],
                rotate: [-18, 14, 0],
                scale: [0.9, 1.05, 1],
              }}
              transition={{ duration: 2.6, delay, ease: "easeInOut" }}
            >
              <motion.div
                style={{ width: size, height: size, color }}
                animate={{
                  scaleX: [1, 0.72, 1, 0.86, 1],
                  rotate: [0, 2.5, -2.5, 1.2, 0],
                }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              >
                <ButterflyIcon className="h-full w-full drop-shadow-sm" />
              </motion.div>
            </motion.div>
          </div>,
          document.body
        )
      : null;

  // ---- STICK LAYER (inside Card) ----
  // появление как "приземление" (чтобы не выглядело второй бабочкой)
  const stickLayer = landed ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="pointer-events-none absolute z-10"
      style={{
        ...(corner === "tr" ? { top: 8, right: 8 } : {}),
        ...(corner === "tl" ? { top: 8, left: 8 } : {}),
        ...(corner === "br" ? { bottom: 8, right: 8 } : {}),
        ...(corner === "bl" ? { bottom: 8, left: 8 } : {}),
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
      aria-hidden="true"
    >
      <motion.div
        style={{ width: size, height: size, color, opacity: 0.95 }}
        animate={{ rotate: [0, 2, -2, 1, 0], y: [0, -2, 0, 1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ scaleX: [1, 0.78, 1, 0.88, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        >
          <ButterflyIcon className="h-full w-full drop-shadow-sm" />
        </motion.div>
      </motion.div>
    </motion.div>
  ) : null;

  return (
    <>
      {flyLayer}
      {stickLayer}
    </>
  );
}
