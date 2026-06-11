import { ArrowUpRight } from "lucide-react"

const services = [
  { title: "四柱八字", desc: "以生辰干支为据，梳理人生格局与时运起伏。" },
  { title: "紫微斗数", desc: "排布命盘星曜，洞察性情、际遇与关键流年。" },
  { title: "奇门遁甲", desc: "因时因地择机，为重要决策提供方位与时机参考。" },
  { title: "堪舆风水", desc: "审视居所与办公环境，调和空间气场与日常状态。" },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: big statement */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs tracking-[0.3em] text-primary">服 务 范 围</span>
          <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.32] tracking-[0.03em] text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.3]">
            围绕决策、关系与空间问题，提供更清晰的咨询入口
          </h2>
          <p className="mt-7 max-w-md text-pretty leading-relaxed text-muted-foreground">
            我们不预测吉凶，而是以传统方法为框架，帮你看清处境、厘清选项，
            在重要时刻多一份笃定。
          </p>
        </div>

        {/* Right: list cards */}
        <div className="flex flex-col gap-4">
          {services.map((s) => (
            <a
              key={s.title}
              href="#consult"
              className="group flex items-start justify-between gap-6 rounded-3xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(26,47,41,0.04)] transition-all hover:border-primary/40 hover:shadow-[0_12px_30px_-18px_rgba(163,112,76,0.45)]"
            >
              <div>
                <h3 className="font-serif text-xl tracking-[0.06em] text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{s.desc}</p>
              </div>
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
