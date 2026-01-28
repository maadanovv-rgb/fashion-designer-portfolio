"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, Instagram} from "lucide-react";
import { Button } from "@/components/ui/button";

import { CATEGORIES, profile, projects } from "./data";
import type { Project } from "./types";

import { Header } from "./sections/Header";
import { AboutServices } from "./sections/AboutServices";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ProjectDialog } from "./sections/ProjectDialog";

export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F7F2] text-[#2F3A2E]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Header profile={profile} />
        <AboutServices profile={profile} />
        <PortfolioSection categories={CATEGORIES} projects={projects} onOpen={openProject} />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Card className="rounded-2xl border-[#D6DDC8] bg-[#FBFCF8]">
            <CardHeader>
              <CardTitle className="text-base tracking-tight">Контакты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a className="underline underline-offset-4" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a className="underline underline-offset-4" href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noreferrer">
                  @{profile.instagram}
                </a>
              </div>
              <div className="pt-2">
                <Button className="rounded-2xl bg-[#2F3A2E] text-[#F6F7F2] hover:bg-[#253025]" asChild>
                  <a href={`mailto:${profile.email}?subject=Сотрудничество%20/%20заказ`}>Обсудить проект</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-[#D6DDC8] bg-[#FBFCF8]">
            <CardHeader>
              <CardTitle className="text-base tracking-tight">Как я работаю</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div>1) Бриф: идея, референсы, сроки</div>
              <div>2) Эскиз / техрисунок + подбор материалов</div>
              <div>3) Примерки и посадка (для пошива)</div>
              <div>4) Финальная отделка, стразы, контроль качества</div>
              <div className="rounded-2xl border border-[#D6DDC8] bg-[#FBFCF8] p-4 text-xs">
                <span className="font-medium text-foreground">Совет:</span> добавь 6–12 лучших работ (фото/скетчи) и подпиши каждую: задача → материалы → что делала ты.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} · {profile.name}</div>
      </div>

      <ProjectDialog open={open} onOpenChange={setOpen} project={active} email={profile.email} />
    </div>
  );
}
