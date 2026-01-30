"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

function ButterflyIcon({ className }: { className?: string }) {
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
  offset?: { x: number; y: number }; // микро-сдвиг от угла
  delay?: number; // очередь (1-я, 2-я...)
  size?: number;
  flyDuration?: number; // скорость прилёта
};

export default function ButterflySticky({
  cardId,
  corner = "tr",
  offset = { x: 6, y: -10 },
  delay = 0.6,
  size = 26,
  flyDuration = 8.5, // ✅ медленно
}: Props) {
  const PAD = 8; // ✅ как раньше: top/right = 8px

  const [mounted, setMounted] = useState(false);
  const [landed, setLanded] = useState(false);
  const [targetScreen, setTargetScreen] = useState<{ x: number; y: number } | null>(null);

  const startedRef = useRef(false);

  const color = useMemo(() => (cardId.length % 2 ? "#7B8A61" : "#8C9870"), [cardId]);

  useEffect(() => setMounted(true), []);

  // ✅ 1) Фиксируем цель полёта ОДИН РАЗ (чтобы при скролле не "уезжала")
  useEffect(() => {
    if (!mounted || startedRef.current) return;

    const el = document.querySelector(`[data-bfly-card="${cardId}"]`);
    if (!el) return;

    startedRef.current = true;

    const r = el.getBoundingClientRect();

    // экранные координаты того же угла, где будет приклейка (PAD + offset)
    const base = {
      tr: { x: r.right - PAD, y: r.top + PAD },
      tl: { x: r.left + PAD, y: r.top + PAD },
      br: { x: r.right - PAD, y: r.bottom - PAD },
      bl: { x: r.left + PAD, y: r.bottom - PAD },
    }[corner];

    setTargetScreen({
      x: base.x + (offset.x ?? 0),
      y: base.y + (offset.y ?? 0),
    });
  }, [mounted, cardId, corner, offset.x, offset.y]);

  const showFly = mounted && !!targetScreen && !landed;

  // ✅ 2) Полёт: реально по экрану (Portal) + медленно
  const flyLayer =
    showFly && typeof document !== "undefined"
      ? createPortal(
          <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
            <motion.div
              className="absolute"
              initial={{ x: -160, y: 220, opacity: 0, rotate: -18, scale: 0.9 }}
              animate={{
                opacity: [0, 1, 1],
                x: [-160, targetScreen!.x * 0.45, targetScreen!.x - 6],
                y: [220, targetScreen!.y - 260, targetScreen!.y - 6],

                rotate: [-18, 14, 0],
                scale: 1,
              }}
              transition={{ duration: flyDuration, delay, ease: "easeInOut" }}
              onAnimationComplete={() => setLanded(true)} // ✅ без таймера, без рассинхрона
            >
              <motion.div
                style={{ width: size, height: size, color }}
                animate={{ scaleX: [1, 0.78, 1, 0.88, 1], rotate: [0, 2.5, -2.5, 1.2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} // спокойнее
              >
                <ButterflyIcon className="h-full w-full drop-shadow-sm" />
              </motion.div>
            </motion.div>
          </div>,
          document.body
        )
      : null;

  // ✅ 3) Приклейка: ТОЧНО "как раньше" — угол + PAD + offset (никаких left/top пересчётов)
  const stickStyle: React.CSSProperties =
    corner === "tr"
      ? { top: PAD + (offset.y ?? 0), right: PAD - (offset.x ?? 0) }
      : corner === "tl"
      ? { top: PAD + (offset.y ?? 0), left: PAD + (offset.x ?? 0) }
      : corner === "br"
      ? { bottom: PAD - (offset.y ?? 0), right: PAD - (offset.x ?? 0) }
      : { bottom: PAD - (offset.y ?? 0), left: PAD + (offset.x ?? 0) };

  const stickLayer = landed ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -4 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="pointer-events-none absolute z-10"
      style={stickStyle}
      aria-hidden="true"
    >
      <motion.div
        style={{ width: size, height: size, color, opacity: 0.95 }}
        animate={{ rotate: [0, 2, -2, 1, 0], y: [0, -2, 0, 1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ scaleX: [1, 0.78, 1, 0.88, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
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
