"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Balkon güvenlik filesi");
  const [note, setNote] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      "Merhaba, güvenlik filesi keşfi istiyorum.",
      `Ad: ${name}`,
      `Telefon: ${phone}`,
      `Hizmet: ${service}`,
      note ? `Not: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = whatsappLink(message);
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="font-display text-2xl text-forest">Keşif formu</h2>
      <p className="mt-2 text-sm text-muted">
        Form WhatsApp üzerinden iletilir. Fotoğraf varsa sohbette ekleyebilirsiniz.
      </p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-1 text-sm">
          Adınız
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none ring-gold focus:ring-2"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Telefon
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none ring-gold focus:ring-2"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Hizmet
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none ring-gold focus:ring-2"
          >
            <option>Balkon güvenlik filesi</option>
            <option>Kuş filesi</option>
            <option>Halı saha filesi</option>
            <option>İnşaat filesi</option>
            <option>Merdiven boşluğu filesi</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Adres veya not
          <textarea
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none ring-gold focus:ring-2"
            placeholder="İlçe, site adı, balkon fotoğrafı göndereceğim..."
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-forest px-5 py-3 font-semibold text-paper transition hover:bg-moss"
        >
          {site.whatsapp ? "WhatsApp'tan gönder" : "İletişim sayfasına git"}
        </button>
      </div>
    </form>
  );
}
