import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const cases = [
  {
    area: 'Direito Trabalhista',
    result: 'R$ 480.000',
    desc: 'Recuperamos verbas rescisórias e danos morais em ação contra multinacional do setor automotivo.',
    duration: '14 meses',
  },
  {
    area: 'Direito Empresarial',
    result: 'Empresa preservada',
    desc: 'Conduzimos recuperação judicial de empresa com 200 funcionários, evitando a falência.',
    duration: '22 meses',
  },
  {
    area: 'Direito de Família',
    result: 'Guarda obtida',
    desc: 'Garantimos guarda compartilhada com convivência equânime em caso de alta litigiosidade.',
    duration: '8 meses',
  },
]

export default function Cases() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-32 bg-ink-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-eyebrow">Histórico</p>
          <h2 className="section-title">
            Casos que fazem<br />
            <span className="italic text-gold">história.</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gold/10">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ink-950 p-10 group hover:bg-ink-800 transition-colors duration-400"
            >
              <div className="font-sans text-xs text-gold/60 tracking-widest uppercase mb-6 border border-gold/20 inline-block px-3 py-1">
                {c.area}
              </div>
              <div className="font-display text-3xl text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                {c.result}
              </div>
              <p className="font-body text-cream/55 leading-relaxed mb-8">
                {c.desc}
              </p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                <div className="w-6 h-px bg-gold/40" />
                <span className="font-sans text-xs text-cream/30 tracking-wider">Duração: {c.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center font-body text-cream/30 text-sm"
        >
          * Casos apresentados com dados anonimizados conforme ética profissional da OAB.
        </motion.p>
      </div>
    </section>
  )
}
