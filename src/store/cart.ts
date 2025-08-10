import { create } from "zustand";
import currency from "currency.js";

export type CartItem = {
  id: string;
  name: string;
  priceMinor: number; // store minor units (e.g., cents)
  quantity: number;
  barcode?: string;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  setQuantity: (id: string, quantity: number) => void;
  subtotalMinor: () => number;
  totalItems: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item, quantity = 1) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity }] };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  clear: () => set({ items: [] }),
  setQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),
  subtotalMinor: () =>
    get().items.reduce((acc, item) => acc + item.priceMinor * item.quantity, 0),
  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
}));

export function formatMinorToMoney(
  minor: number,
  currencyCode: string = "USD"
) {
  return currency(minor, {
    fromCents: true,
    symbol: currencyCode + " ",
  }).format();
}
