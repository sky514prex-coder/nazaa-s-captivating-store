import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/SiteLayout";
import { OrderDialog } from "@/components/OrderDialog";
import { supabase, type Product } from "@/lib/supabase";
import { imageMap } from "@/lib/image-map";
import hero from "@/assets/hero-bags.jpg";
import { useState, useEffect } from "react";

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

function BagsPage() {
  const [bags, setBags] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("products")
      .select("*")
      .eq("category", "bag")
      .eq("in_stock", true)
      .order("sort_order")
      .then(({ data, error }) => {
        if (data) setBags(data as Product[]);
        if (error) console.error("Failed to load bags:", error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="mx-2 md:mx-6 rounded-2xl overflow-hidden relative min-h-[50vh] flex items-end"
          style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-8 md:px-14 pb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Collection</p>
            <h1 className="font-display text-5xl md:text-7xl mt-3">Designer <span className="text-gradient-ember italic">Bags</span></h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl">Premium leather, considered silhouettes — each piece curated by Nazaa.</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16">
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-card border border-border flex flex-col animate-pulse">
                <div className="aspect-square bg-muted" />
                <div className="p-4 flex flex-col gap-3">
                  <div className="h-5 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-8 bg-muted rounded-full w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bags.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/60 transition-all flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-white">
                  <img
                    src={imageMap[b.image_key] ?? imageMap["bag-1"]}
                    alt={b.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-foreground">{b.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{b.spec}</p>
                    <p className="text-accent font-display mt-1.5">{b.price}</p>
                  </div>
                  <div className="mt-auto pt-1">
                    <OrderDialog
                      product={`${b.name} (${b.spec})`}
                      price={b.price}
                      triggerClassName="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-medium hover:opacity-90 transition"
                      triggerLabel="Place Order"
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
