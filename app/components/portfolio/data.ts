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
    "Художник-дизайнер с профильным образованием (КРСУ, 2023) и опытом 3 года в индивидуальном пошиве. Специализируюсь на разработке художественных эскизов, технических рисунков и декоративной отделке изделий, включая ручную вышивку бисерами. Отлично разбираюсь в тканях, их свойствах и применении в пошиве.",
  specialties: [
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
    tags: ["Ручная вышивка"],
    year: "2025",
    description: "Ручная вышивка с бисерами и стеклянными стразами",
    images: [
      "/portfolio/biser1.webp",
    ],
    folderId: "handwork",
  },
  {
    id: "p38",
    title: "Вечернее платье",
    category: "Вечерние",
    tags: ["Ручная вышивка"],
    year: "2025",
    description: "Ручная вышивка с бисерами и стеклянными стразами",
    images: [
      "/portfolio/biser3.webp",
    ],
    folderId: "handwork",
  },
  {
    id: "p39",
    title: "Вечернее платье",
    category: "Вечерние",
    tags: ["Ручная вышивка"],
    year: "2025",
    description: "Ручная вышивка с бисерами и стеклянными стразами",
    images: [
      "/portfolio/biser2.webp"
    ],
    folderId: "handwork",
  },
  {
    id: "p56",
    title: "Вечернее платье",
    category: "Вечерние",
    tags: ["Ручная вышивка"],
    year: "2025",
    description: "Ручная вышивка с бисерами и стеклянными стразами",
    images: [
      "/portfolio/ruch2.webp"
    ],
    folderId: "handwork",
  },
  {
    id: "p57",
    title: "Вечернее платье",
    category: "Вечерние",
    tags: ["Ручная вышивка"],
    year: "2025",
    description: "Ручная вышивка с бисерами и стеклянными стразами",
    images: [
      "/portfolio/ruch3.webp"
    ],
    folderId: "handwork",
  },
  {
    id: "p2",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2024",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
     "/portfolio/etno1.webp",
    ],
    folderId: "design_prints",
  },
   {
    id: "p40",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2024",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
     "/portfolio/etno2.webp"
    ],
    folderId: "design_prints",
  },
   {
    id: "p62",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2025",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
      "/portfolio/design_prints1.webp",
    ],
    folderId: "design_prints",
  },
  {
    id: "p63",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2025",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
      "/portfolio/design_prints2.webp",
    ],
    folderId: "design_prints",
  },
  {
    id: "p3",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2025",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
      "/portfolio/jaket1.webp",
    ],
    folderId: "design_prints",
  },
  {
    id: "p41",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2025",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
      "/portfolio/jaket2.webp"
    ],
    folderId: "design_prints",
  },
  {
    id: "p4",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2023",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
      "/portfolio/jurek1.webp",
    ],
    folderId: "design_prints",
  },
  {
    id: "p42",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2023",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
      "/portfolio/jurek2.webp",
    ],
    folderId: "design_prints",
  },
  {
    id: "p43",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2023",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
      "/portfolio/olen1.webp",
    ],
    folderId: "design_prints",
  },
  
  {
    id: "p44",
    title: "Дизайн принтов",
    category: "Дизайн принтов",
    tags: ["Дизайн принтов"],
    year: "2023",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
      "/portfolio/olen2.webp"
    ],
    folderId: "design_prints",
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
    ],
      folderId: "handwork"
  },
  {
    id: "p46",
    title: "Вечернее платье",
    category: "Ручная вышивка",
    tags: ["Ручная вышивка"],
    year: "2024",
    description: "Вечернее платье по индивидуальному заказу с ручной вышивкой",
    images: [
      "/portfolio/zelen2.webp",
    ],
      folderId: "handwork"
  },
  {
    id: "p58",
    title: "Ручная вышивка",
    category: "Ручная вышивка",
    tags: ["Ручная вышивка"],
    year: "2024",
    description: "Вечернее платье по индивидуальному заказу с ручной вышивкой",
    images: [
      "/portfolio/handmade3.webp",
    ],
      folderId: "handwork"
  },
  {
    id: "p59",
    title: "Ручная вышивка",
    category: "Ручная вышивка",
    tags: ["Ручная вышивка"],
    year: "2024",
    description: "Вечернее платье по индивидуальному заказу с ручной вышивкой",
    images: [
      "/portfolio/handmade2.webp",
    ],
      folderId: "handwork"
  },
  {
    id: "p60",
    title: "Ручная вышивка",
    category: "Ручная вышивка",
    tags: ["Ручная вышивка"],
    year: "2024",
    description: "Вечернее платье по индивидуальному заказу с ручной вышивкой",
    images: [
      "/portfolio/handmade1.webp",
    ],
      folderId: "handwork"
  },
  {
    id: "p61",
    title: "Ручная вышивка",
    category: "Ручная вышивка",
    tags: ["Ручная вышивка"],
    year: "2024",
    description: "Вечернее платье по индивидуальному заказу с ручной вышивкой",
    images: [
      "/portfolio/handmade4.webp",
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

    ],
      folderId: "tailoring"
  },
  {
    id: "p47",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024", 
    description: "Индивидуальный пошив твидового жакета",
    images: [
      "/portfolio/tvid2.webp",

    ],
      folderId: "tailoring"
  },
  {
    id: "p48",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024", 
    description: "Индивидуальный пошив твидового жакета",
    images: [
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
  {
    id: "p28",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e1.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p29",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e2.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p30",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e3.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p31",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e4.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p32",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e5.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p33",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e6.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p34",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e7.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p35",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e8.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p36",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e9.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p37",
    title: "Тех. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/teh-e10.webp'],
      folderId: "tech_sketch"
  },
  {
    id: "p47",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e1.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p48",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e2.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p49",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e3.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p50",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e4.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p51",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e5.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p52",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e6.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p53",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e7.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p54",
    title: "Худ. эскиз",
    category: "Эскиз",
    tags: ["Эскиз"],
    year: "2024",
    description: "Эскиз",
    images: ['/portfolio/hud-e8.webp'],
      folderId: "art_sketch"
  },
  {
    id: "p56",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual01.webp'],
      folderId: "tailoring"
  },
  {
    id: "p57",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual02.webp'],
      folderId: "tailoring"
  },
   {
    id: "p70",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual001.webp'],
      folderId: "tailoring"
  },
   {
    id: "p71",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual002.webp'],
      folderId: "tailoring"
  },
  {
    id: "p72",
    title: "Инд. пошив",
    category: "Индивидуальный пошив",
    tags: ["Индивидуальный пошив"],
    year: "2024",
    description: "Индивидуальный пошив",
    images: ['/portfolio/indevidual003.webp'],
      folderId: "tailoring"
  },
  {
    id: "p73",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections01.webp'],
      folderId: "collections"
  },
   {
    id: "p74",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections1.webp'],
      folderId: "collections"
  },
   {
    id: "p75",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections2.webp'],
      folderId: "collections"
  },
   {
    id: "p76",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections3.webp'],
      folderId: "collections"
  },
   {
    id: "p77",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections4.webp'],
      folderId: "collections"
  },
   {
    id: "p78",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections5.webp'],
      folderId: "collections"
  },
   {
    id: "p79",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections6.webp'],
      folderId: "collections"
  },
   {
    id: "p80",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections7.webp'],
      folderId: "collections"
  },
   {
    id: "p81",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections8.webp'],
      folderId: "collections"
  },
   {
    id: "p82",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections9.webp'],
      folderId: "collections"
  },
   {
    id: "p83",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections10.webp'],
      folderId: "collections"
  },
   {
    id: "p84",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections11.webp'],
      folderId: "collections"
  },
   {
    id: "p85",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections12.webp'],
      folderId: "collections"
  },
   {
    id: "p86",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections13.webp'],
      folderId: "collections"
  },
   {
    id: "p87",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections14.webp'],
      folderId: "collections"
  },
   {
    id: "p88",
    title: "Коллекции",
    category: "Коллекции",
    tags: ["Коллекции"],
    year: "2024",
    description: "Коллекции",
    images: ['/portfolio/collections15.webp'],
      folderId: "collections"
  },


];

