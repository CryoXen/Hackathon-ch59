import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { CartProvider } from "@/components/useCart" // <-- Importa tu provider aquí

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Warrior Gear - Equipo de Artes Marciales",
  description: "Encuentra el mejor equipo para tu disciplina de artes marciales",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased bg-zinc-950 text-white">
        <CartProvider> {/* <-- Envuelve todo con CartProvider */}
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
