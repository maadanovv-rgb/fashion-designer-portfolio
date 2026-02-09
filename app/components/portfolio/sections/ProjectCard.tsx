import Link from "next/link";
import type { Project } from "@/app/components/portfolio/types";

export default function ProjectCard({
  project,
  folderId,
}: {
  project: Project;
  folderId: string;
}) {
  return (
    <Link href={`/portfolio/${folderId}/${project.id}`}>
      <div className="rounded-3xl border border-[#D6DDC8] bg-[#FBFCF8] overflow-hidden hover:bg-[#E3E8D9] transition">
        <div className="aspect-[4/5] w-full">
          <img
            src={project.images?.[0]}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          <div className="text-sm font-medium text-[#2F3A2E]">{project.title}</div>
          <div className="mt-1 text-xs text-[#2F3A2E]/70">
            {project.category} · {project.year}
          </div>
        </div>
      </div>
    </Link>
  );
}
