"use client"
import { useCartStore } from "@/store/cart"
import { Trash, Plus, Minus } from "lucide-react"

export default function CartPage() {
  const { cart, removeFromCart, clearCart, addToCart } = useCartStore()

  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  )

  const decreaseQuantity = (name: string) => {
    const item = cart.find((p) => p.name === name)
    if (!item) return
    if (item.quantity === 1) {
      removeFromCart(name)
    } else {
      // Restamos 1 usando set del store
      useCartStore.setState({
        cart: cart.map((p) =>
          p.name === name ? { ...p, quantity: p.quantity - 1 } : p
        ),
      })
    }
  }

  return (
    <div className="min-h-screen bg-zinc-100 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900">Tu Carrito</h1>

        {cart.length === 0 ? (
          <p className="text-zinc-500">No hay productos en el carrito.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-zinc-200 pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border border-zinc-200"
                    />
                    <div>
                      <p className="font-bold text-lg text-zinc-900">{item.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decreaseQuantity(item.name)}
                          className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors text-white"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-zinc-900">{item.quantity}</span>
                        <button
                          onClick={() =>
                            addToCart({ name: item.name, price: item.price, image: item.image })
                          }
                          className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors text-white"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-red-600 font-bold mt-1">{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl font-bold text-zinc-900">
                Total: ${total.toFixed(2)}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="px-6 py-2 bg-red-100 text-red-600 rounded-xl font-bold hover:bg-red-200 transition-colors"
                >
                  Vaciar Carrito
                </button>
                <button
                  onClick={() => alert("Checkout aún no implementado")}
                  className="px-6 py-2 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}