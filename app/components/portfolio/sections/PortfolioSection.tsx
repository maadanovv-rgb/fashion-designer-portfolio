"use client";

import React, { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FOLDERS } from "../data";
import type { Project, FolderId } from "../types";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: Project[];
  onOpen: (p: Project) => void;
};

export default function PortfolioSection({ projects, onOpen }: Props) {
  const [activeFolder, setActiveFolder] = useState<FolderId | null>(null);
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (activeFolder ? p.folderId === activeFolder : true))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
        );
      });
  }, [projects, activeFolder, query]);

  return (
    <div className="mt-6">
      {activeFolder === null ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FOLDERS.map((f) => {
            const count = projects.filter((p) => p.folderId === f.id).length;
            return (
              <button key={f.id} onClick={() => setActiveFolder(f.id)} className="text-left">
                <Card className="rounded-2xl border border-[#D6DDC8] bg-[#FBFCF8] transition hover:bg-[#E3E8D9]">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2">
                        <span className="text-xl">{f.icon}</span>
                        {f.title}
                      </span>
                      <span className="rounded-full bg-[#E3E8D9] px-2 py-1 text-xs">{count}</span>
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">{f.subtitle}</div>
                  </CardHeader>
                </Card>
              </button>
            );
          })}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="rounded-2xl bg-[#FBFCF8]"
                onClick={() => {
                  setActiveFolder(null);
                  setQuery("");
                }}
              >
                ← Назад к папкам
              </Button>
              <div className="text-lg font-semibold">
                {FOLDERS.find((x) => x.id === activeFolder)?.title}
              </div>
            </div>

            <div className="w-full sm:w-72">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск внутри папки…"
                className="h-11 rounded-2xl"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} p={p} onOpen={onOpen} />
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-[#D6DDC8] bg-[#FBFCF8] p-6 text-sm text-muted-foreground">
              В этой папке пока нет работ (или ничего не найдено).
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
