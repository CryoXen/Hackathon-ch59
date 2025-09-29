import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, ShoppingCart, Award } from "lucide-react"

const products = [
  {
    name: "Guantes de Boxeo Pro 16oz",
    price: "$3000.99",
    rating: 5,
    image: "/boxing-gloves.jpg",
    category: "Guantes",
  },
  {
    name: "Casco de Entrenamiento",
    price: "$2899.99",
    rating: 5,
    image: "/boxing-headgear.jpg",
    category: "Protección",
  },
  {
    name: "Vendas de Mano Premium",
    price: "$349.00",
    rating: 5,
    image: "/hand-wraps.jpg",
    category: "Accesorios",
  },
  {
    name: "Saco de Boxeo 100lb",
    price: "$2468.99",
    rating: 5,
    image: "/heavy-bag.jpg",
    category: "Equipamiento",
  },
  {
    name: "Speed Ball Profesional",
    price: "$4250.99",
    rating: 4,
    image: "/speed-bag.jpg",
    category: "Equipamiento",
  },
  {
    name: "Protector Bucal Doble",
    price: "$90.99",
    rating: 4,
    image: "/mouthguard.jpg",
    category: "Protección",
  },
]

export default function BoxingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-red-950 to-zinc-950">
      {/* Hero Section - Boxing Style: Classic, Bold, Powerful */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-red-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/boxing-fighter-gloves-action.jpg')] bg-cover bg-center" />
        </div>

        {/* Ring Ropes Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-white" />
          <div className="absolute top-2/4 left-0 right-0 h-1 bg-white" />
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-white" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-black rounded-full mb-6 text-sm tracking-wider">
              <Award className="w-4 h-4" />
              THE SWEET SCIENCE
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">BOXING</h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed max-w-2xl">
              El noble arte del pugilismo. Donde la técnica, la velocidad y el corazón se encuentran en el ring.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-red-600/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-red-500 mb-1">3000+</div>
                <div className="text-sm text-zinc-300">Años de Historia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-red-600/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-red-500 mb-1">17</div>
                <div className="text-sm text-zinc-300">Categorías de Peso</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-red-600/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-red-500 mb-1">Global</div>
                <div className="text-sm text-zinc-300">Alcance Mundial</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-20" />
      </section>

      {/* Fundamentals Section */}
      <section className="py-20 bg-gradient-to-b from-red-950 to-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-white mb-6">Los Fundamentos</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-12">
              El boxeo es un arte que combina técnica refinada, acondicionamiento físico superior y estrategia mental.
              Domina los fundamentos para convertirte en un verdadero púgil.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Jab", icon: "👊" },
                { name: "Cross", icon: "💥" },
                { name: "Hook", icon: "🥊" },
                { name: "Uppercut", icon: "⬆️" },
              ].map((punch, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border-2 border-red-800 rounded-2xl p-8 hover:border-red-600 hover:bg-zinc-800 transition-all hover:scale-105"
                >
                  <div className="text-5xl mb-4">{punch.icon}</div>
                  <h3 className="text-xl font-bold text-white">{punch.name}</h3>
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
            <h2 className="text-5xl font-black text-white mb-4">Equipo de Boxeo</h2>
            <p className="text-xl text-red-500">Equipamiento profesional para campeones</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-zinc-900 border-2 border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600 hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-zinc-800 to-red-950">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-red-500 mb-2 uppercase tracking-wider">{product.category}</div>
                  <h3 className="font-bold text-xl mb-3 text-white">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "fill-yellow-500 text-yellow-500" : "text-zinc-700"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white rounded-xl font-bold transition-all">
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
