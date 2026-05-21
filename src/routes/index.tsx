import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import { SiteLayout, waLink } from "@/components/SiteLayout";
import { OrderDialog } from "@/components/OrderDialog";
import heroImg from "@/assets/hero-iphones.jpg";
import bagsImg from "@/assets/hero-bags.jpg";
import phone1 from "@/assets/phone-1.jpg";
import phone2 from "@/assets/phone-2.jpg";
import bag1 from "@/assets/bag-1.jpg";
import bag2 from "@/assets/bag-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nazaa's Store — Premium iPhones, Devices in Owerri" },
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
        <div className="relative mx-2 md:mx-6 mt-2 rounded-3xl overflow-hidden min-h-[78vh] md:min-h-[86vh] flex items-center bg-card">
          <img src={heroImg} alt="Premium smartphones at Nazaa's Store" className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/70 md:via-background/40 to-transparent" />
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 1, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur border border-border/60 text-xs text-accent mb-6"
              >
                <Sparkles className="w-3 h-3" /> Trusted in Owerri, Nigeria
              </motion.div>
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95]">
                Nazaa's <span className="block text-gradient-ember italic">Store</span>
              </h1>
              <p className="mt-5 text-xl md:text-2xl text-foreground/90 font-light">
                Authentic iPhones &amp; designer bags — delivered with care from Owerri.
              </p>
              <p className="mt-2 text-base text-muted-foreground max-w-lg">
                Place your order in seconds. We'll confirm and dispatch on WhatsApp.
              </p>
              <motion.div
                initial={{ opacity: 1, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <OrderDialog
                  triggerClassName="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-ember text-primary-foreground font-medium hover:shadow-glow transition-shadow"
                  triggerLabel="Place Order"
                />
                <Link
                  to="/phones"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-background/60 backdrop-blur border border-border text-foreground font-medium hover:bg-background/80 transition"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
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
          viewport={{ once: true, amount: 0.2 }}
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
              viewport={{ once: true, amount: 0.15 }}
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
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-medium text-foreground text-sm md:text-base">{p.name}</h3>
                <p className="text-primary font-display">{p.price}</p>
                <div className="mt-auto pt-2">
                  <OrderDialog product={p.name} price={p.price} triggerClassName="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-gradient-ember text-primary-foreground text-xs font-medium hover:shadow-glow transition" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
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
              <OrderDialog
                triggerClassName="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background text-foreground font-medium hover:scale-105 transition-transform"
                triggerLabel="Place Order"
              />
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary-foreground/40 font-medium hover:bg-background/10 transition"
              >
                <ShoppingBag className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
