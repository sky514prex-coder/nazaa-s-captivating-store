import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  category: "phone" | "bag";
  spec: string;
  price: string;
  image_key: string;
  in_stock: boolean;
  sort_order: number;
  created_at: string;
};

export type Order = {
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  product_name: string;
  price?: string;
  quantity: number;
  notes?: string;
};
