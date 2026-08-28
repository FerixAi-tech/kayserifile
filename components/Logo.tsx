import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl border ${
          light
            ? "border-gold/40 bg-forest text-gold"
            : "border-forest/20 bg-forest text-gold"
        }`}
        aria-hidden
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 8h18M3 12h18M3 16h18M8 4v16M12 4v16M16 4v16"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg tracking-tight ${
            light ? "text-paper" : "text-forest"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`block text-[11px] uppercase tracking-[0.18em] ${
            light ? "text-gold-soft/80" : "text-muted"
          }`}
        >
          Güvenlik filesi
        </span>
      </span>
    </Link>
  );
}
