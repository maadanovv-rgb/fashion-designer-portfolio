import { Sparkles, Scissors, Gem, Shirt } from "lucide-react";
import type { Folder, Profile, Project } from "./types";

// export const CATEGORIES = ["Все", "Свадебные", "Вечерние", "Повседневные", "Сценические", "Эскизы", "Стразы"];

export const profile: Profile = {
  name: "Mellsan",
  title: "Художник-дизайнер · Индивидуальный пошив",
  location: "Бишкек, Кыргызстан",
  email: "nurzat.ryspaeva12@gmail.com",
  phone: "+996 776 068 583",
  instagram: "mellsan_12",
  resumeUrl: "/resume/MELLSAN_Resume.pdf",
  about:
    "Художник-дизайнер с профильным образованием (КРСУ, 2023) и опытом 2,5 года в индивидуальном пошиве. Специализируюсь на разработке художественных эскизов, технических рисунков и декоративной отделке изделий, включая ручную вышивку бисерами. Отлично разбираюсь в тканях, их свойствах и применении в пошиве.",
  specialties: [
    { icon: Shirt, label: "Индивидуальный пошив" },
    { icon: Scissors, label: "Эскизы + техрисунки" },
    { icon: Gem, label: "Вышивка бисерами" },
    { icon: Sparkles, label: "Финишная отделка" },
  ],
  
};

export const FOLDERS = [
  { id: "tailoring", title: "Индивидуальный пошив", subtitle: "Платья, костюмы, посадка", icon: "🧵" },
  { id: "art_sketch", title: "Художественный эскиз", subtitle: "Fashion-эскизы, идеи, силуэты", icon: "✍️" },
  { id: "tech_sketch", title: "Технический эскиз", subtitle: "Flats, схемы, конструкция", icon: "📐" },
  { id: "handwork", title: "Ручные работы (вышивки)", subtitle: "Стразы, бисер, декор", icon: "💎" },
  { id: "collections", title: "Коллекции", subtitle: "Капсулы и серии", icon: "🗂️" },
  { id: "design_prints", title: "Дизайн принтов", subtitle: "Концепции принтов для одежды и текстиля", icon: "🧑🏻‍🎨" },

] as const;

export const folders: Folder[] = [
  { id: "tailoring", title: "Индивидуальный пошив", subtitle: "Платья, жакеты, комплекты" },
  { id: "art_sketch", title: "Художественный эскиз", subtitle: "Fashion-иллюстрации, образы" },
  { id: "tech_sketch", title: "Тех. эскиз", subtitle: "Техрисунки, flats, схемы" },
  { id: "handwork", title: "Ручные работы (вышивки)", subtitle: "Бисер, стразы, декор" },
  { id: "collections", title: "Коллекции", subtitle: "Серии работ и капсулы" },
  { id: "design_prints", title: "Дизайн принтов", subtitle: "Концепции принтов для одежды и текстиля"},

];


export const projects: Project[] = [
  {
    id: "p1",
    title: "Вечернее платье",
    category: "Вечерние",
    tags: ["Индивидуальный пошив"],
    year: "2025",
    description: "Ручная вышивка с бисерами и стеклянными стразами",
    images: [
      "/portfolio/biser1.webp",
      "/portfolio/biser3.webp",
      "/portfolio/biser2.webp"
    ],
    folderId: "handwork",
  },
  {
    id: "p2",
    title: "Этно-жилет Argyle",
    category: "Эскизы",
    tags: ["Эскизы"],
    year: "2024",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
     "/portfolio/etno1.webp",
     "/portfolio/etno2.webp"
    ],
    folderId: "design_prints",
  },
  {
    id: "p3",
    title: "Этно-жилет Argyle",
    category: "Эскизы",
    tags: ["Этно"],
    year: "2025",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
      "/portfolio/jaket1.webp",
      "/portfolio/jaket2.webp"
    ],
    folderId: "design_prints",
  },
  {
    id: "p4",
    title: "Сердце",
    category: "Эскизы",
    tags: ["Эскизы"],
    year: "2023",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
      "/portfolio/jurek1.webp",
      "/portfolio/jurek2.webp",
      "/portfolio/olen1.webp",
      "/portfolio/olen2.webp"
    ],
    folderId: "design_prints",
  },
  {
    id: "p6",
    title: "Свадебные-эскизы",
    category: "Эскизы",
    tags: ["Свадебные"],
    year: "2024",
    description: "Художественные эскизы свадебных нарядов",
    images: [
      "/portfolio/svadba1.webp",
      "/portfolio/svadba2.webp"],
      folderId: "art_sketch"
  },
   {
    id: "p7",
    title: "Вечернее платье",
    category: "Ручная вышивка",
    tags: ["Ручная вышивка"],
    year: "2024",
    description: "Вечернее платье по индивидуальному заказу с ручной вышивкой",
    images: [
      "/portfolio/zelen1.webp",
      "/portfolio/zelen2.webp",
    ],
      folderId: "handwork"
  },
  {
    id: "p8",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив твидового жакета",
    images: [
      "/portfolio/tvid1.webp",
      "/portfolio/tvid2.webp",
      "/portfolio/tvid3.webp",

    ],
      folderId: "tailoring"
  },
  {
    id: "p9",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual1.webp'],
      folderId: "tailoring"
  },
   {
    id: "p28",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual19.webp'],
      folderId: "tailoring"
  },
  {
    id: "p10",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual2.webp'],
      folderId: "tailoring"
  },
  {
    id: "p11",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual3.webp'],
      folderId: "tailoring"
  },
  {
    id: "p12",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual4.webp'],
      folderId: "tailoring"
  },
  {
    id: "p13",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual5.webp'],
      folderId: "tailoring"
  },
  {
    id: "p14",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual6.webp'],
      folderId: "tailoring"
  },
  {
    id: "p15",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual7.webp'],
      folderId: "tailoring"
  },
  {
    id: "p16",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual8.webp'],
      folderId: "tailoring"
  },
  {
    id: "p17",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual9.webp'],
      folderId: "tailoring"
  },
  {
    id: "p18",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual10.webp'],
      folderId: "tailoring"
  },
  {
    id: "p19",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual11.webp'],
      folderId: "tailoring"
  },
  {
    id: "p20",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual12.webp'],
      folderId: "tailoring"
  },
  {
    id: "p21",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual13.webp'],
      folderId: "tailoring"
  },
  {
    id: "p22",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual14.webp'],
      folderId: "tailoring"
  },
  {
    id: "p25",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual17.webp'],
      folderId: "tailoring"
  },
  {
    id: "p27",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual20.webp'],
      folderId: "tailoring"
  },
  {
    id: "p26",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual18.webp'],
      folderId: "tailoring"
  },

];

