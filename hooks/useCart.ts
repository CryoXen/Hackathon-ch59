"use client"
import { useState, useEffect } from "react"

export function useCart() {
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) {
      try {
        setCart(JSON.parse(stored))
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id)
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  return { cart, addToCart, removeFromCart, clearCart }
}
