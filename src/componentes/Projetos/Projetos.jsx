import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
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
  BotaoRepositorio
} from './estilos';

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
  DiSass
} from 'react-icons/di';
import { 
  SiTypescript, 
  SiNextdotjs,
  SiStyledcomponents,
  SiRedux,
  SiFramer
} from 'react-icons/si';

const Tecnologia = ({ nome }) => {
  const iconesTecnologias = {
    'React': <DiReact />,
    'Node.js': <DiNodejs />,
    'MongoDB': <DiMongodb />,
    'HTML5': <DiHtml5 />,
    'CSS3': <DiCss3 />,
    'JavaScript': <DiJavascript1 />,
    'TypeScript': <SiTypescript />,
    'Next.js': <SiNextdotjs />,
    'Styled Components': <SiStyledcomponents />,
    'Redux': <SiRedux />,
    'Git': <DiGit />,
    'GitHub': <DiGithubBadge />,
    'Firebase': <DiFirebase />,
    'Sass': <DiSass />,
    'Framer Motion': <SiFramer />
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
            {projeto.tecnologias.map(tech => (
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
      titulo: "Plataforma de E-commerce",
      descricao: "Sistema completo de loja virtual com carrinho, checkout e integração com pagamentos.",
      imagem: "src/assets/imagens/exemplo1.webp",
      tecnologias: ["React", "Node.js", "MongoDB", "Redux"],
      linkRepositorio: "https://github.com/seu-usuario/ecommerce",
      linkDemo: "#"
    },
    {
      id: 2,
      titulo: "Aplicativo de Tarefas",
      descricao: "Organizador de tarefas com drag-and-drop, notificações e sincronização em tempo real.",
      imagem: "src/assets/imagens/exemplo2.webp", 
      tecnologias: ["React", "Firebase", "TypeScript", "Styled Components"],
      linkRepositorio: "https://github.com/seu-usuario/task-app",
      linkDemo: "#"
    }
  ];

  return (
    <SecaoProjetos id="projetos">
      <TituloSecao>Meus Projetos</TituloSecao>
      <GradeProjetos>
        {projetos.map(projeto => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </GradeProjetos>
    </SecaoProjetos>
  );
}

export default Projetos;