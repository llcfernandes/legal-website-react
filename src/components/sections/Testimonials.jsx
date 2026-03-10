import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'Marcos R.',
    role: 'Empresário',
    text: 'O escritório Veiga & Associados foi fundamental na recuperação judicial da minha empresa. Profissionalismo e dedicação sem igual. Recomendo com total confiança.',
  },
  {
    name: 'Juliana P.',
    role: 'Professora',
    text: 'Precisei lutar por direitos trabalhistas que me foram negados por anos. O resultado superou todas as expectativas. Serei eternamente grata à equipe.',
  },
  {
    name: 'Rodrigo & Ana',
    role: 'Clientes de Família',
    text: 'Num momento tão difícil quanto um divórcio, encontramos orientação segura e humana. O acordo foi justo para todos e priorizou nossos filhos.',
  },
  {
    name: 'Sra. Conceição',
    role: 'Aposentada',
    text: 'Meu benefício previdenciário havia sido negado duas vezes. Com a Dra. Fernanda, conseguimos a revisão e o pagamento retroativo. Deus abençoe!',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="depoimentos" className="py-32 bg-ink-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-eyebrow">Depoimentos</p>
          <h2 className="section-title">O Que Dizem Nossos Clientes</h2>
          <div className="gold-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gold/10 p-10 relative hover:border-gold/30 transition-colors duration-300 group"
            >
              <div className="font-display text-6xl text-gold/10 absolute top-6 left-8 leading-none select-none">"</div>
              <blockquote className="font-body text-cream/70 text-lg leading-relaxed mb-8 relative z-10">
                {t.text}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-gold/40" />
                <div>
                  <div className="font-sans text-sm font-semibold text-cream">{t.name}</div>
                  <div className="font-sans text-xs text-gold/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
