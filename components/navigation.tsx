"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Professional" },
  { href: "#personal", label: "Personal" },
  { href: "#studies", label: "Studies" },
  { href: "#resume", label: "Resume" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-[#0F172A]/60 border-b border-white/5"
          : "bg-transparent",
      )}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight text-lg">
          {"<"}Radha<span className="text-[#14B8A6]">.dev</span>
          {"/>"}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="text-[#94A3B8] hover:text-white">
            <a
              href="https://linkedin.com/in/radha-yadav-180b49b7"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-[#94A3B8] hover:text-white">
            <a href="https://github.com/RadhaYadav" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            className="bg-[#4F46E5] text-white hover:bg-[#4F46E5]/90 shadow-[0_0_20px_rgba(79,70,229,0.35)] hover:translate-y-[-1px] transition-all"
          >
            <a href="/resume/Radha_PM.pdf" download aria-label="Download Resume">
              <FileDown className="h-4 w-4 mr-2" />
              Download
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
