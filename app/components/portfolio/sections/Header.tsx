import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Profile } from "../types";
import { IconPill } from "../ui/IconPill";
import Link from "next/link";

export function Header({ profile }: { profile: Profile }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs tracking-[0.28em] uppercase text-muted-foreground">портфолио</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{profile.name}</h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">{profile.title}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <IconPill icon={MapPin} label={profile.location} />
            <IconPill icon={Mail} label={profile.email} />
            <IconPill icon={Phone} label={profile.phone} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">

          <Button variant="secondary" className="rounded-2xl bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]" asChild>
            <a href={`https://wa.me/+996776068583`}>
              <Mail className="mr-2 h-4 w-4" />
              Написать
            </a>
          </Button>

          <Button variant="secondary" className="rounded-2xl bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]" asChild>
            <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          {/* <Button variant="secondary" className="rounded-2xl bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]" asChild>
            <Link href={`/portfolio/`}>
              Смотреть работы
            </Link>
          </Button> */}


            <Button variant="secondary" className="rounded-2xl bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]" asChild>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Посмотреть резюме
            </a>
            </Button>

        </div>
      </div>
    </motion.div>
  );
}
