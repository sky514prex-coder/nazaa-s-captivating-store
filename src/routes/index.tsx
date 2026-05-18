import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { SiteLayout, waLink } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-iphones.jpg";
import bagsImg from "@/assets/hero-bags.jpg";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nazaa's Store — Premium iPhones, Devices in Ibadan" },
      { name: "description", content: "Premium iPhones, devices & designer bags from Nazaa's Store, Owerri Nigeria. View catalog or order on WhatsApp." },
      { property: "og:title", content: "Nazaa's Store — Premium iPhones & Designer Bags" },
      { property: "og:description", content: "Premium iPhones and designer bags delivered with care from Owerri, Nigeria." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  ),
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="relative mx-2 md:mx-6 mt-2 rounded-2xl overflow-hidden min-h-[80vh] md:min-h-[88vh] flex items-center"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent md:from-background/70 md:via-background/20" />
          <div className="absolute bottom-0 inset-x-0 h-48" style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.72 0.18 45 / 0.35) 50%, oklch(0.78 0.13 80 / 0.45) 100%)", clipPath: "polygon(0 60%, 100% 30%, 100% 100%, 0% 100%)" }} />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block" />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-center md:text-right"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/40 backdrop-blur border border-border/50 text-xs text-accent mb-6"
              >
                <Sparkles className="w-3 h-3" /> Trusted in Owerri, Nigeria
              </motion.div>
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95]">
                Nazaa's <span className="block">Store</span>
              </h1>
              <p className="mt-4 font-display text-2xl md:text-4xl text-gradient-ember italic">
                Premium iPhones, Devices &amp; Bags
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                Authentic. Curated. Delivered with care from Owerri.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-end"
              >
                <Link
                  to="/phones"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-background/60 backdrop-blur border border-border text-foreground font-medium hover:bg-background/80 transition"
                >
                  View Catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-ember text-primary-foreground font-medium hover:shadow-glow transition-shadow"
                >
                  <Play className="w-4 h-4 fill-current" /> Order on WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Shop</p>
          <h2 className="font-display text-4xl md:text-6xl mt-2">Two worlds. <span className="text-gradient-ember italic">One store.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { to: "/phones" as const, img: heroImg, title: "iPhones & Devices", sub: "Latest models, sealed & pre-owned" },
            { to: "/bags" as const, img: bagsImg, title: "Designer Bags", sub: "Handpicked, premium leather" },
          ].map((c, i) => (
            <motion.div
              key={c.to}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={c.to}
                className="group relative block rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[16/11]"
              >
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">{c.title}</h3>
                  <p className="text-muted-foreground mt-1">{c.sub}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-accent group-hover:gap-4 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Featured</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">In stock now</h2>
          </div>
          <Link to="/phones" className="story-link text-sm text-muted-foreground">See all</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { img: phone1, name: "iPhone 15 Pro Max", price: "₦1,650,000" },
            { img: phone2, name: "iPhone 14 Pro", price: "₦1,080,000" },
            { img: bag1, name: "Cream Tote Bag", price: "₦95,000" },
            { img: bag2, name: "Noir Shoulder Bag", price: "₦82,000" },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground text-sm md:text-base">{p.name}</h3>
                <p className="text-primary mt-1 font-display">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden bg-gradient-ember text-primary-foreground"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">Ready to order?</h2>
              <p className="mt-3 opacity-90 max-w-md">
                Reach us instantly on WhatsApp. Same-day delivery within Owerri.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background text-foreground font-medium hover:scale-105 transition-transform"
              >
                <Play className="w-4 h-4 fill-current" /> WhatsApp Us
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary-foreground/40 font-medium hover:bg-background/10 transition">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
