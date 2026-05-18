import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SiteLayout, waLink } from "@/components/SiteLayout";
import p1 from "@/assets/phone-1.jpg";
import p2 from "@/assets/phone-2.jpg";
import p3 from "@/assets/phone-3.jpg";
import p4 from "@/assets/phone-4.jpg";
import hero from "@/assets/hero-iphones.jpg";

export const Route = createFileRoute("/phones")({
  head: () => ({
    meta: [
      { title: "iPhones & Devices — Nazaa's Store" },
      { name: "description", content: "Shop authentic iPhones and devices at Nazaa's Store, Owerri. View prices and order on WhatsApp." },
      { property: "og:title", content: "iPhones & Devices — Nazaa's Store" },
      { property: "og:description", content: "Latest iPhones and devices available in Owerri, Nigeria." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PhonesPage />
    </SiteLayout>
  ),
});

const phones = [
  { img: p1, name: "iPhone 15 Pro Max", spec: "256GB · Natural Titanium", price: "₦1,650,000" },
  { img: p2, name: "iPhone 14 Pro", spec: "128GB · Deep Purple", price: "₦1,080,000" },
  { img: p3, name: "iPhone 13", spec: "128GB · Starlight", price: "₦620,000" },
  { img: p4, name: "iPhone 12", spec: "64GB · Midnight Blue", price: "₦450,000" },
  { img: p1, name: "iPhone 15", spec: "128GB · Black", price: "₦950,000" },
  { img: p2, name: "iPhone 14", spec: "256GB · Purple", price: "₦780,000" },
];

function PhonesPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Collection</p>
          <h1 className="font-display text-5xl md:text-7xl mt-3">iPhones <span className="text-gradient-ember italic">& Devices</span></h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Sealed and pre-owned iPhones, carefully tested and warranted. Tap any device to order on WhatsApp.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {phones.map((p, i) => (
            <motion.a
              key={i}
              href={waLink(`Hi Nazaa's Store, I'd like to order: ${p.name} (${p.spec}) — ${p.price}`)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -10 }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.spec}</p>
                  <p className="text-primary font-display text-lg mt-2">{p.price}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-gradient-ember flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
