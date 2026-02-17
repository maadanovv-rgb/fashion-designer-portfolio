"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, Instagram} from "lucide-react";
import { Button } from "@/components/ui/button";

import { profile, projects } from "./data";
import type { Project } from "./types";

import { Header } from "./sections/Header";
import { AboutServices } from "./sections/AboutServices";

import ButterflySticky from "../ButterflySticky";
import FoldersSection from "./sections/FolderSection";


export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  

  return (
<div className="min-h-screen text-[#2F3A2E]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <Header profile={profile} />
        <section data-bfly-card="hero" className="relative overflow-visible" >
            <ButterflySticky cardId="hero" corner="tr" offset={{ x: 6, y: -10 }} flyDuration={8} delay={0.2} size={26} />
            <ButterflySticky cardId="hero" corner="tl" offset={{ x: 6, y: -10 }} flyDuration={6} delay={0.4} size={26} />
            <ButterflySticky cardId="hero" corner="br" offset={{ x: 6, y: -10 }} flyDuration={7} delay={0.4} size={26} />
            <ButterflySticky cardId="hero" corner="bl" offset={{ x: 6, y: -10 }} flyDuration={9} delay={0.4} size={26} />
            <AboutServices profile={profile}  />
        </section>
        <section data-bfly-card="tabs" className="relative overflow-visible" >
            <ButterflySticky cardId="tabs" corner="tr" offset={{ x: 6, y: -10 }} flyDuration={11} delay={0.2} size={26} />
            <ButterflySticky cardId="tabs" corner="tl" offset={{ x: 6, y: -10 }} flyDuration={9} delay={0.4} size={26} />
            <ButterflySticky cardId="tabs" corner="br" offset={{ x: 6, y: -10 }} flyDuration={6} delay={0.4} size={26} />


            {/* <PortfolioSection projects={projects} onOpen={openProject} /> */}
            <FoldersSection />
        </section>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Card
              data-bfly-card="grid" 
              className="relative overflow-visible rounded-2xl border border-[#D6DDC8] bg-[#FBFCF8]"
            >
               
            <ButterflySticky cardId="grid" corner="tr" offset={{ x: 6, y: -10 }} flyDuration={6} delay={0.2} size={26} />
            <ButterflySticky cardId="grid" corner="tl" offset={{ x: 6, y: -10 }} flyDuration={8} delay={0.4} size={26} />
            <ButterflySticky cardId="grid" corner="br" offset={{ x: 6, y: -10 }} flyDuration={9} delay={0.4} size={26} />
            <ButterflySticky cardId="grid" corner="bl" offset={{ x: 6, y: -10 }} flyDuration={12} delay={0.4} size={26} />
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
                  <a href={`https://wa.me/996776068583`}>Обсудить проект</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-visible  rounded-2xl border-[#D6DDC8] bg-[#FBFCF8]" data-bfly-card="card-1" >
            
            <ButterflySticky cardId="card-1" corner="tr" offset={{ x: 6, y: -10 }} flyDuration={6} delay={0.2} size={26} />
            <ButterflySticky cardId="card-1" corner="tl" offset={{ x: 6, y: -10 }} flyDuration={8} delay={0.3} size={26} />
            <ButterflySticky cardId="card-1" corner="br" offset={{ x: 6, y: -10 }} flyDuration={9} delay={0.6} size={26} />
            <ButterflySticky cardId="card-1" corner="bl" offset={{ x: 6, y: -10 }} flyDuration={12} delay={0.4} size={26} />
            <CardHeader>
              <CardTitle className="text-base tracking-tight">Как я работаю</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div>1) Бриф: идея, референсы, сроки</div>
              <div>2) Эскиз / техрисунок + подбор материалов</div>
              <div>3) Примерки и посадка (для пошива)</div>
              <div>4) Финальная отделка, стразы, контроль качества</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} · {profile.name}</div>
      </div>

    </div>
  );
}
