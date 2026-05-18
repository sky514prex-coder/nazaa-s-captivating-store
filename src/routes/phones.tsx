import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { OrderDialog } from "@/components/OrderDialog";
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all flex flex-col"
            >
              <div className="aspect-square overflow-hidden relative bg-white">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.spec}</p>
                  <p className="text-primary font-display text-lg mt-2">{p.price}</p>
                </div>
                <div className="mt-auto pt-2">
                  <OrderDialog product={`${p.name} (${p.spec})`} price={p.price} triggerClassName="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-ember text-primary-foreground text-sm font-medium hover:shadow-glow transition" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
