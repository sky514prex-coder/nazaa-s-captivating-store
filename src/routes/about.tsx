import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, Truck, Heart, Award } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nazaa's Store" },
      { name: "description", content: "Nazaa's Store: trusted source for premium iPhones and designer bags in Owerri, Nigeria." },
      { property: "og:title", content: "About Nazaa's Store" },
      { property: "og:description", content: "Our story — premium iPhones and bags from Owerri, Nigeria." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <AboutPage />
    </SiteLayout>
  ),
});

const values = [
  { icon: ShieldCheck, title: "100% Authentic", desc: "Every device and bag is verified before it reaches you." },
  { icon: Truck, title: "Fast Delivery", desc: "Same-day delivery within Owerri, nationwide shipping." },
  { icon: Heart, title: "Customer First", desc: "We treat every order like it's our own." },
  { icon: Award, title: "Curated Quality", desc: "Only models and pieces we'd buy ourselves." },
];

function AboutPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-16 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-[0.3em] text-accent">Our Story</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl mt-4"
        >
          Built on <span className="text-gradient-ember italic">trust</span>, run from <span className="text-gradient-ember italic">Owerri</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Nazaa's Store started with a simple idea — make premium iPhones and designer bags accessible to people in
          Imo State and across Nigeria, without compromise. Today we serve hundreds of happy customers who keep
          coming back, and who keep telling their friends.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-ember flex items-center justify-center text-primary-foreground mb-4">
              <v.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl">{v.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-32">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { n: "500+", l: "Happy customers" },
            { n: "4+ yrs", l: "Trusted in Owerri" },
            { n: "100%", l: "Authentic products" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-6xl md:text-7xl text-gradient-ember">{s.n}</p>
              <p className="text-muted-foreground mt-2">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mt-32 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Visit us, or chat on WhatsApp.</h2>
        <p className="text-muted-foreground mt-4">We'd love to help you find your next device or bag.</p>
        <Link to="/contact" className="inline-flex mt-8 px-7 py-3.5 rounded-full bg-gradient-ember text-primary-foreground font-medium hover:shadow-glow transition">
          Get in touch
        </Link>
      </section>
    </>
  );
}
