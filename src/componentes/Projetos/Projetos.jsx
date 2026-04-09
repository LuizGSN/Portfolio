import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SecaoProjetos,
  TituloSecao,
  GradeProjetos,
  LinkProjeto,
  CartaoProjeto,
  ImagemContainer,
  ImagemProjeto,
  InfoProjeto,
  TituloProjeto,
  DescricaoProjeto,
  IconesTecnologia,
  IconeTecnologia,
  BotaoProjeto,
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
    "Tailwind CSS": <SiTailwindcss />,
    PostgreSQL: <SiPostgresql />,
    Express: <SiExpress />,
    Docker: <SiDocker />,
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
  const projetos = [
    {
      id: 1,
      titulo: "FinanceTrack | Controle Financeiro Pessoal Fullstack",
      descricao:
        "Aplicação fullstack para controle financeiro pessoal, com dashboard interativo, CRUD completo de receitas e despesas, filtros por período, gráficos visuais (pizza, barras e linhas) e análise automática de perfil e hábitos financeiros. Autenticação segura com JWT e bcrypt.",
      imagem: "/imagens/FinanceTrack.png",
      tecnologias: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "JWT",
        "Express",
        "Recharts",
        "Docker"
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
        "React Router"
      ],
      linkRepositorio: "https://github.com/LuizGSN/Keeg-store",
      linkDemo: "https://keeg-store.vercel.app",
    },
    {
      id: 3,
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

  return (
    <SecaoProjetos id="projetos">
      <TituloSecao>Meus Projetos</TituloSecao>
      <GradeProjetos>
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </GradeProjetos>
    </SecaoProjetos>
  );
}

export default Projetos;
