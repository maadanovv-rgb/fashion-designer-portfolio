import { notFound } from "next/navigation";
import { folders, projects } from "@/app/components/portfolio/data";
import type { FolderId } from "@/app/components/portfolio/types";
import ProjectPageClient from "./ProjectPageClient";

type Params = { folderId: string; projectId: string };

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const { folderId: folderIdRaw, projectId } = await Promise.resolve(params);

  const folderId = folderIdRaw as FolderId;

  const folder = folders.find((f) => f.id === folderId);
  if (!folder) return notFound();

  const project = projects.find((p) => p.folderId === folderId && p.id === projectId);
  if (!project) return notFound();

  const folderProjects = projects.filter((p) => p.folderId === folderId);

  return (
    <ProjectPageClient folder={folder} project={project} folderProjects={folderProjects} />
  );
}
