import React, { useState } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const areas = [
  {
    number: '01',
    title: 'Direito Civil',
    desc: 'Contratos, responsabilidade civil, posse e propriedade, cobranças e reparação de danos.',
    sub: ['Contratos', 'Indenizações', 'Imóveis', 'Cobranças'],
  },
  {
    number: '02',
    title: 'Direito Trabalhista',
    desc: 'Defesa de empregados e empresas em ações trabalhistas, rescisões e negociações coletivas.',
    sub: ['Rescisões', 'Horas Extras', 'Assédio', 'Negociações'],
  },
  {
    number: '03',
    title: 'Direito Empresarial',
    desc: 'Constituição de empresas, contratos comerciais, fusões, aquisições e recuperação judicial.',
    sub: ['Contratos', 'M&A', 'Recuperação', 'Societário'],
  },
  {
    number: '04',
    title: 'Direito de Família',
    desc: 'Divórcio, guarda de filhos, pensão alimentícia, inventário e herança.',
    sub: ['Divórcio', 'Guarda', 'Pensão', 'Inventário'],
  },
  {
    number: '05',
    title: 'Direito Previdenciário',
    desc: 'Aposentadorias, benefícios por incapacidade, pensões e revisão de benefícios negados.',
    sub: ['Aposentadoria', 'BPC/LOAS', 'Pensões', 'Revisões'],
  },
  {
    number: '06',
    title: 'Direito do Consumidor',
    desc: 'Defesa em conflitos com empresas, bancos, planos de saúde e concessionárias.',
    sub: ['Banco', 'Plano de Saúde', 'Produtos', 'Serviços'],
  },
]

export default function Areas() {
  const [hovered, setHovered] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="areas" className="py-32 bg-ink-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="section-eyebrow">Especialidades</p>
          <h2 className="section-title">Áreas de Atuação</h2>
          <div className="gold-divider" />
          <p className="section-sub">
            Cobertura jurídica completa para pessoas físicas e jurídicas,
            com equipes especializadas em cada área do direito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-10 transition-all duration-400 cursor-default
                ${hovered === i ? 'bg-ink-800' : 'bg-ink-950'}`}
            >
              <div className="font-sans text-gold/30 text-xs tracking-widest font-semibold mb-6 uppercase">
                {area.number}
              </div>
              <h3 className={`font-display text-2xl mb-4 transition-colors duration-300
                ${hovered === i ? 'text-gold' : 'text-cream'}`}>
                {area.title}
              </h3>
              <p className="font-body text-cream/50 text-base leading-relaxed mb-6">
                {area.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.sub.map((tag, ti) => (
                  <span key={ti} className="font-sans text-xs text-gold/60 border border-gold/20 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-500
                ${hovered === i ? 'w-full' : 'w-0'}`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="font-body text-cream/40 text-sm mb-6">
            Não encontrou sua área? Entre em contato para uma avaliação gratuita.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contato')
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
            }}
            className="btn-outline"
          >
            Falar com um Advogado
          </button>
        </motion.div>
      </div>
    </section>
  )
}
