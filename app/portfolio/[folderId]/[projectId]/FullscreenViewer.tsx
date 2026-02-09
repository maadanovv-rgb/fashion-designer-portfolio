"use client";

import { useEffect } from "react";

export default function FullscreenViewer({
  open,
  onOpenChange,
  images,
  index,
  setIndex,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  images: string[];
  index: number;
  setIndex: (n: number) => void;
}) {
  const src = images[index];

  const canPrev = index > 0;
  const canNext = index < images.length - 1;

  const prev = () => setIndex(Math.max(0, index - 1));
  const next = () => setIndex(Math.min(images.length - 1, index + 1));

  // ESC + стрелки клавиатуры (без свайпа)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "ArrowLeft" && canPrev) prev();
      if (e.key === "ArrowRight" && canNext) next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, canPrev, canNext, index]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* overlay */}
      <button
        className="absolute inset-0 bg-black/70"
        onClick={() => onOpenChange(false)}
        aria-label="Закрыть"
      />

      {/* content */}
      <div className="absolute inset-0 flex items-center justify-center p-3 md:p-8">
        <div className="relative w-full max-w-6xl">
          {/* close */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-3 py-2 text-sm hover:bg-white"
          >
            ✕
          </button>

          <div className="relative overflow-hidden rounded-3xl bg-[#111]">
            {/* важное: object-contain, чтобы не резало */}
            <div className="h-[86vh] w-full">
              {src ? (
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              ) : null}
            </div>

            {/* arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  disabled={!canPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-lg disabled:opacity-40"
                  aria-label="Предыдущее"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  disabled={!canNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-lg disabled:opacity-40"
                  aria-label="Следующее"
                >
                  →
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-sm">
                  {index + 1}/{images.length}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
