"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site, telLink, whatsappLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-paper backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo light />
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paper/80 transition hover:text-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          {site.phoneDisplay ? (
            <a href={telLink()} className="text-sm text-gold-soft">
              {site.phoneDisplay}
            </a>
          ) : null}
          <a
            href={whatsappLink()}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-soft"
          >
            Ücretsiz fiyat teklifi alın
          </a>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 md:hidden"
          aria-expanded={open}
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-paper" />
            <span className="block h-0.5 w-5 bg-paper" />
            <span className="block h-0.5 w-5 bg-paper" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-paper/90 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              className="mt-2 rounded-full bg-gold px-4 py-2 text-center font-semibold text-ink"
            >
              Ücretsiz fiyat teklifi alın
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
