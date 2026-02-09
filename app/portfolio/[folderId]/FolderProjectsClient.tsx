"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import type { Project, Folder } from "@/app/components/portfolio/types";

type SortKey = "new" | "old" | "title";

function normalize(s: string) {
  return (s || "").toLowerCase().trim();
}

export default function FolderProjectsClient({
  folder,
  folderId,
  projects,
}: {
  folder: Folder;
  folderId: string;
  projects: Project[];
}) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortKey>("new");

  const items = useMemo(() => {
    const query = normalize(q);

    let list = projects.filter((p) => {
      if (!query) return true;
      const hay = [
        p.title,
        p.description,
        p.category,
        p.year,
        ...(p.tags || []),
      ]
        .filter(Boolean)
        .join(" ");
      return normalize(hay).includes(query);
    });

    list = [...list].sort((a, b) => {
      const ay = Number(a.year || 0);
      const by = Number(b.year || 0);

      if (sort === "new") return by - ay || normalize(a.title).localeCompare(normalize(b.title));
      if (sort === "old") return ay - by || normalize(a.title).localeCompare(normalize(b.title));
      return normalize(a.title).localeCompare(normalize(b.title));
    });

    return list;
  }, [projects, q, sort]);

  return (
    <div>
      {/* Top bar (как каталог) */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[#D6DDC8] bg-[#FBFCF8] px-4 py-2 text-sm hover:bg-[#E3E8D9]"
          >
            ← Назад
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative w-[240px] max-w-[60vw] md:w-[320px]">
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Поиск внутри папки…"
                className="h-10 rounded-full border-[#D6DDC8] bg-[#FBFCF8] pl-4 pr-10 text-[#2F3A2E] placeholder:text-[#2F3A2E]/40"
              />
              {q ? (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2F3A2E]/45 hover:text-[#2F3A2E]"
                  aria-label="Очистить"
                >
                  ✕
                </button>
              ) : null}
            </div>
            {/* Десктопн кнопки сортировки */}
            {/* <div className="hidden sm:flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                className={`h-10 rounded-full border-[#D6DDC8] bg-[#FBFCF8] hover:bg-[#E3E8D9] ${
                  sort === "new" ? "ring-1 ring-[#D6DDC8]" : ""
                }`}
                onClick={() => setSort("new")}
              >
                Новые
              </Button>
              <Button
                type="button"
                variant="outline"
                className={`h-10 rounded-full border-[#D6DDC8] bg-[#FBFCF8] hover:bg-[#E3E8D9] ${
                  sort === "old" ? "ring-1 ring-[#D6DDC8]" : ""
                }`}
                onClick={() => setSort("old")}
              >
                Старые
              </Button>
              <Button
                type="button"
                variant="outline"
                className={`h-10 rounded-full border-[#D6DDC8] bg-[#FBFCF8] hover:bg-[#E3E8D9] ${
                  sort === "title" ? "ring-1 ring-[#D6DDC8]" : ""
                }`}
                onClick={() => setSort("title")}
              >
                A–Я
              </Button>
            </div> */}
          </div>
        </div>

        <div className="mt-6">
          <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            {folder.title}
          </h1>
          {folder.subtitle ? (
            <p className="mt-2 max-w-2xl text-sm text-[#2F3A2E]/70">
              {folder.subtitle}
            </p>
          ) : null}

          <div className="mt-4 flex items-center gap-2 text-sm text-[#2F3A2E]/60">
            <span>Количество: {items.length}</span>
            {q ? <span className="ml-2">· поиск: “{q}”</span> : null}
          </div>
        </div>

        {/* Мобильные кнопки сортировки */}
        {/* <div className="mt-4 flex sm:hidden gap-2">
          <Button
            type="button"
            variant="outline"
            className="h-10 flex-1 rounded-full border-[#D6DDC8] bg-[#FBFCF8] hover:bg-[#E3E8D9]"
            onClick={() => setSort("new")}
          >
            Новые
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-10 flex-1 rounded-full border-[#D6DDC8] bg-[#FBFCF8] hover:bg-[#E3E8D9]"
            onClick={() => setSort("title")}
          >
            A–Я
          </Button>
        </div> */}
      </div>

      {/* Grid (как каталог 12storeez) */}
      <div className="grid gap-5 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => {
          const cover = p.images?.[0] || "/portfolio/placeholder.webp";
          return (
            <Link
              key={p.id}
              href={`/portfolio/${folderId}/${p.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl border border-[#D6DDC8] bg-[#FBFCF8]">
                {/* Фото */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F1F2ED]">
                  <img
                    src={cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* мягкий градиент снизу как в каталоге */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Подписи */}
                <div className="px-3 pb-3 pt-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-[#2F3A2E]">
                        {p.title}
                      </div>
                      <div className="mt-1 truncate text-xs text-[#2F3A2E]/60">
                        {p.category}
                        {p.year ? ` · ${p.year}` : ""}
                      </div>
                    </div>

                    {/* маленькая “метка” справа сверху (как закладка) */}
                    <div className="shrink-0">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#D6DDC8]" />
                    </div>
                  </div>

                  {/* теги аккуратно */}
                  {p.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.slice(0, 2).map((t) => (
                        <Badge
                          key={`${p.id}-${t}`}
                          variant="secondary"
                          className="rounded-full bg-[#E3E8D9] text-[#2F3A2E] border border-[#D6DDC8]"
                        >
                          {t}
                        </Badge>
                      ))}
                      {p.tags.length > 2 ? (
                        <Badge
                          variant="secondary"
                          className="rounded-full bg-[#FBFCF8] text-[#2F3A2E]/70 border border-[#D6DDC8]"
                        >
                          +{p.tags.length - 2}
                        </Badge>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Empty state */}
      {items.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-[#D6DDC8] bg-[#FBFCF8] p-8 text-center">
          <div className="text-lg font-medium">Ничего не найдено</div>
          <div className="mt-2 text-sm text-[#2F3A2E]/70">
            Попробуй изменить запрос поиска.
          </div>
          <div className="mt-4">
            {/* <Button
              type="button"
              variant="outline"
              className="rounded-full border-[#D6DDC8] bg-[#FBFCF8] hover:bg-[#E3E8D9]"
              onClick={() => setQ("")}
            >
              Сбросить поиск
            </Button> */}
          </div>
        </div>
      ) : null}
    </div>
  );
}
