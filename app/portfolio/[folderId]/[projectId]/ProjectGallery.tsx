"use client";

import { useMemo, useRef, useState } from "react";

type Props = {
  images?: string[];
  variant?: "mobile" | "desktop";
  onImageClick?: (index: number) => void;
};

export default function ProjectGallery({
  images,
  variant = "desktop",
  onImageClick,
}: Props) {
  const safeImages = useMemo(() => images ?? [], [images]);
  const [index, setIndex] = useState(0);

  // swipe refs (без лишних ререндеров)
  const startXRef = useRef<number | null>(null);
  const deltaXRef = useRef(0);
  const draggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);

  const THRESHOLD = 60; // сколько px нужно "протянуть" для свайпа
  const DRAG_START = 6; // после скольких px считаем что это drag (а не клик)

  const clampIndex = (i: number) => {
    const len = safeImages.length || 1;
    return ((i % len) + len) % len;
  };

  const goPrev = () => {
    if (safeImages.length <= 1) return;
    setIndex((i) => clampIndex(i - 1));
  };

  const goNext = () => {
    if (safeImages.length <= 1) return;
    setIndex((i) => clampIndex(i + 1));
  };

  // --- pointer handlers (mobile swipe) ---
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (safeImages.length <= 1) return;

    // только primary pointer
    if (pointerIdRef.current !== null) return;

    pointerIdRef.current = e.pointerId;
    startXRef.current = e.clientX;
    deltaXRef.current = 0;
    draggingRef.current = false;

    // чтобы не терять события при уходе пальца за блок
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;
    if (startXRef.current === null) return;

    const dx = e.clientX - startXRef.current;
    deltaXRef.current = dx;

    if (!draggingRef.current && Math.abs(dx) > DRAG_START) {
      draggingRef.current = true;
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;

    const dx = deltaXRef.current;

    // reset
    pointerIdRef.current = null;
    startXRef.current = null;
    deltaXRef.current = 0;

    if (Math.abs(dx) >= THRESHOLD) {
      if (dx < 0) goNext();
      else goPrev();
    }

    // небольшая задержка, чтобы клик сразу после свайпа не срабатывал
    setTimeout(() => {
      draggingRef.current = false;
    }, 0);
  };

  const onPointerCancel = () => {
    pointerIdRef.current = null;
    startXRef.current = null;
    deltaXRef.current = 0;
    draggingRef.current = false;
  };

  // ---------- RENDER ----------
  if (variant === "mobile") {
    const current = safeImages[index];

    return (
      <div className="rounded-[28px] border border-[#D6DDC8] bg-[#FBFCF8] p-4">
        <div
          className="relative overflow-hidden rounded-[22px] bg-white"
          style={{ touchAction: "pan-y" }} // вертикальный скролл страницы не ломаем
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <img
            src={current}
            alt=""
            draggable={false}
            className="w-full select-none object-contain"
            style={{ maxHeight: "62vh" }}
            onClick={(e) => {
              e.stopPropagation();
              // если был свайп — не открываем fullscreen
              if (draggingRef.current) return;
              onImageClick?.(index);
            }}
          />

          {safeImages.length > 1 && (
            <>
              {/* стрелки */}
              <button
                type="button"
                aria-label="Prev"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/20 px-4 py-3 text-white backdrop-blur hover:bg-black/30"
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/20 px-4 py-3 text-white backdrop-blur hover:bg-black/30"
              >
                →
              </button>

              {/* счетчик */}
              <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur">
                {index + 1}/{safeImages.length}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-[#D6DDC8] bg-[#FBFCF8] p-4">
      <div className="grid gap-3 sm:grid-cols-1">
        {safeImages.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => onImageClick?.(i)}
            className="group relative overflow-hidden rounded-[22px] bg-white"
          >
            <img
              src={src}
              alt=""
              className="h-200 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
