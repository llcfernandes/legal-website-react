import React from 'react'
import { motion } from 'motion/react'

const stats = [
  { value: '20+', label: 'Anos de Experiência' },
  { value: '5.000+', label: 'Casos Resolvidos' },
  { value: '98%', label: 'Taxa de Êxito' },
  { value: '6', label: 'Áreas de Atuação' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Escritório de advocacia"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block ml-24" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-gold" />
            <span className="font-sans text-gold text-xs tracking-widest uppercase font-semibold">
              Escritório de Advocacia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-8"
          >
            Excelência Jurídica
            <br />
            <span className="italic text-gold">ao seu lado.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-cream/65 text-lg leading-relaxed mb-10 max-w-xl"
          >
            Há mais de 20 anos defendendo seus direitos com rigor técnico, ética 
            e comprometimento real. Cada caso tratado com a atenção que merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <button
              onClick={() => {
                const el = document.getElementById('contato')
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
              }}
              className="btn-gold"
            >
              Consulta Gratuita
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('areas')
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
              }}
              className="btn-outline"
            >
              Áreas de Atuação
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-0"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className={`pr-10 mr-10 ${i < stats.length - 1 ? 'border-r border-gold/20' : ''}`}
              >
                <div className="font-display text-4xl text-gold mb-1">{s.value}</div>
                <div className="font-sans text-xs text-cream/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
