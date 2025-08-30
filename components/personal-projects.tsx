"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Documentation Automation Agent",
    desc: "AI agent auto-updating project docs on git merges, reducing manual work by 80%.",
    color: "#4F46E5",
  },
  {
    title: "Git Analytics Agent",
    desc: "AI agent providing developer productivity insights to improve velocity.",
    color: "#7C3AED",
  },
  {
    title: "JIRA Story Generator",
    desc: "NLP agent converting requirements to structured stories using RICE/MoSCoW frameworks, automating 70% of story creation.",
    color: "#14B8A6",
  },
]

export function PersonalProjects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section
      id="personal"
      title="Personal Projects"
      subtitle="Rapid experiments to automate repetitive workflows and inform product decisions."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <Card
            key={p.title}
            className="bg-white/5 border-white/10 overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]"
            style={{ boxShadow: `inset 0 0 0 1px ${p.color}22` }}
          >
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-[#CBD5E1]">
              <p>{p.desc}</p>
              <div className="mt-4">
                <Dialog open={openIndex === idx} onOpenChange={(o) => setOpenIndex(o ? idx : null)}>
                  <DialogTrigger asChild>
                    <Button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 hover:-translate-y-0.5 transition-all">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg bg-[#0F172A] text-white border-white/10 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-2">
                    <DialogHeader>
                      <DialogTitle>{p.title}</DialogTitle>
                      <DialogDescription className="text-[#94A3B8]">
                        {"High-level architecture, workflow, and potential roadmap."}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 text-sm text-[#CBD5E1]">
                      <p>
                        {
                          "This project explores how lightweight agents can integrate with existing toolchains to automate documentation and analytics tasks end-to-end."
                        }
                      </p>
                      <ul className="list-disc list-inside">
                        <li>{"Trigger: Git merge or new PR comment"}</li>
                        <li>{"Actions: Parse diffs, summarize changes, update docs/Confluence"}</li>
                        <li>{"Signals: Commit metadata, code ownership, impacted components"}</li>
                        <li>{"Outputs: PR summary, changelog entry, metrics dashboard event"}</li>
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
