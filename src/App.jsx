/*
 * Projeto desenvolvido por Lucas Fernandes
 * Desenvolvedor Web
 */

import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Areas from './components/sections/Areas'
import Team from './components/sections/Team'
import Cases from './components/sections/Cases'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <Team />
        <Cases />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
