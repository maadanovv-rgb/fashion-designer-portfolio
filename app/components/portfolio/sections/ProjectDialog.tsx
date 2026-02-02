"use client";

import React, { useEffect, useMemo, useCallback, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "../types"; // <-- поправь путь при необходимости

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  project: Project | null;
  email: string;
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  // циклическое листание
  return (i % len + len) % len;
}

export default function ProjectDialog({ open, onOpenChange, project, email }: Props) {
  const images = useMemo(() => project?.images ?? [], [project?.images]);
  const total = images.length;

  const [index, setIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  // Сброс только при смене проекта (никаких "резко к 1" от ререндеров)
  useEffect(() => {
    if (!project) return;
    setIndex(0);
    setViewerOpen(false);
  }, [project?.id]);

  const go = useCallback(
    (delta: number) => {
      if (total <= 1) return;
      setIndex((prev) => clampIndex(prev + delta, total));
    },
    [total]
  );

  const currentSrc = images[index];

  //  Блокируем скролл страницы, когда открыт полноэкранный просмотр
  useEffect(() => {
    if (!viewerOpen)  return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [viewerOpen]);

  // Клавиши: стрелки листают, Esc закрывает viewer
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (viewerOpen) setViewerOpen(false);
      }
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, viewerOpen, go]);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        {/* Важно: p-0, чтобы мы сами контролировали layout */}
        <DialogContent className="w-[calc(100vw-24px)] max-w-3xl rounded-3xl p-0 overflow-hidden">
          {project ? (
            // Каркас модалки: header + фото + footer (кнопки всегда на месте)
            <div className="flex max-h-[90vh] flex-col bg-[#FBFCF8]">
              {/* HEADER */}
              <div className="px-5 pt-5 sm:px-6">
                <DialogHeader>
                  <DialogTitle className="text-lg text-[#2F3A2E]">{project.title}</DialogTitle>
                </DialogHeader>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]">{project.category}</Badge>
                  <Badge className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]">{project.year}</Badge>
                  {project.tags?.slice(0, 6).map((t, i) => (
                    <Badge key={`${t}-${i}`} className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]">
                      {t}
                    </Badge>
                  ))}
                </div>

                {project.description ? (
                  <p className="mt-3 text-sm text-[#2F3A2E]/80">{project.description}</p>
                ) : null}
              </div>

              {/* PHOTO AREA */}
              <div className="px-5 pb-3 pt-4 sm:px-6">
                <div className="overflow-hidden rounded-3xl border border-[#D6DDC8] bg-[#EEF2E4]">
                  {/* ✅ Высота меньше: чтобы снизу всегда были кнопки */}
                  {/* На мобилке ~38vh, на десктопе ~44vh */}
                  <div className="relative h-[38vh] w-full sm:h-[44vh]" >
                    {currentSrc ? (
                      <>
                        {/* фон-подложка (стильно, без белых полей) */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={currentSrc}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-30 scale-110"
                          draggable={false}
                          onClick={() => onOpenChange(false)}
                        />

                        {/* главное фото (НЕ режется) */}
                        <button
                          type="button"
                          className="absolute inset-0 z-10 flex h-full w-full items-center justify-center"
                          onClick={() => setViewerOpen(true)}
                          aria-label="Открыть фото полностью"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={currentSrc}
                            alt={`${project.title} ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                            draggable={false}
                            onClick={() => onOpenChange(false)}
                          />
                        </button>
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-[#2F3A2E]/60">
                        Нет изображений
                      </div>
                    )}
                  </div>
                </div>

                {/* Управление фото снизу (без свайпа) */}
                {total > 1 ? (
                  <div className="mt-3 flex items-center justify-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 w-12 rounded-2xl border-[#D6DDC8] bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]"
                      onClick={() => go(-1)}
                      aria-label="Предыдущее фото"
                    >
                      ←
                    </Button>

                    <div className="text-sm text-[#2F3A2E]/70">
                      {index + 1}/{total}
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 w-12 rounded-2xl border-[#D6DDC8] bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]"
                      onClick={() => go(1)}
                      aria-label="Следующее фото"
                    >
                      →
                    </Button>
                  </div>
                ) : (
                  <div className="mt-3 text-center text-sm text-[#2F3A2E]/60">Нажми на фото, чтобы открыть</div>
                )}
              </div>

              {/* FOOTER (кнопки всегда видны) */}
              <div className="mt-auto border-t border-[#D6DDC8] bg-[#F6F7F2] px-5 py-4 sm:px-6">
                <div className="flex flex-wrap gap-2">
                  <Button className="rounded-2xl bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]" asChild>
                    <a href={`mailto:${email}?subject=${encodeURIComponent("Проект: " + project.title)}`}>
                      Запросить цену
                    </a>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-2xl border-[#D6DDC8] bg-[#FBFCF8]"
                    onClick={() => onOpenChange(false)}
                  >
                    Закрыть
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      {/* ✅ Полноэкранный просмотр: стильный, стабильный, без порталов */}
      {viewerOpen && project ? (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
          onClick={() => setViewerOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full max-w-6xl">
              {/* Картинка */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentSrc}
                  alt={`${project.title} full ${index + 1}`}
                  className="mx-auto max-h-[88vh] w-auto max-w-[96vw] object-contain rounded-2xl"
                  draggable={false}
                />
              </div>

              {/* Верхняя панель */}
              <div className="pointer-events-none absolute left-0 right-0 top-0 flex items-center justify-between px-2 py-2">
                <div className="pointer-events-auto rounded-full bg-black/50 px-3 py-1 text-xs text-white/80">
                  {index + 1}/{total}
                </div>

                <button
                  type="button"
                  className="pointer-events-auto rounded-full bg-black/60 px-3 py-2 text-sm text-white hover:bg-black/75"
                  onClick={() => setViewerOpen(false)}
                  aria-label="Закрыть"
                >
                  ✕
                </button>
              </div>

              {/* Стрелки (по бокам, но не “на фото”, а в оверлее) */}
              {total > 1 ? (
                <>
                  <button
                    type="button"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/75"
                    onClick={() => go(-1)}
                    aria-label="Предыдущее"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/75"
                    onClick={() => go(1)}
                    aria-label="Следующее"
                  >
                    →
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
