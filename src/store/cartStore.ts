import { create, type StateCreator } from "zustand";
import type { Product } from "../types";
import { toast } from "react-toastify";

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
        toast.warn("¡Este producto ya está en el carrito!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
        });
        return state;
      }

      const updatedCart = [...state.items, product];
      saveCartToLocalStorage(updatedCart);

      toast.success("Producto añadido al carrito", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return { items: updatedCart };
    });
  },

  removeItem: (id) => {
    set((state) => {
      const updatedCart = state.items.filter((item) => item.id !== id);
      saveCartToLocalStorage(updatedCart);
      toast.info("Producto eliminado del carrito", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return { items: updatedCart };
    });
  },

  loadCart: () => {
    set({ items: loadCartFromLocalStorage() });
  },
});

export const useCartStore = create<CartState>()(createCartSlice);
