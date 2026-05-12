interface SectionHeaderProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const eyebrowAlignClass = align === 'center' ? 'self-center' : 'self-start'
  const subtitleAlignClass = align === 'center' ? 'mx-auto' : ''

  const parts = highlight ? title.split(highlight) : [title]

  return (
    <div className={`flex flex-col gap-3 mb-14 ${alignClass}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 glass-fire rounded-full px-5 py-2 text-xs font-semibold tracking-widest text-fire-400 uppercase border border-fire-500/20 ${eyebrowAlignClass}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-fire-500 animate-pulse flex-shrink-0" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-smoke-100">
        {parts[0]}
        {highlight && (
          <span className="gradient-fire"> {highlight}</span>
        )}
        {parts[1]}
      </h2>

      {subtitle && (
        <p className={`text-smoke-500 text-base sm:text-lg max-w-2xl font-body font-light leading-relaxed ${subtitleAlignClass}`}>
          {subtitle}
        </p>
      )}

      {/* Decorative fire rule */}
      <div className={`flex items-center gap-2 mt-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="w-12 h-0.5 bg-gradient-to-r from-fire-500 to-fire-600 rounded-full" />
        <span className="w-2 h-2 rounded-full bg-fire-500/60" />
        <span className="w-5 h-px bg-fire-500/30 rounded-full" />
      </div>
    </div>
  )
}
