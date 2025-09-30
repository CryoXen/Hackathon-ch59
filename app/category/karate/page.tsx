"use client"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/store/cart"


const products = [
  {
    name: "Gi Tradicional Blanco",
    price: "$436.99",
    rating: 5,
    image: "/white-karate-gi.jpg",
    category: "Uniformes",
  },
  {
    name: "Cinturón Negro Premium",
    price: "$662.53",
    rating: 5,
    image: "/black-karate-belt.jpg",
    category: "Accesorios",
  },
  {
    name: "Guantes de Kumite",
    price: "$291.00",
    rating: 4,
    image: "/karate-kumite-gloves.jpg",
    category: "Protección",
  },
  {
    name: "Protector Bucal",
    price: "$329.99",
    rating: 4,
    image: "/mouthguard.jpg",
    category: "Protección",
  },
  {
    name: "Makiwara de Entrenamiento",
    price: "$1359.99",
    rating: 5,
    image: "/makiwara-striking-post.jpg",
    category: "Equipamiento",
  },
  {
    name: "Protector de Pecho",
    price: "$840.99",
    rating: 4,
    image: "/karate-chest-protector.jpg",
    category: "Protección",
  },
]

export default function KaratePage() {
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50">
      {/* Hero Section - Karate Style: Clean, Traditional, Disciplined */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-red-950 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/karate-martial-artist-white-gi.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block px-6 py-2 bg-red-600 text-white font-bold rounded-full mb-6 text-sm tracking-wider">
              空手道 KARATE-DO
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">KARATE</h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed max-w-2xl">
              El camino de la mano vacía. Disciplina, precisión y respeto en cada movimiento.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-red-500 mb-1">1920</div>
                <div className="text-sm text-zinc-300">Fundación Moderna</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-red-500 mb-1">100M+</div>
                <div className="text-sm text-zinc-300">Practicantes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-red-500 mb-1">Japón</div>
                <div className="text-sm text-zinc-300">Origen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-black rounded-full blur-3xl opacity-30" />
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-zinc-900 mb-6">Filosofía del Karate</h2>
            <p className="text-lg text-zinc-700 leading-relaxed mb-12">
              El Karate no es solo un arte marcial, es un camino de vida que cultiva el carácter, la disciplina y el
              respeto. Cada técnica es una expresión de años de dedicación y perfeccionamiento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Disciplina", "Respeto", "Perfección"].map((value, index) => (
                <div
                  key={index}
                  className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-8 hover:border-red-600 transition-colors"
                >
                  <div className="text-6xl font-black text-red-600 mb-4">{index + 1}</div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{value}</h3>
                  <p className="text-zinc-600">Pilar fundamental del Karate-Do</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-zinc-900 mb-4">Equipo de Karate</h2>
            <p className="text-xl text-zinc-600">Equipamiento tradicional para el verdadero karateka</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-zinc-200 rounded-2xl overflow-hidden hover:border-red-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-zinc-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-red-600 mb-2 uppercase tracking-wider">{product.category}</div>
                  <h3 className="font-bold text-xl mb-3 text-zinc-900">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "fill-red-600 text-red-600" : "text-zinc-300"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-red-600">{product.price}</span>
                    <button
              onClick={() => addToCart(product)}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
            >
              <ShoppingCart className="w-4 h-4" />
              Agregar al carrito
            </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
