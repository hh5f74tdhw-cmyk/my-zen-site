"use client"

import { useState } from "react"
import { Mail, ChevronDown, CheckCircle2 } from "lucide-react"

const directions = [
  "请选择咨询方向",
  "四柱八字 · 节点抉择",
  "紫微斗数 · 命盘大局",
  "奇门遁甲 · 当下博弈",
  "堪舆风水 · 场域调和",
]

export function ConsultSection() {
  // 1. 声明状态，精准捕获单人提交的资料
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [direction, setDirection] = useState("请选择咨询方向")
  const [content, setContent] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  // 2. 核心邮件唤醒逻辑
  const handleGenerateEmail = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !phone || direction === "请选择咨询方向" || !content) {
      alert("请将您的称呼、联系方式、关注方向与具体处境填写完整，以示严谨。")
      return
    }

    // 你的官方接收邮箱（Christopher，这里可以改成你真正的商务邮箱）
    const configEmail = "consult@zenyundao.com" 
    
    // 邮件主题
    const subject = encodeURIComponent(`【福运道咨询申请】-${direction}-${name}`)
    
    // 优雅排版的邮件正文
    const body = encodeURIComponent(
      `尊启，福运道主理人：\n\n` +
      `以下是我的传统风俗学咨询申请资料：\n\n` +
      `【缘主称呼】：${name}\n` +
      `【联络电话】：${phone}\n` +
      `【关注方向】：${direction}\n\n` +
      `【目前身处的具体处境与困惑】：\n` +
      `${content}\n\n` +
      `--- \n` +
      `信件由福运道官方获客站生成。已洗心静候，期待主理人亲笔回信推演。`
    )

    // 调起系统原生邮件客户端
    window.location.href = `mailto:${configEmail}?subject=${subject}&body=${body}`
    
    setIsSubmitted(true)
  }

  return (
    <section id="consult" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Left: 优雅的品牌传道与手写仪式感 */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs tracking-[0.3em] text-primary font-medium">传 统 方 法 研 究</span>
          <h2 className="mt-6 text-balance font-serif text-3xl leading-[1.35] tracking-[0.04em] text-foreground sm:text-4xl">
            以静心之态<br />寻一份乾坤清明
          </h2>
          <div className="mt-7 max-w-md space-y-5 text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
            <p>
              我们深知，流年更替与环境场域的变化，往往伴随着人生关键节点的迷茫。不用急着把所有事情都想明白，先写下你当下的处境。
            </p>
            <p className="border-l-2 border-primary/30 pl-4 font-serif italic text-foreground/90">
              “福运道拒绝任何流水线式的 AI 批量敷衍。我们坚持遵循传统术数学理，由主理人对每一份呈递的八字处境静心手写推演，见字如面。”
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground/60">
              提交后，系统将自动帮您排版并调起邮件客户端。主理人收到您的信函后，会依序评估并与您确认更深度的人工面对面或线上咨询方式。
            </p>
          </div>
        </div>

        {/* Right: 极简奢华的预约卡片 */}
        <div className="rounded-3xl border border-border bg-card p-7 shadow-[0_20px_50px_-30px_rgba(26,47,41,0.45)] sm:p-9 transition-all">
          <form className="flex flex-col gap-6" onSubmit={handleGenerateEmail}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="姓名 / 称呼">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="怎么称呼您"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                />
              </Field>
              <Field label="联络电话">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="方便联系的号码"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                />
              </Field>
            </div>

            <Field label="关注方向">
              <div className="relative">
                <select
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
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

            <Field label="描述您目前卡住的阶段或处境">
              <textarea
                rows={5}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="例如：最近在考虑转岗、合作关系、搬家布局，或想先了解自己的阶段节奏。请尽可能提供准确的性别与公历/农历出生时辰，以便更精准地推演。"
                className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
              />
            </Field>

            <div className="mt-2 flex flex-col gap-3">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-[0.99]"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                提交申请 · 生成正式信函
              </button>

              {isSubmitted && (
                <p className="flex items-center justify-center gap-1.5 text-xs text-emerald-500 animate-fade-in mt-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  已成功调起邮件。如未弹出，请检查您的系统默认 Mail 配置。
                </p>
              )}
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
      <span className="text-xs tracking-[0.16em] text-muted-foreground/90 font-medium">{label}</span>
      {children}
    </label>
  )
}