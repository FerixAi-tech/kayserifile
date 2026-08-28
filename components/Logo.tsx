import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border sm:h-10 sm:w-10 ${
          light
            ? "border-gold/40 bg-forest text-gold"
            : "border-forest/20 bg-forest text-gold"
        }`}
        aria-hidden
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 8h18M3 12h18M3 16h18M8 4v16M12 4v16M16 4v16"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={`block truncate font-display text-base tracking-tight sm:text-lg ${
            light ? "text-paper" : "text-forest"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`block text-[10px] uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.18em] ${
            light ? "text-gold-soft/80" : "text-muted"
          }`}
        >
          Güvenlik filesi
        </span>
      </span>
    </Link>
  );
}
