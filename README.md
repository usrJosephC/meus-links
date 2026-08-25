# 🌐 developer.bio — Joseph Cavalcante

> Link-in-bio e portfólio em um só projeto. A raiz (`/`) concentra redes sociais e contato; `/portfolio` traz manifesto, stack, projetos e formação em um mosaico de painéis de vidro. Um campo 3D de nós conectados corre atrás de tudo e reage ao ponteiro.

### ✨ [Acesse a versão ao vivo](https://usrjosephc.vercel.app/)

---

## 🚀 O que tem aqui

- **Duas páginas, um sistema visual:** a bio é uma coluna vertical mobile-first; o portfólio é um mosaico de 12 colunas que colapsa para a mesma coluna no celular.
- **Campo de links em 3D:** nós que flutuam, se conectam quando ficam perto e se afastam do cursor — desenhado direto em `BufferGeometry`, sem biblioteca de partículas.
- **Conteúdo em um lugar só:** bio, redes, skills, formação e projetos vivem em [`data/profile.js`](data/profile.js). Editar lá reflete nas duas páginas.
- **Trilho numerado:** cada painel do portfólio carrega seu índice de leitura (`01 / Manifesto`, `02 / Sobre`, …) na lateral.
- **Contato sem backend:** o formulário monta a mensagem e abre o app de email do visitante já endereçado.
- **Piso de qualidade:** responsivo, foco visível no teclado, `prefers-reduced-motion` respeitado (o campo congela e as revelações viram instantâneas) e a cena pausa quando a aba sai de foco.

---

## 🎨 Sistema de design

Tokens em [`app/globals.css`](app/globals.css), sob `@theme` do Tailwind v4.

| Papel | Valor |
| --- | --- |
| Base | `#08080d` / `#0d0d14` |
| Roxos | `#321852` · `#4a2574` · `#6b3da8` |
| Lilás (voz principal) | `#b794f6` / `#d6bffc` |
| Âmbar (só o item atual) | `#f5c542` |

Tipografia: **Outfit** nos títulos, **Inter** no corpo, **JetBrains Mono** nos rótulos e dados.

### Marca — Cavalcante Tech

O "C" desenhado como bracket de código, seguido do bloco de cursor de terminal.

| Arquivo | Uso |
| --- | --- |
| [`app/icon.svg`](app/icon.svg) | Favicon da aba (Next wireia sozinho) |
| [`public/logo-mark.svg`](public/logo-mark.svg) | Símbolo sozinho, herda `currentColor` |
| [`components/ui/Mark.jsx`](components/ui/Mark.jsx) | O símbolo como componente React |
| [`public/logo-cavalcante-tech.png`](public/logo-cavalcante-tech.png) | Lockup horizontal completo |
| [`public/preview.png`](public/preview.png) | Imagem de Open Graph, 1200×630 |

---

## 💻 Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

- **Next.js 16** (App Router, Turbopack) · **React 19**
- **Tailwind CSS 4** — tokens via `@theme`, sem arquivo de config
- **three.js** + **@react-three/fiber** — a cena de fundo
- **lucide-react** e **react-icons** — ícones de interface e marcas
- **Vercel** — deploy

---

## 📁 Estrutura

```
app/
  page.jsx            # link-in-bio
  portfolio/page.jsx  # mosaico do portfólio
  globals.css         # tokens e componentes base
components/
  three/              # Backdrop → Scene → LinkField (a cena 3D)
  ui/                 # Panel, Reveal
  links/              # tiles da bio
  portfolio/          # Hero, Philosophy, Skills, Projects, Education, Contact
data/profile.js       # todo o conteúdo do site
```

---

## ⚙️ Rodando localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/en/) 20 ou superior.

```bash
git clone https://github.com/usrJosephC/meus-links.git
```

```bash
cd meus-links && npm install && npm run dev
```

Acesse [`http://localhost:3000`](http://localhost:3000).

---

## 🖼️ Adicionando a capa de um projeto

Coloque o screenshot em `public/` e aponte o campo `image` em `data/profile.js`. Sem imagem, o card cai em uma ficha técnica desenhada com a stack do projeto — nunca em uma imagem quebrada.

---

## 📄 Licença

MIT.

Feito com ❤️ por **Joseph Cavalcante**.
