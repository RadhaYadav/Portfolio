"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function useInView<T extends Element>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])
  return inView
}
