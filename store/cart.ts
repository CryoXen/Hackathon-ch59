"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartItem = {
  name: string
  price: string
  quantity: number
}

type CartStore = {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (name: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((p) => p.name === item.name)
          if (existing) {
            return {
              cart: state.cart.map((p) =>
                p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p
              ),
            }
          }
          return {
            cart: [...state.cart, { ...item, quantity: 1 }],
          }
        }),
      removeFromCart: (name) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.name !== name),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage" }
  )
)
