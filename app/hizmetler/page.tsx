import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Kayseri'de balkon filesi, kuş filesi, halı saha filesi, inşaat filesi, merdiven boşluğu ve çatı filesi montajı.",
};

export default function HizmetlerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
        Hizmetler
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-forest sm:text-5xl">
        Kayseri&apos;de güvenlik filesi çözümleri
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Her file aynı işi görmez. Aşağıdan ihtiyacınıza bakın; keşifte malzeme
        ve montaj şeklini yerinde netleştiririz.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((item) => (
          <Link
            key={item.slug}
            href={`/hizmetler/${item.slug}`}
            className="rounded-3xl border border-line bg-white p-7 shadow-sm transition hover:border-gold/40"
          >
            <span
              className="inline-block h-2 w-10 rounded-full"
              style={{ background: item.accent }}
            />
            <h2 className="mt-4 font-display text-2xl text-forest">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{item.summary}</p>
            <ul className="mt-4 space-y-1 text-sm text-forest/80">
              {item.points.map((point) => (
                <li key={point}>· {point}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
