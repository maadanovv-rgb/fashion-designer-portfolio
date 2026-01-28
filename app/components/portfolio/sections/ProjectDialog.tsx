import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "../types";

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl rounded-2xl">
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

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.images.map((src, idx) => (
                <div key={`${project.id}-${idx}`} className="overflow-hidden rounded-2xl border border-[#D6DDC8]">
                  <img src={src} alt={`${project.title} ${idx + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
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
