import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "../types";
import { Pill } from "../ui/Pill";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  const cover = p.images?.[0];

  return (
    <motion.div variants={fadeUp}>
      <Card className="rounded-2xl border border-[#D6DDC8] bg-[#FBFCF8] text-[#2F3A2E]">

        <button onClick={() => onOpen(p)} className="group block w-full text-left">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={cover}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0b]/55 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full bg-[#E3E8D9] text-[#2F3A2E]">
                {p.category}
              </Badge>
              <Badge variant="outline" className="rounded-full bg-[#FBFCF8]/70 text-[#2F3A2E]">
                {p.year}
              </Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-lg font-semibold text-[#F6F7F2]">{p.title}</div>
                  <div className="mt-1 line-clamp-1 text-sm text-[#F6F7F2]/80">{p.description}</div>
                </div>
                <div className="shrink-0 rounded-full border border-[#D6DDC8] bg-[#FBFCF8]/70 p-2">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </button>

        <CardContent className="pt-4">
          <div className="flex flex-wrap gap-2">
            {p.tags.slice(0, 4).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
