import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    q: 'A consulta inicial é realmente gratuita?',
    a: 'Sim. Oferecemos uma consulta inicial gratuita de até 30 minutos para analisar sua situação e indicar o melhor caminho jurídico.',
  },
  {
    q: 'Vocês cobram por resultados ou com honorários fixos?',
    a: 'Depende da área e do caso. Em ações trabalhistas e de consumidor, trabalhamos frequentemente com honorários de êxito. Para consultoria empresarial, utilizamos contratos de retainer ou escopo fechado.',
  },
  {
    q: 'Em quais cidades o escritório atua?',
    a: 'Nossa sede é em São Paulo, mas atuamos em todo o território nacional por meio de advogados correspondentes e, para ações federais, em qualquer estado.',
  },
  {
    q: 'Quanto tempo dura um processo?',
    a: 'Varia muito conforme a área e a complexidade. Ações trabalhistas costumam durar de 12 a 36 meses. Casos de família podem ser resolvidos extrajudicialmente em semanas. Sempre informamos um prazo estimado no início.',
  },
  {
    q: 'Posso acompanhar meu processo de forma remota?',
    a: 'Sim. Temos uma plataforma de acompanhamento online onde você visualiza todas as movimentações do seu processo em tempo real, com total transparência.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="faq" className="py-32 bg-ink-950" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-eyebrow">Dúvidas Frequentes</p>
          <h2 className="section-title">Perguntas & Respostas</h2>
          <div className="gold-divider mx-auto" />
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="border-b border-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-7 text-left group"
              >
                <span className={`font-display text-lg transition-colors duration-300 ${open === i ? 'text-gold' : 'text-cream group-hover:text-gold'}`}>
                  {faq.q}
                </span>
                <span className={`text-gold font-sans text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-cream/55 text-base leading-relaxed pb-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
