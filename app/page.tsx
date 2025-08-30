import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { PersonalProjects } from "@/components/personal-projects"
import { SampleStudies } from "@/components/sample-studies"
import { ResumeSection } from "@/components/resume-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC] scroll-smooth">
      <Navigation />
      <Hero />
      <AboutSection />
      <ProjectsTimeline />
      <PersonalProjects />
      <SampleStudies />
      <ResumeSection />
      <Footer />
      {/* Note: Built with Next.js App Router and SPA-style client interactivity for smooth transitions and client-side animations. [^1][^2] */}
    </main>
  )
}
