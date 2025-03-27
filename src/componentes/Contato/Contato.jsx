import React from 'react';
import {
  SecaoContato,
  TituloSecao,
  ContainerContato,
  MensagemCTA,
  RedesSociais,
  LinkRedeSocial,
  BotaoWhatsapp,
  TextoContato
} from './estilos';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function Contato() {
  return (
    <SecaoContato id="contato">
      <TituloSecao>Vamos Conversar?</TituloSecao>
      
      <ContainerContato>
        <MensagemCTA>
          Estou aberto a novas oportunidades e colaborações. Se você está procurando um desenvolvedor comprometido, criativo e com habilidades técnicas, adoraria bater um papo!
        </MensagemCTA>
        
        <TextoContato>
          Entre em contato através das minhas redes sociais ou WhatsApp:
        </TextoContato>
        
        <RedesSociais>
          <LinkRedeSocial 
            href="https://linkedin.com/in/seu-perfil" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </LinkRedeSocial>
          
          <LinkRedeSocial 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </LinkRedeSocial>
          
          <LinkRedeSocial 
            href="mailto:seu-email@exemplo.com" 
            aria-label="Email"
          >
            <HiMail />
            <span>Email</span>
          </LinkRedeSocial>
        </RedesSociais>
        
        <BotaoWhatsapp 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          Falar pelo WhatsApp
        </BotaoWhatsapp>
        
      </ContainerContato>
    </SecaoContato>
  );
}

export default Contato;