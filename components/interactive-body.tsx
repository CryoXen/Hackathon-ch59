"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface BodyPart {
  id: string
  name: string
  path: string
  hoverColor: string
}


// Definimos los paths de cada parte individual
const bodyParts: BodyPart[] = [
  { id: "head", path: "M160 30 C160 10, 200 10, 200 30 C200 60, 160 60, 160 30 Z", name: "Cabeza", hoverColor: "#ef4444" },
  { id: "torso", path: "M160 70 L200 70 L210 150 L150 150 Z", name: "Torso", hoverColor: "#f59e0b" },
  { id: "left-arm", path: "M200 75 L230 80 L235 140 L210 135 Z", name: "Brazo Izquierdo", hoverColor: "#3b82f6" },
  { id: "right-arm", path: "M160 75 L130 80 L125 140 L150 135 Z", name: "Brazo Derecho", hoverColor: "#3b82f6" },
  { id: "left-hand", path: "M235 140 L240 160 L235 165 L230 160 L225 165 L220 160 L215 165 L210 155 Z", name: "Mano Izquierda", hoverColor: "#8b5cf6" },
  { id: "right-hand", path: "M125 140 L120 160 L125 165 L130 160 L135 165 L140 160 L145 165 L150 155 Z", name: "Mano Derecha", hoverColor: "#8b5cf6" },
  { id: "left-leg", path: "M180 150 L195 150 L200 240 L185 240 Z", name: "Pierna Izquierda", hoverColor: "#10b981" },
  { id: "right-leg", path: "M180 150 L165 150 L160 240 L175 240 Z", name: "Pierna Derecha", hoverColor: "#10b981" },
  { id: "left-foot", path: "M185 240 L200 240 L205 255 L180 255 Z", name: "Pie Izquierdo", hoverColor: "#ec4899" },
  { id: "right-foot", path: "M175 240 L160 240 L155 255 L180 255 Z", name: "Pie Derecho", hoverColor: "#ec4899" },
]

// Creamos las zonas principales
// Por medio del join uno los paths de las partes iguales que formaran solo una sección del cuerpo, es decir se vuelve una zona interactiva
const mainBodyParts: BodyPart[] = [
  { id: "head", name: "Cabeza", path: bodyParts.find(p => p.id === "head")?.path || "", hoverColor: "#ef4444" },
  { id: "torso", name: "Torso", path: bodyParts.find(p => p.id === "torso")?.path || "", hoverColor: "#f59e0b" },
  { id: "arms", name: "Brazos", path: bodyParts.filter(p => p.id === "left-arm" || p.id === "right-arm").map(p => p.path).join(" "), hoverColor: "#3b82f6" },
  { id: "hands", name: "Manos", path: bodyParts.filter(p => p.id === "left-hand" || p.id === "right-hand").map(p => p.path).join(" "), hoverColor: "#8b5cf6" },
  { id: "legs", name: "Piernas", path: bodyParts.filter(p => p.id === "left-leg" || p.id === "right-leg").map(p => p.path).join(" "), hoverColor: "#10b981" },
  { id: "feet", name: "Pies", path: bodyParts.filter(p => p.id === "left-foot" || p.id === "right-foot").map(p => p.path).join(" "), hoverColor: "#ec4899" },
]



export function InteractiveBody() {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)
  const router = useRouter()

  const handlePartClick = (partId: string) => {
    // Redirige a la página de equipamiento
    router.push(`/gear/${partId}`)
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
      {/* SVG Body */}
      <div className="relative">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700 shadow-2xl">
          <svg viewBox="0 0 360 280" className="w-full max-w-md h-auto">
            {mainBodyParts.map(part => (
              <path
                key={part.id}
                d={part.path}
                fill={hoveredPart === part.id ? part.hoverColor : "#3f3f46"}
                stroke={hoveredPart === part.id ? part.hoverColor : "#71717a"}
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-125"
                onMouseEnter={() => setHoveredPart(part.id)}
                onMouseLeave={() => setHoveredPart(null)}
                onClick={() => handlePartClick(part.id)}
              />
            ))}
          </svg>
        </div>

        {hoveredPart && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-full shadow-xl animate-fade-in">
            <p className="text-white font-bold text-lg whitespace-nowrap">
              {mainBodyParts.find(p => p.id === hoveredPart)?.name}
            </p>
          </div>
        )}
      </div>

      {/* Lista de zonas */}
      <div className="w-full lg:w-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-white">Protección por zona</h3>
          <div className="grid grid-cols-2 gap-3">
            {mainBodyParts.map(part => (
              <button
                key={part.id}
                onClick={() => handlePartClick(part.id)}
                onMouseEnter={() => setHoveredPart(part.id)}
                onMouseLeave={() => setHoveredPart(null)}
                className="group relative overflow-hidden px-4 py-3 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: hoveredPart === part.id ? `${part.hoverColor}20` : "#18181b" }}
              >
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {part.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

