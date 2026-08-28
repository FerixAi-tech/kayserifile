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
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
          İletişim
        </p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-forest sm:text-4xl lg:text-5xl">
          Keşif için yazın, yerinde bakalım.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Balkon veya saha fotoğrafı, ilçe ve kabaca ölçü yeterli.{" "}
          {site.city} içi keşif ücretsizdir.
        </p>
        <ul className="mt-8 space-y-4 text-sm">
          <li className="rounded-2xl border border-line bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Telefon / WhatsApp
            </p>
            <a
              href={telLink()}
              className="mt-1 block font-semibold text-forest hover:text-gold"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              className="mt-2 inline-block text-sm font-medium text-moss hover:text-gold"
            >
              WhatsApp ile yaz →
            </a>
          </li>
          <li className="rounded-2xl border border-line bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Adres
            </p>
            <p className="mt-1 font-semibold leading-relaxed text-forest">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.district}/{site.address.city}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.addressDisplay)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-moss hover:text-gold"
            >
              Haritada aç →
            </a>
          </li>
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
