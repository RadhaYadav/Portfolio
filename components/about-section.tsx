"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "./section"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { RadialBar, RadialBarChart, PolarAngleAxis, ResponsiveContainer } from "recharts"

const competencies = [
  "Product Strategy",
  "User Research",
  "Stakeholder Management",
  "A/B Testing",
  "KPI Definition",
  "Prototyping",
  "Cross-functional Leadership",
  "Python",
  "SQL",
  "Scala",
  "Azure",
  "Databricks",
  "Apache Kafka",
  "Power BI",
  "API Design",
  "System Architecture",
  "Agile/Scrum",
  "Design Thinking",
  "OKRs",
  "RICE/ICE/MoSCoW Prioritization",
]

const skillsData = [
  { name: "Product", value: 90, fill: "#4F46E5" },
  { name: "Technical", value: 85, fill: "#7C3AED" },
  { name: "Tools", value: 80, fill: "#14B8A6" },
]

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Blending product strategy with hands-on analytics and automation engineering."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
            <Image
              src={"/placeholder-user.png?height=160&width=160&query=radha%20yadav%20professional%20avatar"}
              alt="Portrait placeholder for Radha Yadav"
              width={160}
              height={160}
              className="rounded-full ring-2 ring-[#14B8A6]/40"
            />
            <p className="text-[#CBD5E1]">
              {
                "I partner with stakeholders to translate business goals into scalable, data-driven products. I prototype fast, validate with users, and automate workflows to drive measurable impact."
              }
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {competencies.map((c) => (
                <Badge
                  key={c}
                  className="bg-white/5 text-xs font-normal border border-white/10 text-[#E2E8F0] hover:bg-white/10"
                >
                  {c}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 lg:col-span-2">
          <CardHeader>
            <CardTitle>Skills Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-6">
              {skillsData.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-3">
                  <div className="w-full h-48">
                    <ChartContainer
                      config={{
                        value: {
                          label: s.name,
                          color: s.fill,
                        },
                      }}
                      className="h-full"
                    >
                      <ResponsiveContainer>
                        <RadialBarChart
                          data={[{ ...s, max: 100 }]}
                          innerRadius="60%"
                          outerRadius="100%"
                          startAngle={90}
                          endAngle={-270}
                        >
                          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                          <RadialBar
                            dataKey="value"
                            background
                            cornerRadius={30}
                            className="stroke-transparent"
                            fill={s.fill}
                          />
                          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                  <div className="text-sm text-[#94A3B8]">
                    {s.name}: <span className="text-white font-medium">{s.value}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="bg-transparent border-white/10">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="text-[#CBD5E1]">
                  <p className="font-medium text-white">B.Tech, Computer Science Engineering</p>
                  <p>{"NIT Patna (2013–2017)"}</p>
                </CardContent>
              </Card>
              <Card className="bg-transparent border-white/10">
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent className="text-[#CBD5E1] space-y-1">
                  <ul className="list-disc list-inside">
                    <li>Azure Fundamentals (AZ-900)</li>
                    <li>IBM Data Pipelines with Kafka</li>
                    <li>Databricks Lakehouse Fundamentals</li>
                    <li>Databricks GenAI</li>
                    <li>Microsoft AI Product Management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
