import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { SiteLayout, waLink } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nazaa's Store" },
      { name: "description", content: "Contact Nazaa's Store. WhatsApp +234 916 966 1874. Owerri, Imo State, Nigeria." },
      { property: "og:title", content: "Contact Nazaa's Store" },
      { property: "og:description", content: "Reach us on WhatsApp +234 916 966 1874 — based in Owerri, Nigeria." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ContactPage />
    </SiteLayout>
  ),
});

function ContactPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Reach Us</p>
          <h1 className="font-display text-5xl md:text-7xl mt-3">Let's <span className="text-gradient-ember italic">talk</span>.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Fastest way to order is WhatsApp. We typically reply within a few minutes.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-8">
        <motion.a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-3xl p-10 bg-gradient-ember text-primary-foreground"
        >
          <div className="absolute -bottom-12 -right-12 w-60 h-60 rounded-full bg-accent/30 blur-3xl" />
          <MessageCircle className="w-12 h-12" />
          <h2 className="font-display text-3xl md:text-4xl mt-5">Order on WhatsApp</h2>
          <p className="mt-2 opacity-90">Tap to start a chat — we'll guide you through.</p>
          <p className="mt-6 font-display text-2xl">+234 916 966 1874</p>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-card border border-border p-10 space-y-6"
        >
          {[
            { icon: Phone, label: "Call us", value: "+234 916 966 1874", href: "tel:+2349169661874" },
            { icon: MapPin, label: "Location", value: "Owerri, Imo State, Nigeria" },
            { icon: Clock, label: "Hours", value: "Mon – Sat · 9:00 AM – 7:00 PM" },
            { icon: Mail, label: "Email", value: "hello@nazaastore.ng", href: "mailto:hello@nazaastore.ng" },
          ].map((c, i) => {
            const Inner = (
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="text-foreground font-medium mt-1">{c.value}</p>
                </div>
              </div>
            );
            return (
              <motion.div key={c.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }}>
                {c.href ? <a href={c.href} className="block hover:opacity-80 transition-opacity">{Inner}</a> : Inner}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-border h-[360px]"
        >
          <iframe
            title="Nazaa's Store location — Owerri"
            src="https://www.google.com/maps?q=Owerri,Imo,Nigeria&output=embed"
            className="w-full h-full grayscale-[40%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </>
  );
}
