import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Zap } from "lucide-react"

const products = [
  {
    name: "Dobok Tradicional Blanco",
    price: "$1470.00",
    rating: 5,
    image: "/dobok.jpg",
    category: "Uniformes",
  },
  {
    name: "Peto Electrónico WTF",
    price: "$2250.99",
    rating: 5,
    image: "/taekwondo-chest-protector.jpg",
    category: "Protección",
  },
  {
    name: "Casco de Competición",
    price: "$799.99",
    rating: 5,
    image: "/taekwondo-helmet.jpg",
    category: "Protección",
  },
  {
    name: "Protector de Antebrazo",
    price: "$449.00",
    rating: 4,
    image: "/forearm-guard.jpg",
    category: "Protección",
  },
  {
    name: "Botines de Taekwondo",
    price: "$389.99",
    rating: 4,
    image: "/botas.jpg",
    category: "Calzado",
  },
  {
    name: "Escudo de Pateo",
    price: "$579.99",
    rating: 5,
    image: "/escudo.jpg",
    category: "Equipamiento",
  },
]

export default function TaekwondoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-red-50 to-yellow-50">
      {/* Hero Section - Taekwondo Style: Dynamic, Colorful, Korean */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-red-600 to-yellow-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/taekwondo-high-kick-action.jpg')] bg-cover bg-center" />
        </div>

        {/* Korean Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white text-blue-600 font-black rounded-full mb-6 text-sm tracking-wider">
              <Zap className="w-4 h-4" />
              태권도 TAEKWONDO
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">TAEKWONDO</h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-2xl">
              El camino del pie y el puño. Patadas espectaculares y velocidad explosiva.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-white mb-1">1940s</div>
                <div className="text-sm text-blue-100">Fundación Moderna</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-white mb-1">80M+</div>
                <div className="text-sm text-blue-100">Practicantes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-white mb-1">Corea</div>
                <div className="text-sm text-blue-100">Origen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30" />
      </section>

      {/* Tenets Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-zinc-900 mb-6">Los Cinco Principios</h2>
            <p className="text-lg text-zinc-700 leading-relaxed mb-12">
              El Taekwondo se basa en cinco principios fundamentales que guían tanto el entrenamiento físico como el
              desarrollo del carácter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { name: "Cortesía", color: "from-blue-500 to-blue-600" },
                { name: "Integridad", color: "from-red-500 to-red-600" },
                { name: "Perseverancia", color: "from-yellow-500 to-yellow-600" },
                { name: "Autocontrol", color: "from-blue-600 to-blue-700" },
                { name: "Espíritu", color: "from-red-600 to-red-700" },
              ].map((tenet, index) => (
                <div
                  key={index}
                  className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-6 hover:border-blue-600 transition-all hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tenet.color} rounded-full flex items-center justify-center text-white font-black text-2xl`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">{tenet.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-zinc-900 mb-4">Equipo de Taekwondo</h2>
            <p className="text-xl text-zinc-700">Equipamiento oficial para competición y entrenamiento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-blue-300 rounded-2xl overflow-hidden hover:border-red-500 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-red-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-zinc-900">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "fill-blue-600 text-blue-600" : "text-zinc-300"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white rounded-xl font-bold transition-all">
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
