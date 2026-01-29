import { Sparkles, Scissors, Gem, Shirt } from "lucide-react";
import type { Profile, Project } from "./types";

export const CATEGORIES = ["Все", "Свадебные", "Вечерние", "Повседневные", "Сценические", "Эскизы", "Стразы"];

export const profile: Profile = {
  name: "Нурзат Рыспаева",
  title: "Художник-дизайнер · Эскизист · Индивидуальный пошив",
  location: "Бишкек, Кыргызстан",
  email: "nurzat.ryspaeva12@gmail.com",
  phone: "+996 776 068 583",
  instagram: "mellsan_12",
  about:
    "Художник-дизайнер с профильным образованием (КРСУ, 2023) и опытом 2,5 года в индивидуальном пошиве (Atelier Adonn). Специализируюсь на разработке художественных эскизов, технических рисунков и декоративной отделке изделий, включая ручную вышивку стразами. Отлично разбираюсь в тканях, их свойствах и применении в пошиве.",
  specialties: [
    { icon: Shirt, label: "Индивидуальный пошив" },
    { icon: Scissors, label: "Эскизы + техрисунки" },
    { icon: Gem, label: "Вышивка стразами" },
    { icon: Sparkles, label: "Финишная отделка" },
  ],
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Вечернее платье",
    category: "Evening",
    tags: ["Индивидуальный пошив", "Вечерние"],
    year: "2025",
    description: "Ручная вышивка с бисерами и стеклянными стразами",
    images: [
      "/portfolio/biser1.webp",
      "/portfolio/biser2.webp"
    ],
  },
  {
    id: "p2",
    title: "Этно-жилет Argyle",
    category: "Sketches",
    tags: ["Эскизы", "Этно"],
    year: "2024",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
     "/portfolio/etno1.webp",
     "/portfolio/etno2.webp"
    ],
  },
  {
    id: "p3",
    title: "Этно-жилет Argyle",
    category: "Sketches",
    tags: ["Эскизы", "Этно"],
    year: "2025",
    description: "Разработка этно эскиза второго слоя одежды в стиле аргайл",
    images: [
      "/portfolio/jaket1.webp",
      "/portfolio/jaket2.webp"
    ],
  },
  {
    id: "p4",
    title: "Хлопковый рассвет",
    category: "Sketches",
    tags: ["Эскизы", "Этно"],
    year: "2023",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
      "/portfolio/jurek1.webp",
      "/portfolio/jurek2.webp"],
  },
  {
    id: "p5",
    title: "Этно-эскизы",
    category: "Sketches",
    tags: ["Эскизы", "Этно"],
    year: "2024",
    description: "Разработка принта в соответствии с концепцией темы",
    images: [
      "/portfolio/olen1.webp",
      "/portfolio/olen2.webp"],
  },
  {
    id: "p6",
    title: "Свадебные-эскизы",
    category: "Sketches",
    tags: ["Свадебные", "Эскизы"],
    year: "2024",
    description: "Художественные эскизы свадебных нарядов",
    images: [
      "/portfolio/svadba1.webp",
      "/portfolio/svadba2.webp"],
  },
];

