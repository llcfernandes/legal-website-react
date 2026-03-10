import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const values = [
  { title: 'Ética Absoluta', desc: 'Transparência em cada etapa. Você sempre sabe exatamente onde está seu caso.' },
  { title: 'Estratégia Técnica', desc: 'Cada ação judicial é precedida de análise aprofundada e planejamento estratégico.' },
  { title: 'Atendimento Personalizado', desc: 'Nenhum cliente é tratado como processo. Cada história merece atenção única.' },
  { title: 'Resultados Comprovados', desc: '20 anos de histórico com mais de 5.000 casos resolvidos e 98% de taxa de êxito.' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="sobre" className="py-32 bg-ink-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
              alt="Equipe do escritório Veiga & Associados"
              className="w-full h-[560px] object-cover"
              loading="lazy"
            />
            {/* Gold frame accent */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/20 pointer-events-none" />

            {/* Floating stat */}
            <div className="absolute -bottom-6 left-8 bg-gold px-8 py-5">
              <div className="font-display text-3xl text-ink-950">1994</div>
              <div className="font-sans text-xs text-ink-950/70 uppercase tracking-wider mt-1">Fundado em</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="section-eyebrow">Sobre o Escritório</p>
            <h2 className="section-title">
              Tradição jurídica com visão contemporânea.
            </h2>
            <div className="gold-divider" />
            <p className="font-body text-cream/60 text-lg leading-relaxed mb-6">
              O escritório <strong className="text-cream font-semibold">Veiga & Associados</strong> foi fundado em 1994 com a missão de oferecer 
              assessoria jurídica de excelência, combinando rigor técnico com 
              atendimento humanizado.
            </p>
            <p className="font-body text-cream/60 leading-relaxed mb-10">
              Nossa equipe de advogados especializados atua em seis frentes do direito,
              com foco total no resultado do cliente. Cada caso é tratado com a seriedade 
              e dedicação que ele merece — sem exceção.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="border-l-2 border-gold/30 pl-4 py-1"
                >
                  <h4 className="font-sans text-sm font-semibold text-cream mb-1">{v.title}</h4>
                  <p className="font-body text-cream/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
