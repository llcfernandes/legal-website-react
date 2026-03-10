import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-gold/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-display text-2xl text-cream mb-2">
              Veiga <span className="text-gold">&</span> Associados
            </div>
            <div className="font-sans text-xs text-cream/30 uppercase tracking-widest mb-5">
              Escritório de Advocacia
            </div>
            <p className="font-body text-cream/40 text-sm leading-relaxed max-w-sm">
              Há mais de 20 anos defendendo direitos com excelência técnica, 
              ética inabalável e comprometimento real com cada cliente.
            </p>
            <div className="mt-6 font-sans text-xs text-cream/25">
              OAB/SP — CNPJ: 00.000.000/0001-00
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs text-gold/60 uppercase tracking-widest mb-5">Navegação</h4>
            <div className="flex flex-col gap-3">
              {['Início', 'Sobre', 'Áreas de Atuação', 'Equipe', 'Depoimentos', 'Contato'].map(l => (
                <a key={l} href="#" className="font-body text-cream/40 hover:text-cream text-sm transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs text-gold/60 uppercase tracking-widest mb-5">Contato</h4>
            <div className="flex flex-col gap-3 font-body text-cream/40 text-sm">
              <span>(00) 3000-0000</span>
              <span>contato@suaempresa.com</span>
              <span>Av. Paulista, 000 – Cj. 000</span>
              <span>São Paulo – SP</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/20">
            © {new Date().getFullYear()} Veiga & Associados. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-cream/20">
            Desenvolvido por <strong className="text-gold/40 font-semibold">Lucas Fernandes</strong> – Desenvolvedor Web
          </p>
        </div>
      </div>
    </footer>
  )
}
