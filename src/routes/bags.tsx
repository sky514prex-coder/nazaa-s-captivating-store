import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SiteLayout, waLink } from "@/components/SiteLayout";
import b1 from "@/assets/bag-1.jpg";
import b2 from "@/assets/bag-2.jpg";
import b3 from "@/assets/bag-3.jpg";
import b4 from "@/assets/bag-4.jpg";
import hero from "@/assets/hero-bags.jpg";

export const Route = createFileRoute("/bags")({
  head: () => ({
    meta: [
      { title: "Designer Bags — Nazaa's Store" },
      { name: "description", content: "Premium leather and designer bags handpicked for you. Available now in Owerri." },
      { property: "og:title", content: "Designer Bags — Nazaa's Store" },
      { property: "og:description", content: "Premium designer bags in Owerri, Nigeria." },
      { property: "og:image", content: hero },
    ],
  }),
  component: () => (
    <SiteLayout>
      <BagsPage />
    </SiteLayout>
  ),
});

const bags = [
  { img: b1, name: "Ivory Tote", spec: "Full grain leather", price: "₦95,000" },
  { img: b2, name: "Noir Shopper", spec: "Pebbled black leather", price: "₦82,000" },
  { img: b3, name: "Tan Crossbody", spec: "Smooth leather", price: "₦68,000" },
  { img: b4, name: "Ember Mini Flap", spec: "Compact evening bag", price: "₦55,000" },
  { img: b1, name: "Cream Carry-All", spec: "Daily essential", price: "₦88,000" },
  { img: b3, name: "Caramel Saddle", spec: "Limited stock", price: "₦72,000" },
];

function BagsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-2 md:mx-6 rounded-2xl overflow-hidden relative min-h-[50vh] flex items-end"
          style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-8 md:px-14 pb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Collection</p>
            <h1 className="font-display text-5xl md:text-7xl mt-3">Designer <span className="text-gradient-ember italic">Bags</span></h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl">Premium leather, considered silhouettes — each piece curated by Nazaa.</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bags.map((b, i) => (
            <motion.a
              key={i}
              href={waLink(`Hi Nazaa's Store, I'd like to order the ${b.name} bag — ${b.price}`)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/60 transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={b.img} alt={b.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-lg md:text-xl text-foreground">{b.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{b.spec}</p>
                  <p className="text-accent font-display mt-1.5">{b.price}</p>
                </div>
                <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
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
