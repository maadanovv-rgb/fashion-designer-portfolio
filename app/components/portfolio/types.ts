export type FolderId =
  | "tailoring"
  | "art_sketch"
  | "tech_sketch"
  | "handwork"
  | "collections"
  | "design_prints";


export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  description: string;
  images: string[];
  folderId: FolderId; //
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  instagram: string;
  resumeUrl?: string;
  about: string;
  specialties: { icon: any; label: string }[];
};
