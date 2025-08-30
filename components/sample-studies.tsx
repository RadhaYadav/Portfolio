"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Download, ExternalLink } from "lucide-react"

const caseStudies = [
  {
    id: "cx-analytics",
    title: "CX Analytics Platform",
    subtitle: "SaaS Product Enhancement",
    background: "Mid-sized B2B SaaS company facing churn due to lack of analytics visibility",
    problem: "Customers couldn't access meaningful insights from their data, leading to poor retention",
    metrics: {
      renewalRate: { before: 68, after: 80 },
      nps: { before: 32, after: 55 },
      adoption: 72,
    },
    impact: ["Renewal rate +12%", "NPS +23 points", "72% adoption rate"],
    framework: "RICE",
    color: "#4F46E5",
  },
  {
    id: "personality-matching",
    title: "Personality-First Matchmaking",
    subtitle: "Dating App Feature",
    background: "Declining match-to-conversation conversion due to superficial matching criteria",
    problem: "Users weren't engaging meaningfully with matches, leading to poor retention",
    metrics: {
      matchConversion: [
        { month: "Month 1", rate: 18 },
        { month: "Month 2", rate: 28 },
        { month: "Month 3", rate: 40 },
      ],
      retention: { before: 45, after: 63 },
      uninstalls: { before: 25, after: 15 },
    },
    impact: ["Match-to-conversation +22 points", "7-day retention +18%", "Uninstalls reduced by 10%"],
    framework: "ICE",
    color: "#7C3AED",
  },
  {
    id: "risk-dashboard",
    title: "Portfolio Risk Insights Dashboard",
    subtitle: "Financial Data Product",
    background: "Institutional investors lacked real-time risk visibility for portfolio decisions",
    problem: "Decision latency was too high, affecting investment performance and client satisfaction",
    metrics: {
      decisionTime: { before: 6, after: 0.25 }, // hours to 15 minutes
      adoption: 100,
      renewal: 100,
    },
    impact: ["Decision latency: 6hrs → 15min", "100% pilot client adoption", "100% renewal rate"],
    framework: "MoSCoW",
    color: "#14B8A6",
  },
]

export function SampleStudies() {
  return (
    <Section
      id="studies"
      title="Case Studies"
      subtitle="Product management case studies with detailed metrics and outcomes."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Dialog key={study.id}>
            <DialogTrigger asChild>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: study.color }} />
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </div>
                  <p className="text-sm text-[#94A3B8]">{study.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#CBD5E1] mb-4">{study.background}</p>
                  <div className="space-y-2">
                    {study.impact.map((metric, idx) => (
                      <div key={idx} className="text-sm font-medium text-[#14B8A6]">
                        {metric}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors">
                    <span>View Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0F172A] border-white/10">
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: study.color }} />
                  {study.title}
                </DialogTitle>
              </DialogHeader>
              <CaseStudyDetails study={study} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  )
}

function CaseStudyDetails({ study }: { study: (typeof caseStudies)[0] }) {
  return (
    <div className="space-y-6">
      {/* Background & Problem */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-2 text-[#F8FAFC]">Background</h3>
          <p className="text-sm text-[#CBD5E1]">{study.background}</p>
        </div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-2 text-[#F8FAFC]">Problem Statement</h3>
          <p className="text-sm text-[#CBD5E1]">{study.problem}</p>
        </div>
      </div>

      {/* Framework Used */}
      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <h3 className="font-semibold mb-2 text-[#F8FAFC]">Prioritization Framework</h3>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: study.color }} />
          {study.framework}
        </div>
      </div>

      {/* Metrics Visualization */}
      <div className="space-y-4">
        <h3 className="font-semibold text-[#F8FAFC]">Impact Metrics</h3>
        {study.id === "cx-analytics" && <CXAnalyticsChart study={study} />}
        {study.id === "personality-matching" && <PersonalityMatchingChart study={study} />}
        {study.id === "risk-dashboard" && <RiskDashboardChart study={study} />}
      </div>

      {/* Download PDF */}
      <div className="flex justify-center pt-4">
        <Button
          variant="outline"
          className="border-white/20 hover:bg-white/10 bg-transparent"
          onClick={() => window.open(`/case-studies/${study.id}.pdf`, "_blank")}
        >
          <Download className="w-4 h-4 mr-2" />
          Download Case Study PDF
        </Button>
      </div>
    </div>
  )
}

function CXAnalyticsChart({ study }: { study: (typeof caseStudies)[0] }) {
  const data = [
    { metric: "Renewal Rate", before: study.metrics.renewalRate.before, after: study.metrics.renewalRate.after },
    { metric: "NPS Score", before: study.metrics.nps.before, after: study.metrics.nps.after },
  ]

  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">Before vs After Comparison</CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ChartContainer
          config={{
            before: { label: "Before", color: "#64748B" },
            after: { label: "After", color: "#4F46E5" },
          }}
          className="h-full"
        >
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="metric" tick={{ fill: "#94A3B8", fontSize: 12 }} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} />
              <Tooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="before" fill="#64748B" radius={[4, 4, 0, 0]} />
              <Bar dataKey="after" fill="#4F46E5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function PersonalityMatchingChart({ study }: { study: (typeof caseStudies)[1] }) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">Match-to-Conversation Rate Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ChartContainer
          config={{
            rate: { label: "Conversion Rate (%)", color: "#7C3AED" },
          }}
          className="h-full"
        >
          <ResponsiveContainer>
            <LineChart data={study.metrics.matchConversion}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 12 }} />
              <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} />
              <Tooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#7C3AED"
                strokeWidth={3}
                dot={{ fill: "#7C3AED", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function RiskDashboardChart({ study }: { study: (typeof caseStudies)[2] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-lg">Decision Latency Reduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-sm text-[#94A3B8] mb-1">Before</div>
            <div className="text-3xl font-bold text-[#64748B]">6 hrs</div>
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-px bg-gradient-to-r from-[#64748B] to-[#14B8A6]" />
          </div>
          <div className="text-center">
            <div className="text-sm text-[#94A3B8] mb-1">After</div>
            <div className="text-3xl font-bold text-[#14B8A6]">15 min</div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-lg">Adoption Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-[#94A3B8]">Pilot Adoption</span>
              <span className="text-sm font-medium text-[#14B8A6]">100%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-[#14B8A6] h-2 rounded-full w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-[#94A3B8]">Renewal Rate</span>
              <span className="text-sm font-medium text-[#14B8A6]">100%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-[#14B8A6] h-2 rounded-full w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
