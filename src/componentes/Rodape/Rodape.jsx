import React from 'react';
import {
  ContainerRodape,
  ConteudoRodape,
  LinksRedeSocial,
  LinkSocial,
  Creditos
} from './estilos';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function Rodape() {
  return (
    <ContainerRodape>
      <ConteudoRodape>
        <LinksRedeSocial>

          <LinkSocial 
            href="https://www.linkedin.com/in/luizgsn/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </LinkSocial>

          <LinkSocial 
            href="https://github.com/LuizGSN" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </LinkSocial>
          
          <LinkSocial 
            href="mailto:luiz_sa7@hotmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar e-mail"
          >
            <HiMail size={24} />
          </LinkSocial>
        </LinksRedeSocial>
        
        <Creditos>
          © {new Date().getFullYear()} Luiz Gonzaga - Todos os direitos reservados
        </Creditos>
      </ConteudoRodape>
    </ContainerRodape>
  );
}

export default Rodape;