"use client"

import { Section } from "./section"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export function ResumeSection() {
  return (
    <Section id="resume" title="Resume" subtitle="Download or view embedded PDF.">
      <div className="flex flex-col gap-4">
        <div className="w-full h-[720px] rounded-lg overflow-hidden border border-white/10 bg-white/5">
          <object
            data="/resume/Radha_PM.pdf"
            type="application/pdf"
            className="w-full h-full"
            aria-label="Embedded resume PDF"
          >
            <p className="p-4 text-[#CBD5E1]">
              {"Your browser can't display PDFs. "}
              <a href="/resume/Radha_PM.pdf" className="underline text-white">
                Download the resume instead.
              </a>
            </p>
          </object>
        </div>
        <div>
          <Button
            asChild
            className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white shadow-[0_0_25px_rgba(79,70,229,0.35)]"
          >
            <a href="/resume/Radha_PM.pdf" download>
              <FileDown className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
