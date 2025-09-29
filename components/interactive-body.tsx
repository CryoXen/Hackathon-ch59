"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface BodyPart {
  id: string
  name: string
  path: string
  hoverColor: string
}

const bodyParts: BodyPart[] = [
  {
    id: "head",
    name: "Cabeza",
    path: "M150 30 C150 15, 165 10, 180 10 C195 10, 210 15, 210 30 C210 45, 195 60, 180 60 C165 60, 150 45, 150 30 Z",
    hoverColor: "#ef4444",
  },
  { id: "torso", name: "Torso", path: "M160 70 L200 70 L210 150 L150 150 Z", hoverColor: "#f59e0b" },
  { id: "left-arm", name: "Brazo Izquierdo", path: "M200 75 L230 80 L235 140 L210 135 Z", hoverColor: "#3b82f6" },
  { id: "right-arm", name: "Brazo Derecho", path: "M160 75 L130 80 L125 140 L150 135 Z", hoverColor: "#3b82f6" },
  {
    id: "left-hand",
    name: "Mano Izquierda",
    path: "M235 140 L240 160 L235 165 L230 160 L225 165 L220 160 L215 165 L210 155 Z",
    hoverColor: "#8b5cf6",
  },
  {
    id: "right-hand",
    name: "Mano Derecha",
    path: "M125 140 L120 160 L125 165 L130 160 L135 165 L140 160 L145 165 L150 155 Z",
    hoverColor: "#8b5cf6",
  },
  { id: "left-leg", name: "Pierna Izquierda", path: "M180 150 L195 150 L200 240 L185 240 Z", hoverColor: "#10b981" },
  { id: "right-leg", name: "Pierna Derecha", path: "M180 150 L165 150 L160 240 L175 240 Z", hoverColor: "#10b981" },
  { id: "left-foot", name: "Pie Izquierdo", path: "M185 240 L200 240 L205 255 L180 255 Z", hoverColor: "#ec4899" },
  { id: "right-foot", name: "Pie Derecho", path: "M175 240 L160 240 L155 255 L180 255 Z", hoverColor: "#ec4899" },
]

export function InteractiveBody() {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)
  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const router = useRouter()

  const handlePartClick = (partId: string) => {
    setSelectedPart(partId)
    // Redirect to gear page for that body part
    router.push(`/gear/${partId}`)
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
      {/* SVG Body */}
      <div className="relative">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700 shadow-2xl">
          <svg
            viewBox="0 0 360 280"
            className="w-full max-w-md h-auto"
            style={{ filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))" }}
          >
            {/* Body outline */}
            <g className="transition-all duration-300">
              {bodyParts.map((part) => (
                <path
                  key={part.id}
                  d={part.path}
                  fill={hoveredPart === part.id ? part.hoverColor : "#3f3f46"}
                  stroke={hoveredPart === part.id ? part.hoverColor : "#71717a"}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300 hover:brightness-125"
                  style={{
                    filter: hoveredPart === part.id ? `drop-shadow(0 0 10px ${part.hoverColor})` : "none",
                    transform: hoveredPart === part.id ? "scale(1.05)" : "scale(1)",
                    transformOrigin: "center",
                  }}
                  onMouseEnter={() => setHoveredPart(part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => handlePartClick(part.id)}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Hover Label */}
        {hoveredPart && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 px-6 py-3 rounded-full shadow-xl animate-fade-in">
            <p className="text-white font-bold text-lg whitespace-nowrap">
              {bodyParts.find((p) => p.id === hoveredPart)?.name}
            </p>
          </div>
        )}
      </div>

      {/* Body Parts List */}
      <div className="w-full lg:w-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-white">Protección por Zona</h3>
          <div className="grid grid-cols-2 gap-3">
            {bodyParts.map((part) => (
              <button
                key={part.id}
                onClick={() => handlePartClick(part.id)}
                onMouseEnter={() => setHoveredPart(part.id)}
                onMouseLeave={() => setHoveredPart(null)}
                className="group relative overflow-hidden px-4 py-3 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: hoveredPart === part.id ? `${part.hoverColor}20` : "#18181b",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: hoveredPart === part.id ? part.hoverColor : "#52525b",
                      boxShadow: hoveredPart === part.id ? `0 0 10px ${part.hoverColor}` : "none",
                    }}
                  />
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {part.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-zinc-800 rounded-xl border border-zinc-700">
            <p className="text-xs text-zinc-400 text-center">
              Haz clic en cualquier parte del cuerpo para ver equipo especializado
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
