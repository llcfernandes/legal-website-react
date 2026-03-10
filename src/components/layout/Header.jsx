/*
 * Projeto desenvolvido por Lucas Fernandes
 * Desenvolvedor Web
 */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

function scrollTo(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#inicio')}
          className="flex flex-col items-start cursor-pointer group"
        >
          <span className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-300">
            Veiga <span className="text-gold">&</span> Associados
          </span>
          <span className="font-sans text-[10px] tracking-widest text-cream/40 uppercase">
            Escritório de Advocacia
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-sans text-sm text-cream/60 hover:text-cream px-4 py-2 transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contato')}
            className="ml-4 btn-gold"
          >
            Consulta Gratuita
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-cream transition-all duration-300 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`w-6 h-px bg-cream transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-cream transition-all duration-300 ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-ink-900 border-t border-gold/10 px-6 py-6 flex flex-col gap-2"
          >
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => { scrollTo(l.href); setOpen(false) }}
                className="text-left font-sans text-cream/70 hover:text-cream py-3 border-b border-white/5 text-sm transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { scrollTo('#contato'); setOpen(false) }}
              className="mt-4 btn-gold text-center justify-center"
            >
              Consulta Gratuita
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
