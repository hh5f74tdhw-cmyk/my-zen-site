import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ConsultSection } from "@/components/consult-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <ConsultSection />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row lg:px-8">
          <p className="font-serif tracking-[0.18em] text-foreground">福运道</p>
          <p className="text-xs tracking-wide">传统方法研究与咨询 · 以静心之态，寻一份清明</p>
        </div>
      </footer>
    </div>
  )
}
