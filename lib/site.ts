export const site = {
  name: "Kayseri File",
  legalName: "Kayseri File Güvenlik Sistemleri",
  tagline: "Kayseri'de güvenlik filesi montajı",
  description:
    "Kayseri'de balkon filesi, kuş filesi, halı saha filesi ve inşaat filesi montajı. Ücretsiz keşif, sağlam malzeme, hızlı ve temiz işçilik.",
  url: "https://kayserifile.vercel.app",
  city: "Kayseri",
  region: "Kayseri ve çevre iller",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE ?? "0554 964 67 41",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "905549646741",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@kayserifile.com",
  address: {
    street: "Osmangazi, 54. Sk. No:29",
    postalCode: "38100",
    district: "Kocasinan",
    city: "Kayseri",
    country: "TR",
  },
  get addressDisplay() {
    return `${this.address.street} ${this.address.postalCode} ${this.address.district}/${this.address.city}`;
  },
};

export function whatsappLink(message?: string) {
  if (!site.whatsapp) return "/iletisim";
  const text = encodeURIComponent(
    message ?? "Merhaba, güvenlik filesi için keşif ve fiyat bilgisi almak istiyorum.",
  );
  return `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${text}`;
}

export function telLink() {
  if (!site.phoneDisplay) return "/iletisim";
  return `tel:+90${site.phoneDisplay.replace(/\D/g, "").replace(/^0/, "")}`;
}

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  accent: string;
  points: string[];
  body: string[];
};

export const services: Service[] = [
  {
    slug: "balkon-filesi",
    title: "Balkon Güvenlik Filesi",
    short: "Çocuk, evcil hayvan ve eşya düşmesine karşı balkon koruması.",
    summary:
      "Kayseri'deki daire ve villalarda balkon korkuluklarına UV dayanımlı güvenlik filesi montajı.",
    accent: "#c9a227",
    points: [
      "Çocuk ve kedi güvenliği",
      "Şeffaf görünüm, manzarayı kapatmaz",
      "Paslanmaz bağlantı elemanları",
      "Villalar, siteler ve apartmanlar",
    ],
    body: [
      "Balkon filesi, düşme riskini kesmeden manzarayı ve ışığı koruyan en pratik çözümdür. Kayseri'de özellikle yüksek katlı sitelerde, çocuklu ailelerde ve evcil hayvanı olan evlerde en çok tercih edilen uygulamamızdır.",
      "Ölçü yerinde alınır, file gergin ve düzgün gerilir, kenarlar korkuluğa veya beton kenarına sağlam bağlantılarla sabitlenir. Kullanılan file UV katkılıdır; yaz güneşi ve kış soğuğunda çabuk yıpranmaz.",
      "Melikgazi, Kocasinan, Talas ve çevre ilçelerde aynı gün keşif, kısa sürede montaj planlıyoruz.",
    ],
  },
  {
    slug: "kus-filesi",
    title: "Kuş Filesi",
    short: "Balkon, teras ve avluya güvercin ve serçe girişini keser.",
    summary:
      "Kuş pisliği, tüy ve yuva sorununu durduran ince gözlü kuş filesi uygulaması.",
    accent: "#4f9d7a",
    points: [
      "Güvercin ve serçe engeli",
      "İnce göz, görünmez duruş",
      "Teras, balkon, otopark saçağı",
      "Temizlik ve hijyen koruması",
    ],
    body: [
      "Kuş filesi, balkon ve teraslara yuva yapan güvercinleri uzak tutmak için tasarlanır. Göz aralığı kuş filesinde daha incedir; güvenlik filesinden farklı bir üründür.",
      "Kayseri'de özellikle eski balkonlarda, iş yeri saçaklarında ve açık otoparklarda kuş pisliği hem sağlık hem görünüm sorunu yaratır. File doğru gerilmezse kuş yine içeri girer; bu yüzden ölçü ve gerginlik işin kendisidir.",
      "Keşifte kuşun giriş yönünü, rüzgârı ve mevcut korkuluk yapısını inceliyor; fileyi boşluksuz kapatıyoruz.",
    ],
  },
  {
    slug: "halisaha-filesi",
    title: "Halı Saha Filesi",
    short: "Topun sahadan çıkmasını önleyen yüksek dayanımlı spor filesi.",
    summary:
      "Halı saha, tenis kortu ve spor tesisi çevre filesi; direk, gerdirme ve kapı detayıyla.",
    accent: "#2f6b4f",
    points: [
      "Yüksek darbe dayanımı",
      "UV ve hava koşullarına uygun",
      "Direk ve gerdirme sistemi",
      "Saha çevresi ve kale arkası",
    ],
    body: [
      "Halı saha filesi, topun sahadan komşu parsele veya yola kaçmasını önler. Standart balkon filesinden daha kalın ip ve daha geniş gözle üretilir; darbe ve sürtünmeye göre seçilir.",
      "Kayseri ve çevresindeki halı sahalar, okul bahçeleri ve site spor alanlarında çevre filesi, kale arkası filesi ve tribün üstü uygulamaları yapıyoruz.",
      "Mevcut direkler sağlamsa file yenilenir; değilse direk, halat ve gerdirme elemanlarıyla komple sistem kurulur.",
    ],
  },
  {
    slug: "insaat-filesi",
    title: "İnşaat Filesi",
    short: "Şantiye çevre güvenliği, moloz ve malzeme düşme koruması.",
    summary:
      "İnşaat filesi ve moloz filesi ile şantiye cephesi, iskele ve çevre emniyeti.",
    accent: "#c45c26",
    points: [
      "Moloz ve malzeme düşme önlemi",
      "İskele ve cephe kapatma",
      "Şantiye çevre emniyeti",
      "Kısa süreli veya proje bazlı iş",
    ],
    body: [
      "İnşaat filesi hem iş güvenliği hem çevre düzeni içindir. Yoldan geçenleri, alt katları ve komşu parseli düşen malzemeden korur; şantiyeyi de toz ve moloz dağılmasından kısmen sarar.",
      "Kayseri'deki konut, villa ve ticari inşaatlarda iskele filesi, cephe filesi ve çevre filesi uyguluyoruz. File rengi ve göz aralığı proje ihtiyacına göre seçilir.",
      "Müteehhit ve şantiye şefleriyle ölçü, metraj ve montaj takvimini birlikte netleştiriyoruz.",
    ],
  },
  {
    slug: "merdiven-filesi",
    title: "Merdiven Boşluğu Filesi",
    short: "Apartman merdiven boşluğunda düşme ve eşya kaybını önler.",
    summary:
      "Site ve apartman merdiven kovasına yatay veya düşey güvenlik filesi.",
    accent: "#6b7c8a",
    points: [
      "Merdiven kovası kapatma",
      "Çocuk güvenliği",
      "Yatay veya düşey uygulama",
      "Site yönetimi onayına uygun işçilik",
    ],
    body: [
      "Merdiven boşluğu filesi, apartman kovasına düşme riskini kapatır. Özellikle çocuklu binalarda ve yüksek katlı sitelerde yönetimlerin en sık talep ettiği uygulamadır.",
      "Boşluğun genişliği, kat yüksekliği ve mevcut demir doğramaya göre yatay kat filesi veya düşey kapatma tercih edilir. Bağlantılar duvar dübeli veya demir konstrüksiyonla yapılır.",
      "Kayseri'deki sitelerde keşfi ücretsiz yapıp, yönetim ve kat maliklerine net teklif bırakıyoruz.",
    ],
  },
  {
    slug: "cati-filesi",
    title: "Çatı ve Cephe Filesi",
    short: "Çatı, avlu ve açık cephelerde kuş, top ve düşme koruması.",
    summary:
      "Çatı arası, ışık bacası, avlu üstü ve açık cephe file sistemleri.",
    accent: "#8a6a3d",
    points: [
      "Avlu ve ışık bacası kapatma",
      "Çatı kuş engeli",
      "Cephe düşme koruması",
      "Özel ölçü ve gerdirme",
    ],
    body: [
      "Çatı ve cephe filesi, standart balkon işinden daha özel ölçü ister. Rüzgâr yükü, erişim ve ankraj noktaları keşifte belirlenir.",
      "Kayseri'de avlu üstü kapatma, çatı kuş filesi ve açık cephe koruma işlerinde fileyi hem gergin hem sökülebilir bakıma uygun kuruyoruz.",
      "Yüksek işlerde güvenlik önlemleri alınır; montaj ekibi emniyet kemeri ve uygun ekipmanla çalışır.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export const reasons = [
  {
    title: "Yerinde keşif",
    text: "Kayseri içi keşif ücretsizdir. Ölçü, malzeme ve montaj yöntemi yerinde netleşir; tahminle fiyat vermeyiz.",
  },
  {
    title: "Doğru file, doğru gergi",
    text: "Balkon, kuş, saha ve inşaat filesi aynı ürün değildir. İşi ihtiyaca göre seçiyor, boşluksuz geriyoruz.",
  },
  {
    title: "Temiz ve hızlı montaj",
    text: "Bağlantılar düzgün, kenarlar gerilmiş, ev ve şantiye iş bitince toplanmış teslim edilir.",
  },
  {
    title: "Yerel ekip",
    text: "Kayseri merkezli çalışıyoruz. Servis, ek file veya sök-tak gerektiğinde uzakta bir firma aramazsınız.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Keşif ve ölçü",
    text: "WhatsApp veya telefonla ulaşın. Adres ve fotoğraf yeterli; çoğu işte aynı gün yerinde bakıyoruz.",
  },
  {
    n: "02",
    title: "Net teklif",
    text: "File tipi, metrekaresi, bağlantı şekli ve işçilik yazılı teklifte durur. Sürpriz kalem yok.",
  },
  {
    n: "03",
    title: "Montaj",
    text: "Randevu günü ekip gelir, fileyi gerer, kenarları sabitler. Çoğu balkon işi birkaç saatte biter.",
  },
  {
    n: "04",
    title: "Teslim",
    text: "Gerginlik ve bağlantılar birlikte kontrol edilir. Bakım ve kullanım kısaca anlatılır.",
  },
];

export const districts = [
  "Melikgazi",
  "Kocasinan",
  "Talas",
  "Hacılar",
  "İncesu",
  "Develi",
  "Yahyalı",
  "Bünyan",
  "Pınarbaşı",
  "Tomarza",
  "Yeşilhisar",
  "Sarıoğlan",
];

export const faqs = [
  {
    q: "Keşif ücretli mi?",
    a: "Kayseri merkez ve yakın ilçelerde keşif ücretsizdir. Uzak ilçe veya çevre il işlerinde yol durumu keşifte konuşulur.",
  },
  {
    q: "Balkon filesi manzarayı kapatır mı?",
    a: "Hayır. Güvenlik filesi ince ip ve geniş gözlüdür; ışığı ve manzarayı büyük ölçüde açık bırakır. Asıl işi düşmeyi önlemektir.",
  },
  {
    q: "Kuş filesi ile balkon filesi aynı mı?",
    a: "Değildir. Kuş filesinin gözü daha incedir; güvercin ve serçeyi keser. Balkon güvenlik filesi düşme koruması içindir. Keşifte hangisinin gerektiğine birlikte karar veririz.",
  },
  {
    q: "File ne kadar dayanır?",
    a: "UV katkılı file doğru gerilip kenarları sağlam bağlanırsa yıllarca durur. Kayseri'nin yaz güneşi ve kış rüzgârı malzeme seçiminde dikkate alınır.",
  },
  {
    q: "Çocuk ve kedi için uygun mu?",
    a: "Evet. Balkon ve merdiven boşluğu filesi tam da bu risk için takılır. Göz aralığı ve gerginlik evdeki ihtiyaca göre ayarlanır.",
  },
  {
    q: "Halı saha ve inşaat işi de yapıyor musunuz?",
    a: "Evet. Spor tesisi çevre filesi, kale arkası, şantiye cephe ve moloz filesi proje bazlı uygulanır.",
  },
];
