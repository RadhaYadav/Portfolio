"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" })

  return (
    <section id={id} ref={ref} className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mb-10 md:mb-14 transform transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          {subtitle && <p className="text-[#94A3B8] mt-2">{subtitle}</p>}
        </div>
        <div
          className={cn(
            "transform transition-all duration-700 delay-75",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
