// src/store/cartStore.ts
import { create, type StateCreator } from "zustand";
import type { Product } from "../types";

export type CartState = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: Product["id"]) => void;
  loadCart: () => void;
};

const CART_STORAGE_KEY = "cartItems";

const saveCartToLocalStorage = (cartItems: Product[]) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
};

const loadCartFromLocalStorage = (): Product[] => {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
};

export const createCartSlice: StateCreator<CartState> = (set) => ({
  items: loadCartFromLocalStorage(),

  addItem: (product) => {
    set((state) => {
      const productExists = state.items.some((item) => item.id === product.id);

      if (productExists) {
        alert("¡Este producto ya está en el carrito!");
        return state;
      }

      const updatedCart = [...state.items, product];
      saveCartToLocalStorage(updatedCart);
      alert("Producto añadido al carrito");
      return { items: updatedCart };
    });
  },

  removeItem: (id) => {
    set((state) => {
      const updatedCart = state.items.filter((item) => item.id !== id);
      saveCartToLocalStorage(updatedCart);
      alert("Producto eliminado del carrito");
      return { items: updatedCart };
    });
  },

  loadCart: () => {
    set({ items: loadCartFromLocalStorage() });
  },
});

export const useCartStore = create<CartState>()(
  createCartSlice
);
