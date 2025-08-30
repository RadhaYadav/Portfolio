"use client"

import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const ParticlesCanvas = dynamic(() => import("./particles-canvas"), { ssr: false })

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      setOffset(top * 0.3) // parallax
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="home" aria-label="Hero" ref={containerRef} className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hero-gradient animate-gradient" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(124,58,237,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_60%,rgba(20,184,166,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#94A3B8]">
              Analytics Product Engineer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Radha Yadav</h1>
            <p className="text-lg md:text-xl text-[#94A3B8]">
              {"Analytics Product Engineer | Product Strategy | AI & Automation"}
            </p>
            <p className="text-[#CBD5E1]">
              {
                "Analytics Product Engineer with 7+ years’ experience translating business requirements into scalable technical solutions. "
              }
              {
                "Proven track record delivering data-driven products improving user experience by 40% and reducing processing time by 60%. "
              }
              {
                "Expert in product strategy, user research, and rapidly delivering custom solutions with hands-on experience building automation agents."
              }
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:translate-y-[-1px] transition-all"
              >
                <a href="/resume/Radha_PM.pdf" download>
                  <FileText className="h-4 w-4 mr-2" />
                  View Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#7C3AED] text-white hover:bg-[#7C3AED]/20 hover:border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:translate-y-[-1px] transition-all bg-transparent"
              >
                <a href="https://linkedin.com/in/radha-yadav-180b49b7" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#14B8A6] text-white hover:bg-[#14B8A6]/20 hover:border-[#14B8A6] shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:translate-y-[-1px] transition-all bg-transparent"
              >
                <a href="https://github.com/RadhaYadav" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <div
            className="relative h-[320px] md:h-[480px] rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            style={{ transform: `translateY(${(-offset).toFixed(2)}px)` }}
            aria-hidden="true"
          >
            <ParticlesCanvas />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4F46E5]/20 via-[#7C3AED]/10 to-[#14B8A6]/20 mix-blend-screen" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-gradient {
          background: linear-gradient(135deg, #4F46E5, #7C3AED, #14B8A6);
          background-size: 200% 200%;
          filter: blur(60px);
          opacity: 0.25;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientShift 16s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
