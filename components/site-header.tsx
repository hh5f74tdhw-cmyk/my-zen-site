"use client"

import { useState } from "react"
import { Menu, X, Compass } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "服务范围", href: "#services" },
  { label: "AI 初筛", href: "#consult" },
  { label: "研究方法", href: "#services" },
  { label: "关于福运道", href: "#" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Logo + 小字 */}
        <a href="#" className="flex items-center gap-3" aria-label="福运道 首页">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-primary">
            <Compass className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.18em] text-foreground">福运道</span>
            <span className="mt-1 text-[10px] tracking-[0.32em] text-muted-foreground">研究与咨询</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="主导航">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#consult"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            预约咨询
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="打开菜单"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary md:hidden"
          >
            {open ? <X className="h-[18px] w-[18px]" strokeWidth={1.5} /> : <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="移动端导航">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#consult"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm text-primary-foreground"
            >
              预约咨询
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
