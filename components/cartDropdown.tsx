"use client"
import { useState } from "react"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "@/hooks/useCart"

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-zinc-800 rounded-lg transition-colors relative"
      >
        <ShoppingCart className="w-6 h-6 text-zinc-300 hover:text-white transition-colors" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full text-xs flex items-center justify-center text-white font-bold">
          {cart.length}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-4 z-50">
          <h3 className="text-white font-bold mb-4">Carrito</h3>
          {cart.length === 0 ? (
            <p className="text-zinc-400 text-sm">No hay productos</p>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-zinc-400">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
            >
              Vaciar Carrito
            </button>
          )}
        </div>
      )}
    </div>
  )
}
