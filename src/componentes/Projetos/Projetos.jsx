import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SecaoProjetos,
  TituloSecao,
  CarrosselContainer,
  CarrosselViewport,
  CarrosselTrilha,
  SlideProjeto,
  ControleCarrossel,
  IndicadoresCarrossel,
  IndicadorCarrossel,
  ContadorCarrossel,
  CartaoProjeto,
  ImagemContainer,
  ImagemProjeto,
  InfoProjeto,
  TituloProjeto,
  DescricaoProjeto,
  IconesTecnologia,
  IconeTecnologia,
  OverlayImagem,
  BotoesAcao,
  BotaoRepositorio,
} from "./estilos";

import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiGit,
  DiGithubBadge,
  DiFirebase,
  DiSass,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiRedux,
  SiFramer,
  SiSqlite,
  SiAxios,
  SiReactrouter,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiDocker,
  SiVite,
} from "react-icons/si";

const Tecnologia = ({ nome }) => {
  const iconesTecnologias = {
    React: <DiReact />,
    "Node.js": <DiNodejs />,
    MongoDB: <DiMongodb />,
    HTML5: <DiHtml5 />,
    CSS3: <DiCss3 />,
    JavaScript: <DiJavascript1 />,
    TypeScript: <SiTypescript />,
    "Next.js": <SiNextdotjs />,
    "Styled Components": <SiStyledcomponents />,
    Redux: <SiRedux />,
    Git: <DiGit />,
    GitHub: <DiGithubBadge />,
    Firebase: <DiFirebase />,
    Sass: <DiSass />,
    "Framer Motion": <SiFramer />,
    Sqlite: <SiSqlite />,
    Axios: <SiAxios />,
    Reactrouter: <SiReactrouter />,
    "React Router": <SiReactrouter />,
    "Tailwind CSS": <SiTailwindcss />,
    PostgreSQL: <SiPostgresql />,
    Express: <SiExpress />,
    Docker: <SiDocker />,
    Vite: <SiVite />,
    Neon: <SiPostgresql />,
    Render: <DiNodejs />,
    Vercel: <DiGithubBadge />,
    JWT: <DiFirebase />,
  };

  return (
    <IconeTecnologia>
      {iconesTecnologias[nome] || <DiJavascript1 />}
      <span className="tooltip">{nome}</span>
    </IconeTecnologia>
  );
};

const ProjetoCard = ({ projeto }) => {
  return (
    <CartaoProjeto>
      <ImagemContainer>
        <ImagemProjeto
          src={projeto.imagem}
          alt={projeto.titulo}
          loading="lazy"
        />
        <OverlayImagem />
        <BotoesAcao>
          {projeto.linkRepositorio && (
            <BotaoRepositorio
              href={projeto.linkRepositorio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> GitHub
            </BotaoRepositorio>
          )}
          <BotaoRepositorio
            href={projeto.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projeto
            <FiExternalLink />
          </BotaoRepositorio>
        </BotoesAcao>
      </ImagemContainer>
      <InfoProjeto>
        <TituloProjeto>{projeto.titulo}</TituloProjeto>
        <DescricaoProjeto>{projeto.descricao}</DescricaoProjeto>
        <IconesTecnologia>
          {projeto.tecnologias.map((tech) => (
            <Tecnologia key={tech} nome={tech} />
          ))}
        </IconesTecnologia>
      </InfoProjeto>
    </CartaoProjeto>
  );
};

function Projetos() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const projetos = [
    {
      id: 1,
      titulo: "FinanceTrack | App Financeiro Minimalista Fullstack",
      descricao:
        "Aplicacao fullstack para controle financeiro pessoal, com interface minimalista em tema claro/escuro, autenticacao JWT, CRUD de receitas e despesas, dashboard, analytics, controle de investimentos e acesso demo disponivel no login.",
      imagem: "/imagens/FinanceTrack.png",
      tecnologias: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "JWT",
        "Express",
        "Recharts",
        "Docker",
      ],
      linkRepositorio: "https://github.com/LuizGSN/FinanceTrack",
      linkDemo: "https://financetrack-rust.vercel.app",
    },
    {
      id: 2,
      titulo: "Keeg Store | Loja Virtual com React e Styled Components",
      descricao:
        "Keeg Store é uma aplicação e-commerce construída com React e estilizada com Styled Components. Conta com carrossel de produtos, sistema de favoritos (wishlist), carrinho de compras e navegação entre páginas com React Router, oferecendo uma experiência fluida e interativa.",
      imagem: "/imagens/Keeg-store.png",
      tecnologias: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Styled Components",
        "React Router",
      ],
      linkRepositorio: "https://github.com/LuizGSN/Keeg-store",
      linkDemo: "https://keeg-store.vercel.app",
    },
    {
      id: 3,
      titulo: "TaskTrack | Gerenciamento de Tarefas Fullstack",
      descricao:
        "Aplicação fullstack de gerenciamento de tarefas com API REST, filtros de listagem, prioridade urgente, persistência em PostgreSQL via Neon e interface React com dark mode. Backend publicado no Render e frontend publicado na Vercel.",
      imagem: "/imagens/TaskTrack.png",
      tecnologias: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Neon",
        "Render",
        "Vercel",
      ],
      linkRepositorio: "https://github.com/LuizGSN/TaskTrack",
      linkDemo: "https://task-track-client.vercel.app",
    },
    {
      id: 4,
      titulo: "Portfólio | Demonstração de Habilidades em Front-End",
      descricao:
        "Portfólio desenvolvido com React e JSX, criado do zero com estilização dinâmica via Styled Components. Inclui navegação fluida, ícones personalizados e design modular, refletindo minha abordagem técnica e atenção aos detalhes.",
      imagem: "/imagens/Capa Portfólio.png",
      tecnologias: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Styled Components",
      ],
      linkRepositorio: "https://github.com/LuizGSN/Portfolio",
      linkDemo: "https://portfolio-luizgsn.vercel.app",
    },
  ];

  const irParaAnterior = () => {
    setIndiceAtual((indice) => (indice === 0 ? projetos.length - 1 : indice - 1));
  };

  const irParaProximo = () => {
    setIndiceAtual((indice) => (indice === projetos.length - 1 ? 0 : indice + 1));
  };

  const projetosVisiveis = Array.from({ length: Math.min(3, projetos.length) }, (_, offset) => (
    projetos[(indiceAtual + offset) % projetos.length]
  ));

  return (
    <SecaoProjetos id="projetos">
      <TituloSecao>Meus Projetos</TituloSecao>
      <CarrosselContainer aria-label="Carrossel de projetos">
        <ControleCarrossel
          type="button"
          onClick={irParaAnterior}
          aria-label="Projeto anterior"
        >
          <FiChevronLeft />
        </ControleCarrossel>

        <CarrosselViewport>
          <CarrosselTrilha>
            {projetosVisiveis.map((projeto) => (
              <SlideProjeto key={`${indiceAtual}-${projeto.id}`}>
                <ProjetoCard projeto={projeto} />
              </SlideProjeto>
            ))}
          </CarrosselTrilha>
        </CarrosselViewport>

        <ControleCarrossel
          type="button"
          onClick={irParaProximo}
          aria-label="Proximo projeto"
        >
          <FiChevronRight />
        </ControleCarrossel>
      </CarrosselContainer>

      <IndicadoresCarrossel aria-label="Selecionar projeto">
        {projetos.map((projeto, index) => (
          <IndicadorCarrossel
            key={projeto.id}
            type="button"
            $ativo={index === indiceAtual}
            onClick={() => setIndiceAtual(index)}
            aria-label={`Ir para ${projeto.titulo}`}
          />
        ))}
      </IndicadoresCarrossel>

      <ContadorCarrossel>
        {String(indiceAtual + 1).padStart(2, "0")} / {String(projetos.length).padStart(2, "0")}
      </ContadorCarrossel>
    </SecaoProjetos>
  );
}

export default Projetos;
