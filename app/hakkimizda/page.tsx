import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name}: Kayseri'de balkon, kuş, halı saha ve inşaat filesi montajı.`,
};

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
        Hakkımızda
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-forest sm:text-5xl">
        Kayseri&apos;de file işini ciddiye alan bir ekip.
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/85">
        <p>
          {site.name}, Kayseri&apos;de güvenlik filesi montajı yapan yerel bir
          ekiptir. İşimiz balkon filesi, kuş filesi, halı saha filesi, inşaat
          filesi, merdiven boşluğu ve çatı-cephe uygulamalarıdır.
        </p>
        <p>
          File satışı tek başına yetmez. Ölçü yanlışsa kenar boş kalır; gergi
          zayıfsa file sarkar; kuş filesi yerine güvenlik filesi takılırsa
          güvercin yine girer. Bu yüzden her işe yerinde bakıyor, malzeme ve
          montajı o işe göre seçiyoruz.
        </p>
        <p>
          Melikgazi, Kocasinan, Talas ve çevre ilçelerde çalışıyoruz. Amaç uzun
          süre duran, temiz görünen ve gerçekten koruyan bir file bırakmaktır.
        </p>
      </div>
    </div>
  );
}
