import React from 'react';
import {
  SecaoContato,
  TituloSecao,
  ContainerContato,
  MensagemCTA,
  BotaoWhatsapp,
  RedesSociaisInfo
} from './estilos';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';

function Contato() {
  return (
    <SecaoContato id="contato">
      <TituloSecao>Vamos Conversar?</TituloSecao>
      
      <ContainerContato>
        <MensagemCTA>
          Estou aberto a novas oportunidades e colaborações. Se você está procurando um desenvolvedor comprometido, criativo e com habilidades técnicas, adoraria bater um papo!
        </MensagemCTA>
        <BotaoWhatsapp 
          href="https://wa.me/5585996189080" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          Falar pelo WhatsApp
        </BotaoWhatsapp>
        <RedesSociaisInfo>
          Minhas redes sociais e e-mail estão logo abaixo <br />
          <FaArrowDown />
        </RedesSociaisInfo>        
      </ContainerContato>
    </SecaoContato>
  );
}

export default Contato;