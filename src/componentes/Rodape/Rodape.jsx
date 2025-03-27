import React from 'react';
import {
  ContainerRodape,
  ConteudoRodape,
  LinksRedeSocial,
  LinkSocial,
  Creditos
} from './estilos';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function Rodape() {
  return (
    <ContainerRodape>
      <ConteudoRodape>
        <LinksRedeSocial>
          <LinkSocial 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </LinkSocial>
          
          <LinkSocial 
            href="https://linkedin.com/in/seu-perfil" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </LinkSocial>
          
          <LinkSocial 
            href="mailto:seu-email@exemplo.com" 
            aria-label="Enviar e-mail"
          >
            <HiMail size={24} />
          </LinkSocial>
        </LinksRedeSocial>
        
        <Creditos>
          © {new Date().getFullYear()} Luiz Gonzaga - Feito com <FaHeart color="#ff6b6b" /> e React
        </Creditos>
      </ConteudoRodape>
    </ContainerRodape>
  );
}

export default Rodape;