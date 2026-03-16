"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Folder, Project } from "@/app/components/portfolio/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectGallery from "./ProjectGallery";

export default function ProjectPageClient({
  folder,
  project,
}: {
  folder: Folder;
  project: Project;
  folderProjects: Project[];
  
}) {
  const images = useMemo(() => project.images ?? [], [project.images]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const swipeThreshold = 60; // можно 50-80


  const prevImage = () => {
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setLightboxIndex((i) => (i + 1) % images.length);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (images.length <= 1) return;
    setDragStartX(e.clientX);
    setDragDeltaX(0);
    setIsDragging(false);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX === null) return;

    const dx = e.clientX - dragStartX;
    setDragDeltaX(dx);

    // как только чуть двинул — считаем что это drag (чтобы не срабатывал клик)
    if (!isDragging && Math.abs(dx) > 6) setIsDragging(true);
  };

  const onPointerUp = () => {
    if (dragStartX === null) return;

    const dx = dragDeltaX;

    if (dx > swipeThreshold) prevImage();
    else if (dx < -swipeThreshold) nextImage();

    setDragStartX(null);
    setDragDeltaX(0);
    setIsDragging(false);
  };



  useEffect(() => {
  if (!lightboxOpen) return;

  const prev = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setLightboxOpen(false);
    if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + images.length) % images.length);
    if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % images.length);
  };

  window.addEventListener("keydown", onKey);
  return () => {
    document.body.style.overflow = prev;
    window.removeEventListener("keydown", onKey);
  };
}, [lightboxOpen, images.length]);


  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F7F2] text-[#2F3A2E]">
      {/* top bar */}
      <div className="sticky top-0 z-30 border-b border-[#D6DDC8] bg-[#F6F7F2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href={`/portfolio/${folder.id}#${project.id}`}
            className="rounded-full border border-[#D6DDC8] bg-white/60 px-3 py-1.5 text-sm hover:bg-[#E3E8D9]"
          >
            ← Назад
          </Link>

          <div className="text-sm opacity-70">{folder.title}</div>

          <Link
            href="/#contacts"
            className="rounded-full border border-[#D6DDC8] bg-[#E3E8D9] px-3 py-1.5 text-sm hover:bg-[#D6DDC8]"
          >
            Контакты
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        <div className="grid gap-8 md:grid-cols-[1.45fr_0.95fr]">
          <div>
            <div className="md:hidden">
              <ProjectGallery
                images={images}
                variant="mobile"
                onImageClick={openLightbox}
              />
            </div>

            <div className="hidden md:block flex">
              <ProjectGallery
                images={images}
                variant="desktop"
                onImageClick={openLightbox}
              />
            </div>
          </div>

          <aside className="md:sticky md:top-20 md:self-start">
            <div className="rounded-3xl border border-[#D6DDC8] bg-white/60 p-5 backdrop-blur">
              <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#E3E8D9]">
                  {folder.title}
                </Badge>
                {project.year ? (
                  <Badge className="rounded-full bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#E3E8D9]">
                    {project.year}
                  </Badge>
                ) : null}
                {(project.tags ?? []).map((t) => (
                  <Badge
                    key={`${project.id}-${t}`}
                    className="rounded-full bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#E3E8D9]"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              {project.description ? (
                <p className="mt-4 leading-relaxed text-[#2F3A2E]/85">
                  {project.description}
                </p>
              ) : null}



            </div>
          </aside>
        </div>
      </div>

      {lightboxOpen ? (
  <div className="fixed inset-0 z-[9999] bg-[#1a1a1a]/90">
    <button
      className="absolute inset-0 cursor-zoom-out"
      onClick={() => setLightboxOpen(false)}
      aria-label="Close"
    />

    <div className="pointer-events-none absolute left-0 top-0 z-10 w-full p-4">
      <div className="pointer-events-auto flex items-center justify-between">
        <button
          onClick={() => setLightboxOpen(false)}
          className="rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="text-sm text-white/70">
          {lightboxIndex + 1}/{images.length}
        </div>

        <div className="w-[44px]" />
      </div>
    </div>

    <div
      className="absolute inset-0 flex items-center justify-center p-4 touch-pan-y"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <img
        src={images[lightboxIndex]}
        alt={`${project.title} ${lightboxIndex + 1}`}
        className="max-h-[92vh] w-auto max-w-[92vw] select-none object-contain"
        draggable={false}
        onClick={(e) => e.stopPropagation()}
      />
    </div>

    {images.length > 1 ? (
      <>
        <button
          onClick={() => setLightboxIndex((i) => (i - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
          aria-label="Prev"
        >
          ←
        </button>
        <button
          onClick={() => setLightboxIndex((i) => (i + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
          aria-label="Next"
        >
          →
        </button>
      </>
    ) : null}
  </div>
) : null}

    </div>
  );
}
