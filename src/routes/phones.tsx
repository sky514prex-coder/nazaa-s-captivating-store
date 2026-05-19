import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/SiteLayout";
import { OrderDialog } from "@/components/OrderDialog";
import { supabase, type Product } from "@/lib/supabase";
import { imageMap } from "@/lib/image-map";
import hero from "@/assets/hero-iphones.jpg";
import { useState, useEffect } from "react";

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

function PhonesPage() {
  const [phones, setPhones] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .eq("category", "phone")
      .eq("in_stock", true)
      .order("sort_order")
      .then(({ data, error }) => {
        if (data) setPhones(data as Product[]);
        if (error) console.error("Failed to load phones:", error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Collection</p>
          <h1 className="font-display text-5xl md:text-7xl mt-3">iPhones <span className="text-gradient-ember italic">& Devices</span></h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Sealed and pre-owned iPhones, carefully tested and warranted. Tap any device to order on WhatsApp.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-card border border-border flex flex-col animate-pulse">
                <div className="aspect-square bg-muted" />
                <div className="p-5 flex flex-col gap-3">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-9 bg-muted rounded-full w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phones.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all flex flex-col"
              >
                <div className="aspect-square overflow-hidden relative bg-white">
                  <img
                    src={imageMap[p.image_key] ?? imageMap["phone-1"]}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.spec}</p>
                    <p className="text-primary font-display text-lg mt-2">{p.price}</p>
                  </div>
                  <div className="mt-auto pt-2">
                    <OrderDialog
                      product={`${p.name} (${p.spec})`}
                      price={p.price}
                      triggerClassName="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-ember text-primary-foreground text-sm font-medium hover:shadow-glow transition"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
