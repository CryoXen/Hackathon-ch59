"use client"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Flame } from "lucide-react"
import { useCartStore } from "@/store/cart"

const products = [
  {
    name: "Shorts Tradicionales Tailandeses",
    price: "$499.99",
    rating: 5,
    image: "/muay-thai-shorts.jpg",
    category: "Uniformes",
  },
  {
    name: "Guantes de Boxeo 16oz",
    price: "$299.99",
    rating: 5,
    image: "/boxing-gloves.jpg",
    category: "Guantes",
  },
  {
    name: "Espinilleras Premium",
    price: "$699.99",
    rating: 5,
    image: "/muay-thai-shin-guards.jpg",
    category: "Protección",
  },
  {
    name: "Vendas de Mano 4.5m",
HEAD
    price: "$249.99",

    price: "$255.99",

    rating: 4,
    image: "/hand-wraps.jpg",
    category: "Accesorios",
  },
  {
    name: "Pao de Entrenamiento",

    price: "$570..99",

    price: "$899.99",

    rating: 5,
    image: "/muay-thai-pads.jpg",
    category: "Equipamiento",
  },
  {
    name: "Protector de Cabeza",
    HEAD
    price: "$436.99",

    price: "$955.99",

    rating: 4,
    image: "/boxing-headgear.jpg",
    category: "Protección",
  },
]

export default function MuayThaiPage() {
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-red-50 to-amber-50">
      {/* Hero Section - Muay Thai Style: Bold, Energetic, Traditional Thai */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-amber-700 to-red-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/muay-thai-fighter-action-pose.jpg')] bg-cover bg-center" />
        </div>

        {/* Thai Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500 text-red-950 font-black rounded-full mb-6 text-sm tracking-wider">
              <Flame className="w-4 h-4" />
              มวยไทย MUAY THAI
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">MUAY THAI</h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed max-w-2xl">
              El arte de las ocho extremidades. Poder, velocidad y tradición tailandesa en cada golpe.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-amber-400 mb-1">2000+</div>
                <div className="text-sm text-amber-100">Años de Historia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-amber-400 mb-1">8</div>
                <div className="text-sm text-amber-100">Extremidades</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-amber-400 mb-1">Tailandia</div>
                <div className="text-sm text-amber-100">Origen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20" />
      </section>

      {/* Techniques Section */}
      <section className="py-20 bg-gradient-to-b from-red-900 to-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">Las Ocho Extremidades</h2>
            <p className="text-lg text-amber-200 leading-relaxed mb-12">
              El Muay Thai utiliza puños, codos, rodillas y piernas, convirtiéndolo en uno de los estilos de combate más
              completos y efectivos del mundo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Puños", "Codos", "Rodillas", "Piernas"].map((technique, index) => (
                <div
                  key={index}
                  className="bg-amber-500/20 backdrop-blur-sm border-2 border-amber-500 rounded-2xl p-6 hover:bg-amber-500/30 transition-all hover:scale-105"
                >
                  <div className="text-5xl font-black text-amber-400 mb-2">{index + 1}</div>
                  <h3 className="text-xl font-bold">{technique}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-red-900 mb-4">Equipo de Muay Thai</h2>
            <p className="text-xl text-amber-900">Equipamiento auténtico para guerreros tailandeses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-amber-300 rounded-2xl overflow-hidden hover:border-red-600 hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-100 to-red-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-amber-600 mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-red-900">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "fill-amber-500 text-amber-500" : "text-zinc-300"}`}
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
