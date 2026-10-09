import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";
import { calculateGST } from "@/lib/utils";

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  gst: number;
  total: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        const items = get().items;
        const existing = items.find((i) => i.variantSku === newItem.variantSku);
        if (existing) {
          set({
            items: items.map((i) =>
              i.variantSku === newItem.variantSku
                ? { ...i, quantity: i.quantity + newItem.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (sku) => {
        set({ items: get().items.filter((i) => i.variantSku !== sku) });
      },

      updateQuantity: (sku, quantity) => {
        if (quantity <= 0) {
          get().removeItem(sku);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.variantSku === sku ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      get itemCount() {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },

      get subtotal() {
        return get().items.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0);
      },

      get gst() {
        return calculateGST(get().subtotal).gst;
      },

      get total() {
        return calculateGST(get().subtotal).total;
      },
    }),
    {
      name: "sp-packwell-cart",
    }
  )
);
