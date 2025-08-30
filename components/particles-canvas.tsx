"use client"

import { useEffect, useRef } from "react"

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame = 0
    let raf = 0
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }))

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * DPR
      canvas.height = rect.height * DPR
    }
    resize()
    const onResize = () => resize()
    window.addEventListener("resize", onResize)

    const draw = () => {
      frame++
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // gradient background particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        const x = p.x * canvas.width
        const y = p.y * canvas.height

        const hue = 250 + Math.sin((x + frame * 0.2) * 0.001) * 40 // indigo/purple
        ctx.beginPath()
        ctx.arc(x, y, p.r * DPR * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, 0.35)`
        ctx.fill()
      }
      // subtle connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = (particles[i].x - particles[j].x) * canvas.width
          const dy = (particles[i].y - particles[j].y) * canvas.height
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            const alpha = 0.04 * (1 - dist / 120)
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})` // purple
            ctx.lineWidth = DPR * 0.6
            ctx.beginPath()
            ctx.moveTo(particles[i].x * canvas.width, particles[i].y * canvas.height)
            ctx.lineTo(particles[j].x * canvas.width, particles[j].y * canvas.height)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full bg-transparent" />
}
