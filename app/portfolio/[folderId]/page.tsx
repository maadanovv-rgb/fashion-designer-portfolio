import { notFound } from "next/navigation";
import { folders, projects } from "@/app/components/portfolio/data";
import FolderProjectsClient from "./FolderProjectsClient";
import type { FolderId } from "@/app/components/portfolio/types";


type Params = { folderId: string };

export default async function FolderPage({ params }: { params: Params | Promise<Params> }) {
  const { folderId: raw } = await Promise.resolve(params);
  const folderId = raw as FolderId;

  const folder = folders.find((f) => f.id === folderId);
  if (!folder) return notFound();

  const folderProjects = projects.filter((p) => p.folderId === folderId);

  return (
    <div className="min-h-screen bg-[#F6F7F2] text-[#2F3A2E]">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12 ">        
        <FolderProjectsClient folder={folder} folderId={folderId} projects={folderProjects} />
      </div>
    </div>
  );
}
