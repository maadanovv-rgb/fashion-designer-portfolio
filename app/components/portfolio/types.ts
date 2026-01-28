export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  description: string;
  images: string[];
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  instagram: string;
  about: string;
  specialties: { icon: any; label: string }[];
};
