"use client" // necesitamos client-side porque usamos localStorage

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // leer carrito desde localStorage al montar el componente
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <h1 className="text-4xl font-bold mb-6">🛒 Tu Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-zinc-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-red-600 font-bold">{item.price}</p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl"
        >
          Vaciar Carrito
        </button>
      )}
    </div>
  );
}
