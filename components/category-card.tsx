"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Category {
  id: string
  name: string
  description: string
  image: string
  color: string
  textColor: string
}

interface CategoryCardProps {
  category: Category
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.id}`}
      className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "fade-in 0.6s ease-out forwards",
        opacity: 0,
      }}
    >
      {/* Background Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="font-sans text-3xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform">
          {category.name}
        </h3>
        <p className="text-zinc-200 text-sm mb-4 line-clamp-2 group-hover:translate-x-2 transition-transform delay-75">
          {category.description}
        </p>

        <div className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform delay-100">
          <span>Explorar</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Link>
  )
}
