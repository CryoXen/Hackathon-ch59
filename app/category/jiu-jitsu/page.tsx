"use client"

import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Waves } from "lucide-react"
import { useCart } from "@/hooks/useCart"

const products = [
  {
    name: "Gi Brasileño Azul A3",
    price: "$129.99",
    rating: 5,
    image: "/GiAzul.jpg",
    category: "Uniformes",
  },
  {
    name: "Cinturón de Grado",
    price: "$24.99",
    rating: 5,
    image: "/bjj-belt.jpg",
    category: "Accesorios",
  },
  {
    name: "Rashguard de Compresión",
    price: "$49.99",
    rating: 5,
    image: "/bjj-rashguard.jpg",
    category: "Uniformes",
  },
  {
    name: "Shorts de Grappling",
    price: "$39.99",
    rating: 4,
    image: "/grappling-shorts.jpg",
    category: "Uniformes",
  },
  {
    name: "Protector de Orejas",
    price: "$29.99",
    rating: 4,
    image: "/ear-guards.jpg",
    category: "Protección",
  },
  {
    name: "Dummy de Entrenamiento",
    price: "$189.99",
    rating: 5,
    image: "/grappling-dummy.jpg",
    category: "Equipamiento",
  },
]

export default function JiuJitsuPage() {
  const { addToCart } = useCart()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/brazilian-jiu-jitsu-grappling.jpg')] bg-cover bg-center" />
        </div>

        {/* Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="white" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500 text-white font-black rounded-full mb-6 text-sm tracking-wider">
              <Waves className="w-4 h-4" />
              JIU-JITSU BRASILEIRO
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">JIU-JITSU</h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed max-w-2xl">
              El arte suave. Técnica sobre fuerza, inteligencia sobre poder. Domina el suelo.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-blue-400 mb-1">1920s</div>
                <div className="text-sm text-blue-200">Desarrollo en Brasil</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-blue-400 mb-1">600+</div>
                <div className="text-sm text-blue-200">Técnicas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-blue-400 mb-1">Brasil</div>
                <div className="text-sm text-blue-200">Origen Moderno</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-20" />
      </section>

      {/* Belt System Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">Sistema de Cinturones</h2>
            <p className="text-lg text-blue-300 leading-relaxed mb-12">
              El camino del Jiu-Jitsu es largo y requiere dedicación. Cada cinturón representa años de entrenamiento y
              perfeccionamiento técnico.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[{ name: "Blanco", color: "bg-white" },
                { name: "Azul", color: "bg-blue-500" },
                { name: "Púrpura", color: "bg-purple-600" },
                { name: "Marrón", color: "bg-amber-800" },
                { name: "Negro", color: "bg-zinc-900" }].map((belt, index) => (
                <div
                  key={index}
                  className="bg-blue-800/50 backdrop-blur-sm border-2 border-blue-500 rounded-xl p-6 hover:bg-blue-700/50 transition-all hover:scale-105 min-w-[140px]"
                >
                  <div className={`w-full h-8 ${belt.color} rounded-lg mb-3 shadow-lg`} />
                  <h3 className="text-lg font-bold text-white">{belt.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Equipo de Jiu-Jitsu</h2>
            <p className="text-xl text-blue-400">Equipamiento profesional para grapplers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-blue-950 border-2 border-blue-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-900/50 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "fill-blue-500 text-blue-500" : "text-zinc-700"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-blue-500">{product.price}</span>
                    <button
                      onClick={() => addToCart({
                        id: `jiujitsu-${index}`,
                        name: product.name,
                        price: parseFloat(product.price.replace("$", ""))
                      })}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Agregar
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
