import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import logoAsset from "@/assets/abahsinergi-logo.asset.json";
import svcContractor from "@/assets/service-contractor.jpg";
import svcRetail from "@/assets/service-retail.jpg";
import svcSocial from "@/assets/service-social.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AbahSinergi — Sinergi Membangun, Melayani dengan Ketulusan" },
      { name: "description", content: "AbahSinergi Holding Company: TB. Abah Material, pengembang properti & perumahan (Ruman House), serta layanan sosial pemakaman Muslim di Cinangka-Sawangan." },
      { property: "og:title", content: "AbahSinergi Holding Company" },
      { property: "og:description", content: "Material bangunan, properti & perumahan, dan layanan sosial dalam satu payung sinergi." },
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
    title: "TB. Abah Material",
    desc: "Mitra utama pembangunan dengan bahan bangunan berkualitas tinggi, stok yang tepat, dan layanan pengiriman yang efisien serta bersahabat.",
    img: svcContractor,
    waMsg: "Halo, saya ingin menanyakan produk TB. Abah Material.",
    detail: "TB. Abah Material adalah mitra utama pembangunan Anda. Kami menyediakan bahan bangunan berkualitas tinggi — mulai dari semen, besi, keramik, cat, hingga perkakas dan material finishing — dengan ketepatan stok, harga bersahabat, dan layanan pengiriman yang efisien untuk mendukung kelancaran setiap proyek pelanggan kami.",
  },
  {
    title: "Properti & Perumahan — Ruman House",
    desc: "Mengelola aset properti dan mengembangkan hunian dengan standar kenyamanan, fungsionalitas, dan estetika modern yang terjangkau untuk keluarga.",
    img: svcRetail,
    waMsg: "Halo, saya tertarik dengan hunian Ruman House.",
    detail: "Lini Developer & Ruman House kami mengelola aset properti dan mengembangkan hunian modern dengan mengutamakan kenyamanan, fungsionalitas, dan estetika. Kami menciptakan ruang hidup yang nyaman dan terjangkau — tempat setiap keluarga dapat tumbuh dan membangun kenangan indah bersama.",
  },
  {
    title: "Layanan Sosial (CSR) — Pemakaman Muslim Gratis",
    desc: "Wujud tanggung jawab sosial kami: layanan pemakaman Muslim gratis dengan ambulance siaga dan dedikasi tulus untuk membantu warga di saat tersulit.",
    img: svcSocial,
    waMsg: "Assalamualaikum, saya membutuhkan bantuan layanan sosial pemakaman.",
    detail: "Sebagai wujud tanggung jawab sosial perusahaan, AbahSinergi menyelenggarakan layanan pemakaman Muslim secara gratis — sesuai syariat dan sunnah. Meliputi ambulance siaga, pemandian dan pengkafanan, pengantaran, hingga lahan pemakaman. Diberikan dengan ketulusan sebagai bentuk dedikasi kami membantu warga di saat-saat tersulit.",
  },
];

const WA_NUMBER = "6285715511853";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const portfolio = [
  { img: portfolio1, title: "Cluster Ruman House", category: "Perumahan" },
  { img: portfolio2, title: "TB. Abah Material — Gudang Cinangka", category: "Retail Material" },
  { img: portfolio3, title: "Rumah Tinggal Keluarga", category: "Hunian" },
];

function Index() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const active = activeService !== null ? services[activeService] : null;
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="AbahSinergi" className="h-14 w-auto sm:h-16" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-accent/60" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 px-4 py-24 text-primary-foreground sm:py-32 md:py-40">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> AbahSinergi Holding Company
          </span>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Sinergi Membangun, Melayani dengan Ketulusan.
          </h1>
          <p className="max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Mari bersinergi bersama kami. Apakah Anda sedang merencanakan pembangunan,
            mencari hunian yang nyaman, atau membutuhkan bantuan sosial? Kami hadir untuk
            memberikan solusi yang tepat bagi Anda.
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
              Payung Sinergi dari Cinangka-Sawangan
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Berawal dari semangat untuk melayani kebutuhan pembangunan di wilayah
              Cinangka-Sawangan, AbahSinergi hadir sebagai payung besar yang menyatukan
              lini bisnis material, pengembangan properti, dan tanggung jawab sosial.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Selama bertahun-tahun kami tumbuh bersama masyarakat dengan memegang teguh
              nilai kejujuran dan kualitas. Nama <strong className="text-foreground">"Abah"</strong> bukan sekadar identitas
              bisnis, melainkan janji kami untuk selalu memberikan pelayanan yang dekat,
              ramah, dan dapat diandalkan bagi setiap pelanggan, mitra, dan komunitas.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Visi</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Menjadi payung sinergi terpercaya yang membangun pondasi bisnis kokoh,
                menghadirkan hunian yang nyaman, dan menebar manfaat bagi sesama.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Misi</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>• Menyediakan material bangunan berkualitas dengan pelayanan yang bersahabat dan dapat diandalkan.</li>
                <li>• Mengembangkan hunian yang nyaman, fungsional, dan terjangkau bagi setiap keluarga.</li>
                <li>• Menjalankan tanggung jawab sosial secara tulus, termasuk layanan pemakaman Muslim gratis.</li>
                <li>• Menjunjung tinggi nilai kejujuran, kualitas, dan kedekatan dalam setiap sinergi yang kami jalin.</li>
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
              <article
                key={s.title}
                onClick={() => setActiveService(i)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
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
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setActiveService(i); }}
                      className="rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                    >
                      Selengkapnya
                    </button>
                    <a
                      href={waLink(s.waMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveService(null)}
              aria-label="Tutup"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
            >
              <X size={18} />
            </button>
            <div className="aspect-[16/9] overflow-hidden">
              <img src={active.img} alt={active.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Detail Layanan</p>
              <h3 className="mt-2 text-2xl font-black leading-tight">{active.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{active.detail}</p>
              <a
                href={waLink(active.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle size={18} /> Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

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
                <dd className="mt-1 text-primary-foreground/80">Jl. Abdul Wahab No.16, RT.03/RW.08, Cinangka, Kec. Sawangan, Kota Depok, Jawa Barat 16516</dd>
              </div>
              <div>
                <dt className="font-semibold text-accent">Telepon / WhatsApp</dt>
                <dd className="mt-1 text-primary-foreground/80">+62 857 1551 1853</dd>
              </div>
              <div>
                <dt className="font-semibold text-accent">Email</dt>
                <dd className="mt-1 text-primary-foreground/80">info@abahsinergi.co.id</dd>
              </div>
              <div>
                <dt className="font-semibold text-accent">Ambulance Siaga 24 Jam</dt>
                <dd className="mt-1 text-primary-foreground/80">+62 857 1551 1853</dd>
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
                  href={waLink("Halo, saya ingin berkonsultasi mengenai layanan AbahSinergi.")}
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
          <p>© {new Date().getFullYear()} AbahSinergi Holding Company. All rights reserved.</p>
          <p>Sinergi Membangun, Melayani dengan Ketulusan.</p>
        </div>
      </footer>
    </div>
  );
}
