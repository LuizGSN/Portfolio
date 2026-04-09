# Portfólio Pessoal — LuizGSN
Portfólio pessoal desenvolvido com React, exibindo projetos, habilidades e informações profissionais de forma moderna e responsiva.

## 🛡️ Badges
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react) ![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite) ![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?style=for-the-badge&logo=styled-components) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer) ![Vercel](https://img.shields.io/badge/Vercel-Analytics-000000?style=for-the-badge&logo=vercel) ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Funcionalidades
- **Tema claro/escuro:** toggle com persistência em `localStorage`
- **Efeito de digitação:** texto animado no Hero com velocidade controlada
- **Navegação suave:** scroll animado entre seções e highlight automático via Intersection Observer
- **Menu responsivo:** mobile menu com animações e botão de toggle de tema
- **Download de currículo:** botão para baixar PDF do currículo atualizado
- **Integração com redes sociais:** links para GitHub, LinkedIn e WhatsApp
- **Analytics e Performance:** Vercel Analytics + Speed Insights integrados

## 🛠️ Stack Tecnológica
| Frontend | Estilização | Infra/Deploy |
|---|---|---|
| React 19 | Styled Components 6 | Vercel |
| Vite 6 | Framer Motion 12 | Vercel Analytics |
| React Router DOM 7 | React Icons 5 | Vite (build) |
|  |  | ESLint 9 |

## 📋 Pré-requisitos
- Node.js >= 20
- npm

## 🚀 Instruções de Instalação
1. **Clone o repositório:** `git clone https://github.com/LuizGSN/Portfolio.git && cd Portfolio`
2. **Instale as dependências:** `npm install`
3. **Inicie o servidor de desenvolvimento:** `npm run dev`
4. **Acesse no navegador:** `http://localhost:5173`

## 📜 Scripts Disponíveis
| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run preview` | Preview do build de produção localmente |
| `npm run lint` | Executa ESLint para verificar erros de código |
| `npm run deploy` | Build + deploy automático via `gh-pages` |

## 🌐 Instruções de Deploy
- **Vercel (recomendado):** Conecte o repositório no painel da Vercel e configure o build command como `npm run build` com output directory `dist`. Deploy automático a cada push.
- **GitHub Pages:** Execute `npm run deploy` para gerar e publicar automaticamente na branch `gh-pages`.

## 📁 Estrutura do Projeto
```
Portfolio/
├── public/
│   ├── docs/
│   │   └── LuizGSN-CV.pdf          # Currículo para download
│   ├── imagens/                     # Imagens dos projetos e foto pessoal
│   └── favicon-32x32.png
├── src/
│   ├── assets/
│   │   └── estilos/
│   │       ├── Tema.jsx             # Definição de tema claro/escuro
│   │       └── EstiloGlobal.jsx     # Estilos globais com CSS-in-JS
│   ├── componentes/
│   │   ├── Cabecalho/               # Navbar com navegação e toggle de tema
│   │   ├── Hero/                    # Seção principal com efeito de digitação
│   │   ├── Sobre/                   # Informações profissionais e formação
│   │   ├── Habilidades/             # Hard skills e soft skills
│   │   ├── Projetos/                # Cards dos projetos com tech badges
│   │   ├── Contato/                 # CTA e botão de WhatsApp
│   │   └── Rodape/                  # Links sociais e copyright
│   ├── paginas/
│   │   └── PaginaInicial.jsx        # Página principal que agrupa componentes
│   ├── App.jsx                      # Componente raiz com Router e ThemeProvider
│   └── main.jsx                     # Entry point da aplicação
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🔒 Boas Práticas Aplicadas
- **Acessibilidade:** `aria-label`, `aria-live`, `rel="noopener noreferrer"` em links externos
- **Performance:** lazy loading em imagens, code splitting com Vite, tree-shaking de dependências
- **SEO:** meta tags otimizadas, semântica HTML, estrutura de headings consistente
- **Manutenibilidade:** componentes modulares, estilos isolados, ESLint configurado

## 📁 Licença
- **Licença:** MIT
- **Autor:** [Luiz Gonzaga](https://github.com/LuizGSN) — Desenvolvedor Full Stack | Estudante de Análise e Desenvolvimento de Sistemas
