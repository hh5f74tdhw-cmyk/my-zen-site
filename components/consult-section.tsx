"use client"

import { Sparkles, Mail, ChevronDown } from "lucide-react"

const directions = [
  "请选择咨询方向",
  "四柱八字",
  "紫微斗数",
  "奇门遁甲",
  "堪舆风水",
]

export function ConsultSection() {
  return (
    <section id="consult" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: elegant guidance */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs tracking-[0.3em] text-primary">A I 初 筛</span>
          <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.32] tracking-[0.03em] text-foreground sm:text-4xl">
            如果你愿意，可以先把最近的情况告诉 AI 助理
          </h2>
          <p className="mt-7 max-w-md text-pretty leading-relaxed text-muted-foreground">
            无需顾虑措辞。简单描述你正面临的处境，AI 助理会帮你初步归类，
            并在正式咨询前为你准备更贴合的方向。
          </p>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground/80">
            我们尊重你的隐私，所有信息仅用于本次咨询初筛。
          </p>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl border border-border bg-card p-7 shadow-[0_18px_50px_-30px_rgba(26,47,41,0.35)] sm:p-9">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="姓名">
                <input
                  type="text"
                  placeholder="如何称呼你"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                />
              </Field>
              <Field label="电话">
                <input
                  type="tel"
                  placeholder="便于回访的联系方式"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
                />
              </Field>
            </div>

            <Field label="咨询方向">
              <div className="relative">
                <select
                  defaultValue="请选择咨询方向"
                  className="w-full appearance-none rounded-2xl border border-border bg-background px-4 py-3 pr-10 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                >
                  {directions.map((d) => (
                    <option key={d} value={d} disabled={d === "请选择咨询方向"}>
                      {d}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  strokeWidth={1.5}
                />
              </div>
            </Field>

            <Field label="你的处境">
              <textarea
                rows={5}
                placeholder="描述你最近卡住的阶段、职业选择或环境困惑..."
                className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none"
              />
            </Field>

            <div className="mt-1 flex flex-col gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                生成邮件
              </button>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm tracking-wide text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                <Sparkles
                  className="h-[18px] w-[18px] animate-star-twinkle"
                  strokeWidth={1.5}
                />
                AI 实时推演处境
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-[0.16em] text-muted-foreground">{label}</span>
      {children}
    </label>
  )
}
