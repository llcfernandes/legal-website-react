# Veiga & Associados ⚖️

Template premium para escritório de advocacia, desenvolvido com React + Vite + **Tailwind CSS v4**.

## ✨ Visão Geral

Site elegante e refinado para escritório de advocacia. Design editorial com paleta dark (ink/ouro), tipografia serif sofisticada e animações contidas. Configuração CSS-first com Tailwind v4.

## 🛠 Tecnologias (versões atualizadas — Março 2026)

| Tecnologia | Versão |
|---|---|
| React | ^19.1.0 |
| Vite | ^6.3.0 |
| Tailwind CSS | ^4.1.0 |
| @tailwindcss/vite | ^4.1.0 |
| Motion (ex-Framer Motion) | ^12.0.0 |
| React Icons | ^5.5.0 |
| React Intersection Observer | ^9.16.0 |

## 🆕 Tailwind CSS v4 — O que mudou

Tailwind v4 usa **configuração CSS-first**. Não há mais `tailwind.config.js` nem `postcss.config.js`.

**Setup (vite.config.js):**
```js
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ plugins: [react(), tailwindcss()] })
```

**CSS (src/styles/index.css):**
```css
@import "tailwindcss";

@theme {
  --color-gold: #C9A84C;
  --font-display: "Playfair Display", serif;
}
```

Todos os tokens do `@theme` viram classes Tailwind automaticamente (`bg-gold`, `font-display`, etc.).

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Areas.jsx
│       ├── Team.jsx
│       ├── Cases.jsx
│       ├── Testimonials.jsx
│       ├── FAQ.jsx
│       └── Contact.jsx
├── styles/
│   └── index.css       ← @theme + classes customizadas
├── App.jsx
└── main.jsx
```

## 🚀 Como Rodar

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
npm run preview
```

## 🎨 Identidade Visual

| Elemento | Valor |
|---|---|
| Paleta | Ink dark + Gold `#C9A84C` |
| Fonte display | Playfair Display |
| Fonte corpo | Crimson Pro |
| Fonte UI | Inter |
| CSS | Tailwind CSS v4 |

---

Desenvolvido por **Lucas Fernandes** – Desenvolvedor Web
