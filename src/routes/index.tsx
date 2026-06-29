import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import svcContractor from "@/assets/service-contractor.jpg";
import svcRetail from "@/assets/service-retail.jpg";
import svcSocial from "@/assets/service-social.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karya Bangun Sejahtera — Kontraktor, Material & Layanan Sosial" },
      { name: "description", content: "Perusahaan kontraktor terpercaya: jasa konstruksi & desain arsitektur, toko retail material bangunan, serta layanan sosial ambulance dan taman pemakaman umum." },
      { property: "og:title", content: "Karya Bangun Sejahtera" },
      { property: "og:description", content: "Kontraktor & desain arsitektur, retail material bangunan, dan layanan sosial pemakaman." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#kontak", label: "Kontak" },
];

const services = [
  {
    title: "Jasa Kontraktor & Desain Arsitektur",
    desc: "Layanan menyeluruh dari perencanaan, desain arsitektur, hingga pelaksanaan konstruksi bangunan rumah tinggal, komersial, dan industri dengan standar mutu tinggi.",
    img: svcContractor,
    waMsg: "Halo, saya tertarik dengan layanan Jasa Kontraktor & Desain Arsitektur.",
  },
  {
    title: "Toko Retail Material Bangunan",
    desc: "Menyediakan beragam kebutuhan alat dan material bangunan lengkap dengan harga kompetitif, kualitas terjamin, dan layanan pengiriman cepat.",
    img: svcRetail,
    waMsg: "Halo, saya ingin menanyakan ketersediaan material bangunan.",
  },
  {
    title: "Layanan Sosial — Ambulance & Pemakaman",
    desc: "Pengurusan jenazah dengan penyediaan ambulance siaga 24 jam dan Taman Pemakaman Umum yang asri sebagai bentuk kepedulian sosial perusahaan.",
    img: svcSocial,
    waMsg: "Halo, saya membutuhkan informasi layanan Ambulance & Pemakaman.",
  },
];

const WA_NUMBER = "6281234567890";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const portfolio = [
  { img: portfolio1, title: "Rumah Tinggal Modern", category: "Residensial" },
  { img: portfolio2, title: "Gedung Perkantoran", category: "Komersial" },
  { img: portfolio3, title: "Interior Cafe & Resto", category: "Interior" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-black">
              KBS
            </span>
            <span className="hidden text-sm font-bold tracking-wide sm:block">
              Karya Bangun Sejahtera
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontak"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tim kontraktor di lokasi proyek" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/30" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 px-4 py-24 text-primary-foreground sm:py-32 md:py-40">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Sejak 2005
          </span>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Membangun dengan Integritas, Melayani dengan Hati.
          </h1>
          <p className="max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Kontraktor profesional, penyedia material bangunan lengkap, dan mitra layanan
            sosial masyarakat — semua dalam satu perusahaan terpercaya.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#layanan" className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              Lihat Layanan
            </a>
            <a href="#portofolio" className="rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/15">
              Portofolio Kami
            </a>
          </div>
        </div>
      </section>

      {/* Tentang / Visi Misi */}
      <section id="tentang" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tentang Kami</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Lebih dari Sekadar Membangun Gedung
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Karya Bangun Sejahtera adalah perusahaan yang bergerak di bidang konstruksi,
              perdagangan material bangunan, dan kegiatan sosial kemasyarakatan. Kami percaya
              setiap bangunan yang kami kerjakan harus memberi nilai jangka panjang — bagi
              pemilik, lingkungan, dan masyarakat sekitarnya.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Visi</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Menjadi perusahaan konstruksi terpercaya yang memberikan kontribusi nyata
                bagi pembangunan dan kesejahteraan masyarakat.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Misi</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>• Memberikan layanan konstruksi dan desain berkualitas dengan standar profesional.</li>
                <li>• Menyediakan material bangunan yang lengkap, berkualitas, dan terjangkau.</li>
                <li>• Berkontribusi aktif dalam kegiatan sosial masyarakat secara berkelanjutan.</li>
                <li>• Membangun hubungan jangka panjang yang saling menguntungkan dengan mitra.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Produk & Layanan</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Tiga Pilar Layanan Kami</h2>
            <p className="mt-4 text-muted-foreground">
              Kami hadir untuk memenuhi kebutuhan pembangunan Anda — dari perencanaan hingga
              pelayanan sosial bagi masyarakat.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <a
                    href={waLink(s.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <MessageCircle size={16} /> Chat WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section id="portofolio" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Portofolio</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Pekerjaan yang Telah Kami Selesaikan</h2>
          </div>
          <p className="text-sm text-muted-foreground">100+ proyek selesai di seluruh Indonesia.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <figure key={p.title} className="group relative overflow-hidden rounded-xl">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</span>
                <p className="mt-1 text-lg font-bold">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 sm:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Kontak</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Mari Diskusikan Proyek Anda</h2>
            <p className="mt-4 text-primary-foreground/80">
              Tim kami siap membantu konsultasi gratis untuk kebutuhan konstruksi, material,
              maupun layanan ambulance & pemakaman.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-accent">Alamat Kantor</dt>
                <dd className="mt-1 text-primary-foreground/80">Jl. Raya Pembangunan No. 12, Jakarta Selatan, Indonesia</dd>
              </div>
              <div>
                <dt className="font-semibold text-accent">Telepon / WhatsApp</dt>
                <dd className="mt-1 text-primary-foreground/80">+62 812 3456 7890</dd>
              </div>
              <div>
                <dt className="font-semibold text-accent">Email</dt>
                <dd className="mt-1 text-primary-foreground/80">info@karyabangunsejahtera.co.id</dd>
              </div>
              <div>
                <dt className="font-semibold text-accent">Ambulance Siaga 24 Jam</dt>
                <dd className="mt-1 text-primary-foreground/80">+62 800 1111 9119</dd>
              </div>
            </dl>
          </div>
          <form
            className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8"
            onSubmit={(e) => { e.preventDefault(); alert("Terima kasih, pesan Anda telah dikirim."); }}
          >
            <div className="grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Nama Lengkap</span>
                <input required type="text" className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm outline-none placeholder:text-white/50 focus:border-accent" placeholder="Nama Anda" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Email</span>
                <input required type="email" className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm outline-none placeholder:text-white/50 focus:border-accent" placeholder="email@anda.com" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Layanan</span>
                <select className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm outline-none focus:border-accent">
                  <option className="bg-primary">Jasa Kontraktor & Arsitektur</option>
                  <option className="bg-primary">Material Bangunan</option>
                  <option className="bg-primary">Ambulance & Pemakaman</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Pesan</span>
                <textarea required rows={4} className="rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm outline-none placeholder:text-white/50 focus:border-accent" placeholder="Ceritakan kebutuhan Anda..." />
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Kirim Pesan
                </button>
                <a
                  href={waLink("Halo, saya ingin berkonsultasi mengenai layanan Karya Bangun Sejahtera.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle size={18} /> Chat WhatsApp
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Karya Bangun Sejahtera. All rights reserved.</p>
          <p>Membangun Negeri, Melayani Sesama.</p>
        </div>
      </footer>
    </div>
  );
}
