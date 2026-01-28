import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Profile } from "../types";
import { Scissors, Shirt, Gem, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutServices({ profile }: { profile: Profile }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="md:col-span-2">
        <Card className="rounded-2xl border-[#D6DDC8] bg-[#FBFCF8]">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">Обо мне</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-text-[#2F3A2E]">{profile.about}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.specialties.map((s) => (
                <Badge key={s.label} variant="secondary" className="rounded-full bg-[#E3E8D9] px-3 py-1 text-[#2F3A2E]">
                  <s.icon className="mr-2 h-4 w-4" />
                  {s.label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <Card className="rounded-2xl border-[#D6DDC8] bg-[#FBFCF8]">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">Услуги</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-text-[#2F3A2E]">
            <div className="flex items-start gap-3">
              <Scissors className="mt-0.5 h-4 w-4" />
              <div>
                <div className="font-medium text-text-[#2F3A2E]">Эскизы & техрисунки</div>
                <div className="text-xs">Fashion-эскизы, flats, схемы декора</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shirt className="mt-0.5 h-4 w-4" />
              <div>
                <div className="font-medium text-text-[#2F3A2E]">Индивидуальный пошив</div>
                <div className="text-xs">Снятие мерок, примерки, посадка</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gem className="mt-0.5 h-4 w-4" />
              <div>
                <div className="font-medium text-text-[#2F3A2E]">Вышивка стразами</div>
                <div className="text-xs">Подбор камней, выкладка по схеме</div>
              </div>
            </div>

            <Button variant="secondary" className="rounded-2xl bg-[#E3E8D9] text-[#2F3A2E] hover:bg-[#D6DDC8]" asChild>
              <a href={`mailto:${profile.email}?subject=Заказ%20на%20пошив%20/%20эскиз`}>
                <Download className="mr-2 h-4 w-4" />
                Запросить прайс / бриф
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
