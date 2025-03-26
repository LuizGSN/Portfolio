import React from 'react';
import { Link } from 'react-router-dom';
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
  IconeTecnologia
} from './estilos';

// Importe os ícones das tecnologias
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

// Mapeamento de tecnologias para ícones
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

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Plataforma de E-commerce",
      descricao: "Sistema completo de loja virtual com carrinho, checkout e integração com pagamentos.",
      imagem: "https://via.placeholder.com/600x400/08D9D6/EAEAEA?text=E-commerce",
      tecnologias: ["React", "Node.js", "MongoDB", "Redux"]
    },
    {
      id: 2,
      titulo: "Aplicativo de Tarefas",
      descricao: "Organizador de tarefas com drag-and-drop, notificações e sincronização em tempo real.",
      imagem: "https://via.placeholder.com/600x400/FF2E63/EAEAEA?text=Task+App", 
      tecnologias: ["React", "Firebase", "TypeScript", "Styled Components"]
    }
  ];

  return (
    <SecaoProjetos id="projetos">
      <TituloSecao>Meus Projetos</TituloSecao>
      <GradeProjetos>
        {projetos.map(projeto => (
          <LinkProjeto to={`/projetos/${projeto.id}`} key={projeto.id}>
            <CartaoProjeto>
              <ImagemContainer>
                <ImagemProjeto src={projeto.imagem} alt={projeto.titulo} />
              </ImagemContainer>
              <InfoProjeto>
                <TituloProjeto>{projeto.titulo}</TituloProjeto>
                <DescricaoProjeto>{projeto.descricao}</DescricaoProjeto>
                <IconesTecnologia>
                  {projeto.tecnologias.map(tech => (
                    <IconeTecnologia key={tech} title={tech}>
                      {iconesTecnologias[tech] || <DiJavascript1 />}
                    </IconeTecnologia>
                  ))}
                </IconesTecnologia>
              </InfoProjeto>
            </CartaoProjeto>
          </LinkProjeto>
        ))}
      </GradeProjetos>
    </SecaoProjetos>
  );
}

export default Projetos;