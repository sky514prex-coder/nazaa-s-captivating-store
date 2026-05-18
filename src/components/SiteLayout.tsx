import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "2349169661874";
const waLink = (msg = "Hi Nazaa's Store, I'd like to place an order.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const nav = [
  { to: "/", label: "Home" },
  { to: "/phones", label: "iPhones" },
  { to: "/bags", label: "Bags" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { pathname } = useLocation();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-display text-2xl md:text-3xl font-bold text-primary">Nazaa's</span>
          <span className="font-display text-2xl md:text-3xl font-light text-foreground">Store</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`story-link text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors ${pathname === n.to ? "active text-foreground" : ""}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-ember text-primary-foreground text-sm font-medium hover:shadow-glow transition-shadow"
        >
          <MessageCircle className="w-4 h-4" />
          Order Now
        </a>
      </div>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-2xl text-primary">Nazaa's Store</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Premium iPhones, devices and designer bags — delivered with care from Owerri, Nigeria.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-primary transition-colors">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Owerri, Imo State, Nigeria</li>
            <li><a href={`tel:+${WHATSAPP}`} className="hover:text-primary">+234 916 966 1874</a></li>
            <li><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp Order</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nazaa's Store. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-glow"
      style={{ backgroundColor: "oklch(0.65 0.17 150)" }}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </motion.a>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export { waLink };
