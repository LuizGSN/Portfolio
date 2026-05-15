import React from 'react';
import { SecaoHabilidades, TituloSecao, ContainerGrid, ColunaSoftSkills, ListaSoftSkills, ItemSoftSkill, ColunaHardSkills, IconeHardSkill, GridHardSkills} from './estilos';
import { DiJavascript1, DiReact, DiNodejs, DiHtml5, DiCss3, DiGit, DiGithubBadge} from 'react-icons/di';
import {FaUsers, FaComments, FaLightbulb, FaHandsHelping, FaClock} from 'react-icons/fa';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { SiDocker, SiExpress, SiPostgresql, SiStyledcomponents, SiTailwindcss, SiVercel, SiVite } from 'react-icons/si';

function Habilidades() {
  const hardSkills = [
    { nome: 'JavaScript', icone: <DiJavascript1 /> },
    { nome: 'React', icone: <DiReact /> },
    { nome: 'Vite', icone: <SiVite /> },
    { nome: 'Node.js', icone: <DiNodejs /> },
    { nome: 'Express', icone: <SiExpress /> },
    { nome: 'PostgreSQL', icone: <SiPostgresql /> },
    { nome: 'Tailwind CSS', icone: <SiTailwindcss /> },
    { nome: 'Styled Components', icone: <SiStyledcomponents /> },
    { nome: 'Docker', icone: <SiDocker /> },
    { nome: 'Vercel', icone: <SiVercel /> },
    { nome: 'HTML5', icone: <DiHtml5 /> },
    { nome: 'CSS3', icone: <DiCss3 /> },
    { nome: 'Git', icone: <DiGit /> },
    { nome: 'GitHub', icone: <DiGithubBadge /> },
  ];

  const softSkills = [
    { nome: "Trabalho em Equipe", icone: <FaUsers /> },
    { nome: "Comunicação Clara", icone: <FaComments /> },
    { nome: "Resolução de Problemas", icone: <FaLightbulb /> },
    { nome: "Pensamento Crítico", icone: <FaHandsHelping /> },
    { nome: "Adaptabilidade", icone: <MdOutlineChangeCircle /> },
    { nome: "Gestão de Tempo", icone: <FaClock /> }
  ];

  return (
    <SecaoHabilidades id="habilidades">
      <TituloSecao>Minhas Habilidades</TituloSecao>
      
      <ContainerGrid>
        <ColunaSoftSkills>
          <h3>Soft Skills</h3>
            <ListaSoftSkills>
              {softSkills.map((skill, index) => (
                <ItemSoftSkill key={index}>
                  {skill.icone} {skill.nome}
                </ItemSoftSkill>
              ))}
            </ListaSoftSkills>
        </ColunaSoftSkills>

        <ColunaHardSkills>
          <h3>Hard Skills</h3>
            <GridHardSkills>
              {hardSkills.map((skill, index) => (
                <IconeHardSkill key={index} title={skill.nome}>
                  {skill.icone}
                </IconeHardSkill>
              ))}
            </GridHardSkills>
        </ColunaHardSkills>
      </ContainerGrid>
    </SecaoHabilidades>
  );
}

export default Habilidades;
