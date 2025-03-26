import React from 'react';
import { 
  SecaoHabilidades, 
  TituloSecao, 
  GradeHabilidades, 
  ItemHabilidade, 
  IconeHabilidade, 
  NomeHabilidade 
} from './estilos';
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiHtml5, 
  DiCss3, 
  DiDatabase,
  DiGit,
  DiGithubBadge,
  DiPython
} from 'react-icons/di';
import { SiTypescript, SiStyledcomponents } from 'react-icons/si';

function Habilidades() {
  const habilidades = [
    { nome: 'JavaScript', icone: <DiJavascript1 /> },
    { nome: 'TypeScript', icone: <SiTypescript /> },
    { nome: 'React', icone: <DiReact /> },
    { nome: 'Python', icone: <DiPython /> },
    { nome: 'Node.js', icone: <DiNodejs /> },
    { nome: 'HTML5', icone: <DiHtml5 /> },
    { nome: 'CSS3', icone: <DiCss3 /> },
    { nome: 'Styled Components', icone: <SiStyledcomponents /> },
    { nome: 'Banco de Dados', icone: <DiDatabase /> },
    { nome: 'Git', icone: <DiGit /> },
    { nome: 'GitHub', icone: <DiGithubBadge /> },
  ];

  return (
    <SecaoHabilidades id="habilidades">
      <TituloSecao>Minhas Habilidades</TituloSecao>
      <GradeHabilidades>
        {habilidades.map((habilidade, index) => (
          <ItemHabilidade key={index}>
            <IconeHabilidade>{habilidade.icone}</IconeHabilidade>
            <NomeHabilidade>{habilidade.nome}</NomeHabilidade>
          </ItemHabilidade>
        ))}
      </GradeHabilidades>
    </SecaoHabilidades>
  );
}

export default Habilidades;