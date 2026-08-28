import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, services, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            {site.city}&apos;de balkon filesi, kuş filesi, halı saha filesi ve
            inşaat filesi montajı. Ölçü yerinde, iş temiz, file gergin.
          </p>
          <a
            href={whatsappLink()}
            className="mt-5 inline-flex rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink"
          >
            WhatsApp ile yazın
          </a>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Sayfalar
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Hizmetler
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            {services.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/hizmetler/${item.slug}`}
                  className="hover:text-gold-soft"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {site.legalName}. {site.city}.
      </div>
    </footer>
  );
}
