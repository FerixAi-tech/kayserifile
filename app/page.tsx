import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import {
  districts,
  faqs,
  reasons,
  services,
  site,
  steps,
  whatsappLink,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute inset-0 diamond-net opacity-70" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
              {site.city} · Güvenlik filesi montajı
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.12] tracking-tight sm:text-6xl">
              Balkonunuz, sahanız, şantiyeniz güvende olsun.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
              {site.city}&apos;de balkon filesi, kuş filesi, halı saha filesi ve
              inşaat filesi. Ücretsiz keşif, UV dayanımlı malzeme, gergin ve
              temiz montaj.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-soft"
              >
                Ücretsiz fiyat teklifi alın
              </a>
              <Link
                href="/hizmetler"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-paper hover:bg-white/5"
              >
                Hizmetlere bak
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center sm:text-left">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-paper/50">
                  Keşif
                </dt>
                <dd className="mt-1 font-display text-2xl text-gold-soft">
                  Ücretsiz
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-paper/50">
                  Bölge
                </dt>
                <dd className="mt-1 font-display text-2xl text-gold-soft">
                  Kayseri
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-paper/50">
                  Teslim
                </dt>
                <dd className="mt-1 font-display text-2xl text-gold-soft">
                  Hızlı
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-ink/40 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-gold-soft">
                Ne takıyoruz
              </p>
              <ul className="mt-6 space-y-3">
                {services.slice(0, 4).map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/hizmetler/${item.slug}`}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2.5 transition hover:border-gold/40 hover:bg-white/10"
                    >
                      {item.image ? (
                        <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </span>
                      ) : null}
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-paper">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block truncate text-sm text-paper/60">
                          {item.short}
                        </span>
                      </span>
                      <span className="pr-1 text-gold-soft transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-sm text-forest sm:px-6">
          <span>UV dayanımlı file</span>
          <span className="hidden text-gold sm:inline">◆</span>
          <span>Yerinde ölçü</span>
          <span className="hidden text-gold sm:inline">◆</span>
          <span>Gergin montaj</span>
          <span className="hidden text-gold sm:inline">◆</span>
          <span>Kayseri ve çevre</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
            Hizmetler
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-forest">
            İhtiyaca göre file, tahmine göre değil.
          </h2>
          <p className="mt-4 text-muted">
            Balkon, kuş, saha ve inşaat filesi aynı malzeme değildir. Kayseri&apos;de
            her işe doğru göz aralığı ve doğru gergi uyguluyoruz.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <ServiceCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-forest text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">
              Neden biz
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight">
              File takmak kolay görünür. Doğru takmak ayrı iştir.
            </h2>
            <p className="mt-4 text-paper/70">
              Gevşek file, boş kenar veya yanlış göz aralığı hem işe yaramaz hem
              çabuk bozulur. Biz ölçü, malzeme ve işçiliği aynı işin parçası
              sayarız.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-display text-xl text-gold-soft">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
          Süreç
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-tight text-forest">
          Keşiften teslimata dört adım.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((item) => (
            <div key={item.n} className="border-t-2 border-gold pt-5">
              <p className="font-display text-3xl text-gold">{item.n}</p>
              <h3 className="mt-3 text-lg font-semibold text-forest">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl text-forest">
            Kayseri&apos;nin her yerindeyiz
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Melikgazi&apos;den Talas&apos;a, Kocasinan&apos;dan Develi&apos;ye yerinde keşif
            yapıyoruz. Nevşehir, Niğde ve Kırşehir işleri de konuşulur.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {districts.map((name) => (
              <li
                key={name}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm text-forest"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl text-forest">Sık sorulanlar</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-forest [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-gold transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-paper diamond-net sm:px-12">
          <h2 className="font-display text-4xl tracking-tight">
            Balkon fotoğrafı yeter, keşife gelelim.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            WhatsApp&apos;tan ölçü ve fiyat için yazın. {site.city} içi keşif
            ücretsizdir.
          </p>
          <a
            href={whatsappLink()}
            className="mt-8 inline-flex rounded-full bg-gold px-7 py-3 font-semibold text-ink hover:bg-gold-soft"
          >
            WhatsApp ile iletişime geç
          </a>
        </div>
      </section>
    </>
  );
}
