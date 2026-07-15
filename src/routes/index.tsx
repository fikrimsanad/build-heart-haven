import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, X, HardHat, Palette, Users, ClipboardList, ShieldCheck, Wrench, FileText, Ambulance, HeartHandshake, Package, Truck, MapPin, Camera, Boxes, Tag, Smile, BadgeCheck, MessageSquare, ClipboardCheck, Wallet, PackageCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import logoAsset from "@/assets/abahsinergi-logo.asset.json";
import svcSocial from "@/assets/service-social.jpg";
import ambulanceSocial from "@/assets/ambulance-social.jpg.asset.json";
import tbMaterialCover from "@/assets/tb-material-cover.jpg.asset.json";
import contractorConstruction from "@/assets/contractor-construction.jpg.asset.json";
import brandMowilex from "@/assets/brands/mowilex.jpg.asset.json";
import brandNippon from "@/assets/brands/nippon.jpg.asset.json";
import brandWavin from "@/assets/brands/wavin.jpg.asset.json";
import brandBroco from "@/assets/brands/broco.jpg.asset.json";
import brandTigaRoda from "@/assets/brands/tigaroda.jpg.asset.json";
import brandJotun from "@/assets/brands/jotun.jpg.asset.json";
import brandSika from "@/assets/brands/sika.jpg.asset.json";
import brandSchneider from "@/assets/brands/schneider.jpg.asset.json";
import brandVinilon from "@/assets/brands/vinilon.jpg.asset.json";
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
    img: tbMaterialCover.url,
    waMsg: "Halo, saya ingin menanyakan produk TB. Abah Material.",
    detail: "TB. Abah Material adalah mitra utama pembangunan Anda. Kami menyediakan bahan bangunan berkualitas tinggi — mulai dari semen, besi, keramik, cat, hingga perkakas dan material finishing — dengan ketepatan stok, harga bersahabat, dan layanan pengiriman yang efisien untuk mendukung kelancaran setiap proyek pelanggan kami.",
    kind: "material" as const,
  },
  {
    title: "Kontraktor & Interior Bangunan",
    desc: "Mengelola aset properti dan mengembangkan hunian dengan standar kenyamanan, fungsionalitas, dan estetika modern yang terjangkau untuk keluarga.",
    img: contractorConstruction.url,
    waMsg: "Halo, saya tertarik dengan layanan Kontraktor & Interior Bangunan.",
    detail: "Lini Developer & Ruman House kami mengelola aset properti dan mengembangkan hunian modern dengan mengutamakan kenyamanan, fungsionalitas, dan estetika. Kami menciptakan ruang hidup yang nyaman dan terjangkau — tempat setiap keluarga dapat tumbuh dan membangun kenangan indah bersama.",
    kind: "contractor" as const,
  },
  {
    title: "Layanan Sosial (CSR) — Pemakaman Muslim Gratis",
    desc: "Wujud tanggung jawab sosial kami: layanan pemakaman Muslim gratis dengan ambulance siaga dan dedikasi tulus untuk membantu warga di saat tersulit.",
    img: ambulanceSocial.url,
    waMsg: "Assalamualaikum, saya membutuhkan bantuan layanan sosial pemakaman.",
    detail: "Sebagai wujud tanggung jawab sosial perusahaan, AbahSinergi menyelenggarakan layanan pemakaman Muslim secara gratis — sesuai syariat dan sunnah. Meliputi ambulance siaga, pemandian dan pengkafanan, pengantaran, hingga lahan pemakaman. Diberikan dengan ketulusan sebagai bentuk dedikasi kami membantu warga di saat-saat tersulit.",
    kind: "social" as const,
  },
];

const WA_NUMBER = "6285715511853";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const ADDRESS = "Jl. Abdul Wahab No.16, RT.03/RW.08, Cinangka, Kec. Sawangan, Kota Depok, Jawa Barat 16516";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-bold uppercase tracking-wider text-primary">{title}</h4>
      <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex gap-2"><span className="text-accent">•</span><span>{it}</span></li>
      ))}
    </ul>
  );
}

const brandPartners = [
  { name: "Nippon Paint", logo: brandNippon.url },
  { name: "Mowilex", logo: brandMowilex.url },
  { name: "Jotun", logo: brandJotun.url },
  { name: "Semen Tiga Roda", logo: brandTigaRoda.url },
  { name: "Sika", logo: brandSika.url },
  { name: "Pipa Wavin", logo: brandWavin.url },
  { name: "Vinilon", logo: brandVinilon.url },
  { name: "Broco", logo: brandBroco.url },
  { name: "Schneider Electric", logo: brandSchneider.url },
];

function ServiceDetailBody({ kind }: { kind: "material" | "contractor" | "social" }) {
  if (kind === "material") {
    return (
      <>
        <Section title="Kategori Produk">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { t: "Material Bahan Bangunan", d: "Semen, besi, bata, pasir, keramik, cat & finishing." },
              { t: "Alat Kelistrikan", d: "Kabel, saklar, stop kontak, lampu, MCB, dan aksesori." },
              { t: "Plumbing", d: "Pipa PVC, fitting, lem, kran, dan perlengkapan air bersih." },
              { t: "Sanitary", d: "Kloset, wastafel, shower, kran, dan perlengkapan kamar mandi." },
            ].map((c) => (
              <div key={c.t} className="rounded-lg border border-border bg-secondary/30 p-3">
                <p className="text-sm font-bold text-foreground">{c.t}</p>
                <p className="mt-1 text-xs">{c.d}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Brand Partner">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {brandPartners.map((b) => (
              <div key={b.name} className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-white p-3">
                <img src={b.logo} alt={b.name} className="h-12 w-full object-contain" loading="lazy" />
                <span className="text-center text-xs font-semibold text-foreground">{b.name}</span>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Keunggulan Retail">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { Icon: Boxes, t: "Stok Lengkap", d: "Selalu tersedia untuk kebutuhan harian proyek Anda." },
              { Icon: Tag, t: "Harga Bersahabat", d: "Langsung dari distributor resmi, hemat & pasti." },
              { Icon: Truck, t: "Pengiriman Cepat", d: "Antar ke area Cinangka-Sawangan & sekitarnya." },
              { Icon: Smile, t: "Pelayanan Ramah", d: "Konsultasi kebutuhan material dengan sabar." },
              { Icon: BadgeCheck, t: "Produk Original", d: "Bergaransi dari brand partner terpercaya." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-3 rounded-lg border border-border bg-secondary/30 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t}</p>
                  <p className="mt-0.5 text-xs">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Cara Belanja & Lokasi Toko">
          <ol className="relative ml-2 space-y-4 border-l-2 border-dashed border-accent/40 pl-6">
            {[
              { Icon: MessageSquare, t: "Hubungi Kami", d: "Datang langsung ke toko atau chat via WhatsApp." },
              { Icon: ClipboardCheck, t: "Sampaikan Kebutuhan", d: "Tim kami bantu list material & estimasi harga." },
              { Icon: Wallet, t: "Konfirmasi & Bayar", d: "Metode pembayaran tunai atau transfer bank." },
              { Icon: PackageCheck, t: "Terima Barang", d: "Diantar ke lokasi atau siap diambil di toko." },
            ].map(({ Icon, t, d }, i) => (
              <li key={t} className="relative">
                <span className="absolute -left-[34px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-background text-[11px] font-black text-accent shadow-sm">
                  {i + 1}
                </span>
                <div className="rounded-lg border border-border bg-secondary/30 p-3">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-accent" />
                    <p className="text-sm font-bold text-foreground">{t}</p>
                  </div>
                  <p className="mt-1 text-xs">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-3 rounded-lg border border-border bg-secondary/30 p-3">
            <p className="text-xs font-semibold text-foreground">Alamat Toko</p>
            <p className="mt-1 text-xs">{ADDRESS}</p>
          </div>
        </Section>
        <Section title="Testimoni Pelanggan">
          <div className="space-y-3">
            <blockquote className="rounded-lg border border-border bg-card p-3 text-xs italic">
              "Materialnya lengkap, harga bersaing, dan pengiriman selalu tepat waktu. Toko andalan proyek saya."
              <footer className="mt-2 not-italic text-[11px] font-semibold text-foreground">— Pak Rahmat, Kontraktor</footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card p-3 text-xs italic">
              "Pelayanannya ramah, sabar menjelaskan kebutuhan renovasi rumah saya. Recommended!"
              <footer className="mt-2 not-italic text-[11px] font-semibold text-foreground">— Ibu Sari, Warga Sawangan</footer>
            </blockquote>
          </div>
        </Section>
      </>
    );
  }

  if (kind === "contractor") {
    return (
      <>
        <Section title="Layanan & Keunggulan">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { Icon: HardHat, t: "Jasa Kontraktor", d: "Bangun rumah tinggal, ruko, & renovasi menyeluruh." },
              { Icon: Palette, t: "Desain Interior", d: "Konsep modern, fungsional, dan estetik sesuai gaya Anda." },
              { Icon: Users, t: "Tim Berpengalaman", d: "Tukang terlatih dengan pengawasan proyek terkontrol." },
              { Icon: ClipboardList, t: "Transparansi RAB", d: "Rincian biaya jelas & laporan progres harian." },
              { Icon: ShieldCheck, t: "Garansi Pengerjaan", d: "Jaminan kualitas hasil kerja untuk ketenangan Anda." },
              { Icon: Wrench, t: "Konsultasi Gratis", d: "Diskusi desain & kebutuhan proyek tanpa biaya." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-3 rounded-lg border border-border bg-secondary/30 p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t}</p>
                  <p className="mt-0.5 text-xs">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Portofolio">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { img: portfolio1, t: "Cluster Ruman House", d: "Hunian modern siap huni." },
              { img: portfolio3, t: "Rumah Tinggal Keluarga", d: "Renovasi hunian di Sawangan." },
              { img: portfolio2, t: "Interior Komersial", d: "Ruang retail & komersial." },
              { img: contractorConstruction.url, t: "Ruko 2 Lantai", d: "Pembangunan ruko di Cinangka." },
            ].map((p) => (
              <div key={p.t} className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-[4/3] w-full overflow-hidden bg-secondary/30">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-bold text-foreground">{p.t}</p>
                  <p className="mt-0.5 text-xs">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Testimoni">
          <blockquote className="rounded-lg border border-border bg-card p-3 text-xs italic">
            "Hasil pengerjaannya rapi dan sesuai timeline. Tim komunikatif dari awal desain hingga serah terima."
            <footer className="mt-2 not-italic text-[11px] font-semibold text-foreground">— Bapak Andi, Pemilik Rumah</footer>
          </blockquote>
        </Section>
      </>
    );
  }

  // social
  return (
    <>
      <Section title="Ringkasan & Layanan">
        <p>Layanan sosial pemulasaraan & pemakaman Muslim yang kami sediakan secara gratis dan tulus, meliputi:</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            { Icon: FileText, t: "Pengurusan Administrasi", d: "Bantuan dokumen & surat-surat kepengurusan." },
            { Icon: Ambulance, t: "Ambulans Siaga 24 Jam", d: "Armada siap merespons kapan pun dibutuhkan." },
            { Icon: HeartHandshake, t: "Pemulasaraan Jenazah", d: "Dimandikan & disholatkan sesuai syariat Islam." },
            { Icon: Package, t: "Kafan", d: "Perlengkapan kafan disediakan lengkap." },
            { Icon: Truck, t: "Transportasi Jenazah", d: "Pengantaran menuju lokasi pemakaman." },
            { Icon: MapPin, t: "Pemakaman", d: "Pendampingan proses pemakaman hingga selesai." },
            { Icon: Users, t: "Pendampingan Keluarga", d: "Empati & dukungan bagi keluarga yang berduka." },
            { Icon: Camera, t: "Dokumentasi Administrasi", d: "Pencatatan & dokumentasi seluruh proses." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex gap-3 rounded-lg border border-border bg-secondary/30 p-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{t}</p>
                <p className="mt-0.5 text-xs">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Kenapa Memilih Kami">
        <Bullets items={[
          "Gratis — bentuk tanggung jawab sosial perusahaan.",
          "Pelayanan tulus, cepat, dan sesuai syariat Islam.",
          "Tim berpengalaman & armada ambulans siaga 24 jam.",
          "Pendampingan penuh empati untuk keluarga.",
        ]} />
      </Section>
      <Section title="Alur Pelayanan">
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Hubungi kami via WhatsApp / telepon 24 jam.</li>
          <li>Tim menerima informasi & langsung meluncur dengan ambulans.</li>
          <li>Pemulasaraan jenazah sesuai syariat di lokasi/rumah duka.</li>
          <li>Pengantaran ke lokasi pemakaman.</li>
          <li>Pemakaman & pendampingan keluarga.</li>
        </ol>
      </Section>
    </>
  );
}

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
                      className="rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Selengkapnya
                    </button>
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
            className="relative flex max-h-[92vh] w-full max-w-[95vw] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl sm:max-w-[80vw] lg:max-w-[55vw]"
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
            <div className="relative h-48 shrink-0 overflow-hidden sm:h-64">
              <img src={active.img} alt={active.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-accent/60" />
              <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">Detail Layanan</p>
                  <h3 className="mt-1 text-2xl font-black leading-tight text-primary-foreground sm:text-3xl">{active.title}</h3>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <p className="text-sm text-muted-foreground leading-relaxed">{active.detail}</p>
              <ServiceDetailBody kind={active.kind} />
              <a
                href={waLink(active.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
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
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
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
