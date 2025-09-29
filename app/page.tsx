import { InteractiveBody } from "@/components/interactive-body"
import { CategoryCard } from "@/components/category-card"
import { Flame, Shield, Trophy, Zap } from "lucide-react"

const categories = [
  {
    id: "karate",
    name: "Karate",
    description: "Arte marcial japonés enfocado en golpes precisos y disciplina",
    image: "/karate-martial-artist-white-gi.jpg",
    color: "from-red-600 to-black",
    textColor: "text-red-600",
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    description: "El arte de las ocho extremidades, boxeo tailandés tradicional",
    image: "/muay-thai-fighter-action-pose.jpg",
    color: "from-amber-500 to-red-600",
    textColor: "text-amber-500",
  },
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu",
    description: "Arte marcial brasileño especializado en lucha en el suelo",
    image: "/brazilian-jiu-jitsu-grappling.jpg",
    color: "from-blue-600 to-blue-900",
    textColor: "text-blue-500",
  },
  {
    id: "taekwondo",
    name: "Taekwondo",
    description: "Arte marcial coreano conocido por sus patadas espectaculares",
    image: "/taekwondo-high-kick-action.jpg",
    color: "from-blue-500 to-red-500",
    textColor: "text-blue-600",
  },
  {
    id: "boxing",
    name: "Boxing",
    description: "El noble arte del pugilismo, técnica y potencia en cada golpe",
    image: "/boxing-fighter-gloves-action.jpg",
    color: "from-red-700 to-yellow-600",
    textColor: "text-red-600",
  },
]

const features = [
  {
    icon: Shield,
    title: "Protección Garantizada",
    description: "Equipo certificado para máxima seguridad",
  },
  {
    icon: Zap,
    title: "Rendimiento Óptimo",
    description: "Diseñado para atletas de alto nivel",
  },
  {
    icon: Trophy,
    title: "Calidad Premium",
    description: "Materiales de primera calidad",
  },
  {
    icon: Flame,
    title: "Estilo Único",
    description: "Diseños exclusivos para cada disciplina",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/martial-arts-abstract-pattern.jpg')] opacity-10 bg-cover bg-center" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-sans text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 bg-clip-text text-transparent text-balance">
              WARRIOR GEAR
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto text-pretty leading-relaxed">
              Equípate como un verdadero guerrero. Encuentra el equipo perfecto para tu disciplina.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fade-in 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Interactive Body Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-white">
              Encuentra Equipo por Parte del Cuerpo
            </h2>
            <p className="text-center text-zinc-400 mb-12 text-lg leading-relaxed">
              Pasa el cursor sobre el cuerpo y haz clic en la zona que necesitas proteger
            </p>
            <InteractiveBody />
          </div>

          {/* Categories Grid */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-white">Explora por Disciplina</h2>
            <p className="text-center text-zinc-400 mb-16 text-lg leading-relaxed">
              Cada arte marcial tiene su propio estilo y equipo especializado
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
