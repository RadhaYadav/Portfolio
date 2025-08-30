"use client"

import { Section } from "./section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const timeline = [
  {
    company: "Chubb Business Services LLP",
    period: "Dec 2024 – Present",
    bullets: [
      "Defined product requirements for CX Analytics Platform (1,000+ users), improving data quality by 40% and reducing query time by 35%.",
      "Led cross-functional squads across 3 release cycles, improving workflows by 25%.",
      "Automated monitoring reduced manual intervention by 35%, enabling self-service analytics.",
    ],
  },
  {
    company: "McCain Foods LTD",
    period: "June 2024 – Dec 2024",
    bullets: [
      "Delivered integrated solutions extracting SAP data into Azure Synapse, creating unified views.",
      "Influenced quarterly resource allocation through roadmap presentations.",
    ],
  },
  {
    company: "Infosys Limited",
    period: "2017 – 2021",
    bullets: [
      "Built automation dashboards improving operational visibility.",
      "Consolidated documentation, reducing redundancy by 30%.",
    ],
  },
]

export function ProjectsTimeline() {
  return (
    <Section
      id="projects"
      title="Professional Projects"
      subtitle="A timeline of high-impact roles and outcomes."
      className="bg-gradient-to-b from-transparent to-white/[0.02]"
    >
      <div className="relative">
        <div className="absolute left-3 md:left-1 top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />
        <div className="space-y-6">
          <Accordion type="single" collapsible className="space-y-4">
            {timeline.map((item, idx) => (
              <AccordionItem
                key={item.company}
                value={`item-${idx}`}
                className="border border-white/10 rounded-lg bg-white/5 overflow-hidden"
              >
                <AccordionTrigger className="px-4 md:px-6 hover:no-underline">
                  <div className="flex items-start gap-4 text-left">
                    <div
                      className={cn(
                        "mt-1 h-3 w-3 rounded-full ring-4 ring-[#4F46E5]/20",
                        idx === 0 ? "bg-[#4F46E5]" : idx === 1 ? "bg-[#7C3AED]" : "bg-[#14B8A6]",
                      )}
                    />
                    <div>
                      <div className="text-base md:text-lg font-semibold">{item.company}</div>
                      <div className="text-xs md:text-sm text-[#94A3B8]">{item.period}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <ul className="space-y-2">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="text-[#CBD5E1]">
                        {"• "}
                        {b}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  )
}
