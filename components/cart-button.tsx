"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";

export default function CartButton() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-zinc-800 rounded-lg transition-colors relative group"
      >
        {/* Icono del carrito */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart w-6 h-6 text-zinc-300 group-hover:text-white transition-colors"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>

        {/* Badge */}
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full text-xs flex items-center justify-center text-white font-bold">
            {cart.length}
          </span>
        )}
      </button>

      {/* Dropdown con productos */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg p-4 z-50">
          <h3 className="text-white font-bold mb-2">Tu carrito</h3>
          {cart.length === 0 ? (
            <p className="text-zinc-400 text-sm">No hay productos</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between text-white text-sm"
                >
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
