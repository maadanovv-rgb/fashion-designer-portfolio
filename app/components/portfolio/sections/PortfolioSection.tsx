import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Project } from "../types";
import { SectionTitle } from "../ui/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function PortfolioSection({
  categories,
  projects,
  onOpen,
}: {
  categories: string[];
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const [category, setCategory] = useState<string>("Все");
  const [query, setQuery] = useState<string>("");

  const buckets = useMemo(() => {
    const counts: Record<string, number> = { Все: projects.length };
    for (const c of categories) counts[c] = 0;
    for (const p of projects) counts[p.category] = (counts[p.category] ?? 0) + 1;
    return counts;
  }, [categories, projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (category === "Все" ? true : p.category === category))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
        );
      });
  }, [category, query, projects]);

  return (
    <div id="портфолио" className="mt-14">
      <SectionTitle
        kicker="избранные работы"
        title="Портфолио"
        right={
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <div className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по работам…"
                className="h-11 rounded-2xl border-[#D6DDC8] pl-10"
              />
            </div>

            <Button
              variant="secondary"
              className="h-11 rounded-2xl bg-[#E3E8D9] text-[#2F3A2E]"
              onClick={() => {
                setQuery("");
                setCategory("Все");
              }}
            >
              <Filter className="mr-2 h-4 w-4" />
              Сброс
            </Button>
          </div>
        }
      />

      <div className="mt-6 ">
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0 ">
            {categories.map((c) => (
              <TabsTrigger
                key={c}
                value={c}
                className="rounded-2xl border border-[#D6DDC8] bg-[#FBFCF8] px-4 py-2 text-sm data-[state=active]:bg-[#E3E8D9] text-[#2F3A2E]"
              >
                {c}
                <span className="ml-2 rounded-full bg-[#E3E8D9] px-2 py-0.5 text-xs text-muted-foreground text-[#2F3A2E]">
                  {buckets[c] ?? 0}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={category} className="mt-6">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`${category}-${query}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 "
              >
                {filtered.map((p) => (
                  <ProjectCard key={p.id} p={p} onOpen={onOpen} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-[#D6DDC8] bg-[#FBFCF8] p-6 text-sm text-muted-foreground">
                Ничего не найдено. Попробуй изменить фильтр или поиск.
              </div>
            ) : null}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
