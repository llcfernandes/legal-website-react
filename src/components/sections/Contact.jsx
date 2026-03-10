import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contato" className="py-32 bg-ink-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">Contato</p>
            <h2 className="section-title">
              Agende sua<br />
              <span className="italic text-gold">consulta gratuita.</span>
            </h2>
            <div className="gold-divider" />
            <p className="font-body text-cream/55 leading-relaxed mb-12">
              Nossa equipe analisará seu caso com atenção e sem compromisso.
              Preencha o formulário ou entre em contato diretamente.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Telefone', value: '(00) 3000-0000' },
                { label: 'WhatsApp', value: '(00) 00000-0000', link: 'https://wa.me/5500000000000' },
                { label: 'E-mail', value: 'contato@suaempresa.com', link: 'mailto:contato@suaempresa.com' },
                { label: 'Endereço', value: 'Av. Paulista, 000 – Conjunto 000\nSão Paulo – SP, 01310-000' },
                { label: 'Atendimento', value: 'Seg–Sex: 8h às 18h\nSáb: 9h às 13h' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-sans text-xs text-gold/60 uppercase tracking-widest">{item.label}</span>
                  </div>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                       className="font-body text-cream/70 hover:text-gold transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-cream/70 whitespace-pre-line">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="border border-gold/15 p-10">
              <h3 className="font-display text-2xl text-cream mb-8">
                Fale com um Advogado
              </h3>

              <div className="space-y-5">
                {[
                  { label: 'Nome Completo', type: 'text', placeholder: 'Seu nome completo' },
                  { label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                  { label: 'Telefone / WhatsApp', type: 'tel', placeholder: '(00) 00000-0000' },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block font-sans text-xs text-cream/40 uppercase tracking-widest mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-ink-950/60 border border-white/10 px-4 py-3 font-body text-cream placeholder-cream/25
                               focus:outline-none focus:border-gold/40 transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-sans text-xs text-cream/40 uppercase tracking-widest mb-2">
                    Área Jurídica
                  </label>
                  <select className="w-full bg-ink-950/60 border border-white/10 px-4 py-3 font-body text-cream/60
                                    focus:outline-none focus:border-gold/40 transition-colors duration-200">
                    <option>Selecione uma área</option>
                    <option>Direito Civil</option>
                    <option>Direito Trabalhista</option>
                    <option>Direito Empresarial</option>
                    <option>Direito de Família</option>
                    <option>Direito Previdenciário</option>
                    <option>Direito do Consumidor</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs text-cream/40 uppercase tracking-widest mb-2">
                    Descreva Brevemente
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Resumo do seu caso..."
                    className="w-full bg-ink-950/60 border border-white/10 px-4 py-3 font-body text-cream placeholder-cream/25
                             focus:outline-none focus:border-gold/40 transition-colors duration-200 resize-none"
                  />
                </div>

                <a
                  href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center mt-4 block text-center"
                >
                  Enviar pelo WhatsApp
                </a>

                <p className="font-sans text-xs text-center text-cream/25 mt-3">
                  Seus dados são protegidos. Sigilo profissional garantido.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
