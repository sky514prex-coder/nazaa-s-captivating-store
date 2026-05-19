import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { supabase } from "@/lib/supabase";

const WHATSAPP = "2349169661874";

type Props = {
  product?: string;
  price?: string;
  trigger?: ReactNode;
  triggerClassName?: string;
  triggerLabel?: string;
};

export function OrderDialog({ product = "", price = "", trigger, triggerClassName, triggerLabel = "Place Order" }: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    product: product,
    quantity: "1",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Save order to Supabase
    try {
      await supabase.from("orders").insert({
        customer_name: form.name,
        customer_phone: form.phone,
        delivery_address: form.address,
        product_name: form.product,
        price: price || undefined,
        quantity: parseInt(form.quantity, 10),
        notes: form.notes || undefined,
        status: "pending",
      });
    } catch (err) {
      console.error("Order save error:", err);
      // Don't block WhatsApp redirect even if DB save fails
    }

    // Redirect to WhatsApp (existing behaviour preserved)
    const msg =
      `*New Order — Nazaa's Store*%0A` +
      `%0A👤 *Name:* ${encodeURIComponent(form.name)}` +
      `%0A📞 *Phone:* ${encodeURIComponent(form.phone)}` +
      `%0A📍 *Delivery Address:* ${encodeURIComponent(form.address)}` +
      `%0A🛍️ *Product:* ${encodeURIComponent(form.product)}` +
      (price ? `%0A💰 *Price:* ${encodeURIComponent(price)}` : "") +
      `%0A🔢 *Quantity:* ${encodeURIComponent(form.quantity)}` +
      (form.notes ? `%0A📝 *Notes:* ${encodeURIComponent(form.notes)}` : "");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            className={
              triggerClassName ??
              "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-ember text-primary-foreground text-sm font-medium hover:shadow-glow transition"
            }
          >
            <ShoppingBag className="w-4 h-4" />
            {triggerLabel}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Place Your Order</DialogTitle>
          <DialogDescription>
            Fill in your details. We'll send the order to Nazaa's Store on WhatsApp instantly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" required value={form.name} onChange={update("name")} placeholder="e.g. Chioma Okafor" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" required type="tel" value={form.phone} onChange={update("phone")} placeholder="0803 …" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="qty">Quantity</Label>
              <Input id="qty" required type="number" min={1} value={form.quantity} onChange={update("quantity")} />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="product">Product</Label>
            <Input id="product" required value={form.product} onChange={update("product")} placeholder="Which item?" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="address">Delivery address</Label>
            <Input id="address" required value={form.address} onChange={update("address")} placeholder="Street, area, city" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="notes">Notes (optional)</Label>
            <Textarea id="notes" value={form.notes} onChange={update("notes")} rows={2} placeholder="Color, storage, anything extra…" />
          </div>
          <DialogFooter className="mt-2">
            <Button type="submit" disabled={submitting} className="w-full bg-gradient-ember text-primary-foreground hover:opacity-90">
              <MessageCircle className="w-4 h-4 mr-2" />
              {submitting ? "Saving…" : "Send Order via WhatsApp"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
