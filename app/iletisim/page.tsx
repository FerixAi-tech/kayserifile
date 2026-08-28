import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Kayseri File ile ücretsiz keşif ve fiyat için iletişime geçin. WhatsApp, telefon veya form.",
};

export default function IletisimPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
          İletişim
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-forest sm:text-5xl">
          Keşif için yazın, yerinde bakalım.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Balkon veya saha fotoğrafı, ilçe ve kabaca ölçü yeterli.{" "}
          {site.city} içi keşif ücretsizdir.
        </p>
        <ul className="mt-8 space-y-4 text-sm">
          <li className="rounded-2xl border border-line bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              WhatsApp
            </p>
            <a
              href={whatsappLink()}
              className="mt-1 block font-semibold text-forest hover:text-gold"
            >
              Hemen mesaj gönder
            </a>
          </li>
          {site.phoneDisplay ? (
            <li className="rounded-2xl border border-line bg-white px-5 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Telefon
              </p>
              <a
                href={telLink()}
                className="mt-1 block font-semibold text-forest"
              >
                {site.phoneDisplay}
              </a>
            </li>
          ) : null}
          <li className="rounded-2xl border border-line bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              E-posta
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block font-semibold text-forest"
            >
              {site.email}
            </a>
          </li>
          <li className="rounded-2xl border border-line bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Bölge
            </p>
            <p className="mt-1 font-semibold text-forest">{site.region}</p>
          </li>
        </ul>
      </div>
      <ContactForm />
    </div>
  );
}
