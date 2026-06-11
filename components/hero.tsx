export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-6 lg:px-8 lg:pt-28">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          传统方法 · 当代解读
        </span>
        <h1 className="mt-8 text-balance font-serif text-4xl leading-[1.28] tracking-[0.04em] text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.22]">
          以静心之态，
          <br className="hidden sm:block" />
          为人生重要节点寻一份清明
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          福运道专注于传统方法的研究与咨询。我们以审慎、克制的方式，
          陪你梳理决策、关系与空间中的困惑，让选择回归从容。
        </p>
      </div>
    </section>
  )
}
