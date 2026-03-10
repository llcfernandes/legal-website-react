import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const team = [
  {
    name: 'Dr. Rafael Veiga',
    role: 'Sócio Fundador',
    areas: 'Direito Civil & Empresarial',
    oab: 'OAB/SP 000.000',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Dra. Carla Mendonça',
    role: 'Sócia',
    areas: 'Direito Trabalhista',
    oab: 'OAB/SP 000.001',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Dr. Bruno Queiroz',
    role: 'Advogado Sênior',
    areas: 'Direito de Família',
    oab: 'OAB/SP 000.002',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Dra. Fernanda Lima',
    role: 'Advogada Plena',
    areas: 'Direito Previdenciário',
    oab: 'OAB/SP 000.003',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
]

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="equipe" className="py-32 bg-ink-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <p className="section-eyebrow">Nossa Equipe</p>
            <h2 className="section-title !mb-0">
              Profissionais que fazem<br />
              a <span className="italic text-gold">diferença.</span>
            </h2>
          </div>
          <p className="font-body text-cream/50 max-w-sm leading-relaxed">
            Advogados especializados, comprometidos com a sua causa e com resultados concretos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-default"
            >
              <div className="relative overflow-hidden mb-5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              <div>
                <h3 className="font-display text-xl text-cream mb-1">{member.name}</h3>
                <div className="font-sans text-gold text-sm tracking-wide mb-1">{member.role}</div>
                <div className="font-sans text-cream/40 text-xs">{member.areas}</div>
                <div className="font-sans text-cream/30 text-xs mt-1">{member.oab}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
