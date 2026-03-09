import Link from "next/link";
import { folders } from "../data";

export default function  FoldersSection() {
  return (
    <section className="mt-10" id="menu">
      <div className="mb-4">
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Работы</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {folders.map((f) => (
          <Link
            key={f.id}
            href={`/portfolio/${f.id}`}
            className="group rounded-3xl border border-[#D6DDC8] bg-[#FBFCF8] p-5 hover:bg-[#E3E8D9] transition"
          >
            <div className="text-lg font-semibold text-[#2F3A2E]">{f.title}</div>
            {f.subtitle ? (
              <div className="mt-2 text-sm text-muted-foreground">{f.subtitle}</div>
            ) : null}
            <div className="mt-4 text-sm text-[#2F3A2E]/70 group-hover:text-[#2F3A2E]">
              Открыть →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
