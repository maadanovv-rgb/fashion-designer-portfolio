import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "../types";
import React, { useEffect, useState } from "react";


export function ProjectDialog({
  open,
  onOpenChange,
  project,
  email,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  project: Project | null;
  email: string;
}) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {

  if (open) setSlide(0);
}, [open, project?.id]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-24px)] max-w-3xl rounded-3xl max-h-[90vh] overflow-hidden p-4 sm:p-6">
        {project ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg text-[#2F3A2E]">{project.title}</DialogTitle>
            </DialogHeader>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]">
                {project.category}
              </Badge>
              <Badge variant="secondary" className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]">
                {project.year}
              </Badge>
              {project.tags.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]">
                  {t}
                </Badge>
              ))}
            </div>

            <p className="mt-3 text-sm text-[#2F3A2E]">{project.description}</p>

            <div className="mt-4">
              <div className="sm:hidden">
                <div
                  id={`rail-${project.id}`}
                  className="flex w-full gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x rounded-2xl"
                  style={{ WebkitOverflowScrolling: "touch" }}
                  onScroll={(e) => {
                    const el = e.currentTarget;
                    const w = el.clientWidth;
                    const idx = Math.round(el.scrollLeft / w);
                    setSlide(Math.max(0, Math.min(idx, project.images.length - 1)));
                  }}
                >
                  {project.images.map((src, idx) => (
                    <div className="snap-center shrink-0 w-full overflow-hidden rounded-3xl border border-[#D6DDC8] bg-[#EEF2E4]">
                      {/* фон-подложка */}
                      <div className="relative h-[52vh] w-full">
                        {/* размытие на фоне (чтобы было fashion и без белых полей) */}
                        <img
                          src={src}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 h-full w-full object-cover blur-xl scale-110 opacity-35"
                          loading="lazy"
                        />
                        {/* основное фото */}
                        <img
                          src={src}
                          alt={`${project.title} ${idx + 1}`}
                          className="relative z-10 h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              
                {project.images.length > 1 ? (
                  <div className="mt-3 flex items-center justify-between">
                    <button
                      type="button"
                      className="rounded-xl border border-[#D6DDC8] bg-[#FBFCF8] px-4 py-2 text-sm text-[#2F3A2E]"
                      onClick={() => {
                        const next = Math.max(0, slide - 1);
                        setSlide(next);
                        const rail = document.getElementById(`rail-${project.id}`);
                        if (rail) rail.scrollTo({ left: next * rail.clientWidth, behavior: "smooth" });
                      }}
                    >
                      ←
                    </button>

                    <div className="text-sm text-[#2F3A2E]/70">
                      {slide + 1}/{project.images.length}
                    </div>

                    <button
                      type="button"
                      className="rounded-xl border border-[#D6DDC8] bg-[#FBFCF8] px-4 py-2 text-sm text-[#2F3A2E]"
                      onClick={() => {
                        const next = Math.min(project.images.length - 1, slide + 1);
                        setSlide(next);
                        const rail = document.getElementById(`rail-${project.id}`);
                        if (rail) rail.scrollTo({ left: next * rail.clientWidth, behavior: "smooth" });
                      }}
                    >
                      →
                    </button>
                  </div>
                ) : null}

              
                {project.images.length > 1 ? (
                  <div className="mt-3 flex justify-center gap-2">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`h-2.5 w-2.5 rounded-full border border-[#D6DDC8] ${
                          i === slide ? "bg-[#D6DDC8]" : "bg-[#FBFCF8]"
                        }`}
                        onClick={() => {
                          setSlide(i);
                          const rail = document.getElementById(`rail-${project.id}`);
                          if (rail) rail.scrollTo({ left: i * rail.clientWidth, behavior: "smooth" });
                        }}
                        aria-label={`Слайд ${i + 1}`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>

            
              <div className="hidden sm:grid gap-3 sm:grid-cols-2">
                {project.images.map((src, idx) => (
                  <div key={`${project.id}-${idx}`} className="overflow-hidden rounded-2xl border border-[#D6DDC8]">
                    <img
                      src={src}
                      alt={`${project.title} ${idx + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]" asChild>
                <a href={`mailto:${email}?subject=Проект:%20${encodeURIComponent(project.title)}`}>Запросить цену</a>
              </Button>
              <Button variant="secondary" className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]" onClick={() => onOpenChange(false)}>
                Закрыть
              </Button>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
