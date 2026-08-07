"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Product } from "@/types/product";
import type { CartItem } from "@/types/cart";

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

const CART_STORAGE_KEY = "lennix-cart";

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved cart
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Unable to load saved cart:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  }, [items, isLoaded]);

  const addToCart = (product: Product) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((current) =>
      current.filter(
        (item) => item.product.id !== id
      )
    );
  };

  const updateQuantity = (
    id: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),
    [items]
  );

  const cartTotal = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum +
          item.product.price * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}