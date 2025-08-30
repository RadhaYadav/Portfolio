"use client"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-[#94A3B8] grid md:grid-cols-2 gap-4">
        <div>
          <div className="font-medium text-white">Contact</div>
          <div>{"radhayadav445@gmail.com | +91 8887721597"}</div>
        </div>
        <div className="md:text-right">
          <a href="https://linkedin.com/in/radha-yadav-180b49b7" className="hover:text-white mr-4">
            LinkedIn
          </a>
          <a href="https://github.com/RadhaYadav" className="hover:text-white mr-4">
            GitHub
          </a>
          <a href="/resume/Radha_PM.pdf" className="hover:text-white">
            Resume
          </a>
        </div>
      </div>
      <div className="pb-8 text-center text-xs text-[#64748B]">
        {"© "} {new Date().getFullYear()} {"Radha Yadav. All rights reserved."}
      </div>
    </footer>
  )
}
