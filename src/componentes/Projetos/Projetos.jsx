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
      titulo: "Keeg Club | Blog Full-Stack",
      descricao:
        "Blog full-stack desenvolvido com React (frontend) e Node.js (backend), implementando autenticação segura via JWT e armazenamento de dados em SQLite. Projeto construído do zero, com integração fluida entre interfaces e API, além de um sistema completo de login.",
      imagem: "public/imagens/Interface Keeg-Club.png",
      tecnologias: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Sqlite",
        "Styled Components",
      ],
      linkRepositorio: "https://github.com/LuizGSN/Site-Keeg-Club",
      linkDemo: "#",
    },
    {
      id: 2,
      titulo: "Portfólio | Demonstração de Habilidades em Front-End",
      descricao:
        "Portfólio desenvolvido com React e JSX, criado do zero com estilização dinâmica via Styled Components. Inclui navegação fluida, ícones personalizados e design modular, refletindo minha abordagem técnica e atenção aos detalhes.",
      imagem: "public/imagens/Capa Portfólio.png",
      tecnologias: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Styled Components",
      ],
      linkRepositorio: "https://github.com/LuizGSN/Portfolio",
      linkDemo: "#",
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
