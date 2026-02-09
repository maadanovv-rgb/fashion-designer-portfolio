"use client";

import { useMemo, useState } from "react";

export default function ProjectGallery({
  images,
  variant,
  onImageClick,
}: {
  images: string[];
  variant: "mobile" | "desktop";
  onImageClick: (idx: number) => void;
}) {
  const safe = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  if (!safe.length) {
    return (
      <div className="rounded-3xl border border-[#D6DDC8] bg-white/50 p-10 text-center text-sm text-[#2F3A2E]/70">
        Фото пока нет
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="rounded-3xl border border-[#D6DDC8] bg-white/60 p-3">
        <div className="relative overflow-hidden rounded-2xl bg-[#EDEFE6]">
          <button
            className="absolute left-2 top-50 z-10 rounded-full bg-black/30 px-3 py-2 text-white"
            onClick={() => setIndex((i) => (i - 1 + safe.length) % safe.length)}
          >
            ←
          </button>
          <button
            className="absolute right-2 top-50 z-10 rounded-full bg-black/30 px-3 py-2 text-white"
            onClick={() => setIndex((i) => (i + 1) % safe.length)}
          >
            →
          </button>

          <img
            src={safe[index]}
            alt={`image ${index + 1}`}
            className="h-[56vh] w-full object-contain"
            onClick={() => onImageClick(index)}
            draggable={false}
          />
        </div>

        <div className="mt-3 flex items-center justify-center">
          <div className="text-sm text-[#2F3A2E]/70">
            {index + 1}/{safe.length}
          </div>

          {/* <div className="flex gap-2">
            {safe.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-[#2F3A2E]" : "bg-[#D6DDC8]"
                }`}
                aria-label={`go ${i + 1}`}
              />
            ))}
          </div> */}

          {/* <button
            onClick={() => onImageClick(index)}
            className="rounded-full border border-[#D6DDC8] bg-white/60 px-3 py-1 text-sm hover:bg-[#E3E8D9]"
          >
            Весь экран
          </button> */}
        </div>
      </div>
    );
  }

  // desktop
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {safe.map((src, idx) => (
        <button
          key={`${src}-${idx}`}
          onClick={() => onImageClick(idx)}
          className="group overflow-hidden rounded-3xl border border-[#D6DDC8] bg-white/40"
        >
          <div className="relative bg-[#EDEFE6]">
            <img
              src={src}
              alt={`image ${idx + 1}`}
              className="h-[520px] w-full object-cover transition group-hover:scale-[1.02]"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent p-4">
                <div className="text-sm text-white/90">Открыть</div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
