import Link from "next/link"
import { ArrowLeft, Shield, Star } from "lucide-react"

const gearData: Record<
  string,
  {
    title: string
    description: string
    products: Array<{ name: string; price: string; rating: number; image: string }>
  }
> = {
  head: {
    title: "Protección para Cabeza",
    description: "Cascos y protectores diseñados para máxima seguridad en combate",
    products: [
      { name: "Casco de Boxeo Pro", price: "$89.99", rating: 5, image: "/boxing-headgear.jpg" },
      { name: "Protector Facial Karate", price: "$65.99", rating: 4, image: "/karate-face-guard.jpg" },
      { name: "Casco Taekwondo WTF", price: "$79.99", rating: 5, image: "/taekwondo-helmet.jpg" },
      { name: "Protector de Cabeza MMA", price: "$95.99", rating: 4, image: "/mma-headgear.jpg" },
    ],
  },
  torso: {
    title: "Protección para Torso",
    description: "Petos y protectores de pecho para entrenamientos intensos",
    products: [
      { name: "Peto Reversible Taekwondo", price: "$125.99", rating: 5, image: "/taekwondo-chest-protector.jpg" },
      { name: "Protector de Pecho Muay Thai", price: "$89.99", rating: 4, image: "/muay-thai-body-protector.jpg" },
      { name: "Chaleco de Entrenamiento", price: "$75.99", rating: 4, image: "/training-vest.jpg" },
      { name: "Protector de Costillas", price: "$69.99", rating: 5, image: "/rib-guard.jpg" },
    ],
  },
  "left-arm": {
    title: "Protección para Brazos",
    description: "Coderas y protectores de antebrazo para defensa y ataque",
    products: [
      { name: "Coderas Acolchadas", price: "$35.99", rating: 4, image: "/elbow-pads.jpg" },
      { name: "Protector de Antebrazo", price: "$45.99", rating: 5, image: "/forearm-guard.jpg" },
      { name: "Manga de Compresión", price: "$25.99", rating: 4, image: "/compression-sleeve.jpg" },
      { name: "Vendas de Brazo", price: "$19.99", rating: 4, image: "/arm-wraps.jpg" },
    ],
  },
  "right-arm": {
    title: "Protección para Brazos",
    description: "Coderas y protectores de antebrazo para defensa y ataque",
    products: [
      { name: "Coderas Acolchadas", price: "$35.99", rating: 4, image: "/elbow-pads.jpg" },
      { name: "Protector de Antebrazo", price: "$45.99", rating: 5, image: "/forearm-guard.jpg" },
      { name: "Manga de Compresión", price: "$25.99", rating: 4, image: "/compression-sleeve.jpg" },
      { name: "Vendas de Brazo", price: "$19.99", rating: 4, image: "/arm-wraps.jpg" },
    ],
  },
  "left-hand": {
    title: "Protección para Manos",
    description: "Guantes, vendas y protectores para tus manos",
    products: [
      { name: "Guantes de Boxeo 16oz", price: "$79.99", rating: 5, image: "/boxing-gloves.jpg" },
      { name: "Guantes MMA 4oz", price: "$65.99", rating: 5, image: "/mma-gloves.jpg" },
      { name: "Vendas de Mano 4.5m", price: "$15.99", rating: 4, image: "/hand-wraps.jpg" },
      { name: "Protector de Nudillos", price: "$29.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  "right-hand": {
    title: "Protección para Manos",
    description: "Guantes, vendas y protectores para tus manos",
    products: [
      { name: "Guantes de Boxeo 16oz", price: "$79.99", rating: 5, image: "/boxing-gloves.jpg" },
      { name: "Guantes MMA 4oz", price: "$65.99", rating: 5, image: "/mma-gloves.jpg" },
      { name: "Vendas de Mano 4.5m", price: "$15.99", rating: 4, image: "/hand-wraps.jpg" },
      { name: "Protector de Nudillos", price: "$29.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  "left-leg": {
    title: "Protección para Piernas",
    description: "Espinilleras y protectores de muslo para patadas potentes",
    products: [
      { name: "Espinilleras Muay Thai", price: "$55.99", rating: 5, image: "/placeholder.svg?height=300&width=300" },
      { name: "Protector de Muslo", price: "$45.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Rodilleras Acolchadas", price: "$35.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Vendas de Pierna", price: "$22.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  "right-leg": {
    title: "Protección para Piernas",
    description: "Espinilleras y protectores de muslo para patadas potentes",
    products: [
      { name: "Espinilleras Muay Thai", price: "$55.99", rating: 5, image: "/placeholder.svg?height=300&width=300" },
      { name: "Protector de Muslo", price: "$45.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Rodilleras Acolchadas", price: "$35.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Vendas de Pierna", price: "$22.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  "left-foot": {
    title: "Protección para Pies",
    description: "Protectores de pie y empeine para máxima movilidad",
    products: [
      { name: "Protector de Empeine", price: "$39.99", rating: 5, image: "/placeholder.svg?height=300&width=300" },
      { name: "Botines de Taekwondo", price: "$29.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Protector de Tobillo", price: "$25.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Calcetines de Compresión", price: "$18.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  "right-foot": {
    title: "Protección para Pies",
    description: "Protectores de pie y empeine para máxima movilidad",
    products: [
      { name: "Protector de Empeine", price: "$39.99", rating: 5, image: "/placeholder.svg?height=300&width=300" },
      { name: "Botines de Taekwondo", price: "$29.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Protector de Tobillo", price: "$25.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
      { name: "Calcetines de Compresión", price: "$18.99", rating: 4, image: "/placeholder.svg?height=300&width=300" },
    ],
  },
}

export default function GearPage({ params }: { params: { part: string } }) {
  const data = gearData[params.part] || gearData.head

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full">
            <Shield className="w-5 h-5 text-red-500" />
            <span className="text-zinc-400 font-medium">Equipo Especializado</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{data.description}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.products.map((product, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20"
            >
              <div className="aspect-square overflow-hidden bg-zinc-800">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? "fill-amber-500 text-amber-500" : "text-zinc-700"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-red-500">{product.price}</span>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
