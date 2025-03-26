import React from 'react';
import { 
  SecaoSobre, 
  ContainerSobre, 
  TituloSecao, 
  ConteudoSobre, 
  TextoSobre, 
  ImagemSobre 
} from './estilos';

function Sobre() {
  return (
    <SecaoSobre id="sobre">
      <ContainerSobre>
        <TituloSecao>Sobre Mim</TituloSecao>
        <ConteudoSobre>
          <TextoSobre>
            <p>
              Sou um desenvolvedor fullstack com experiência em criar soluções web completas e eficientes. 
              Minha paixão é transformar ideias em produtos digitais funcionais e bonitos.
            </p>
            <p>
              Trago uma abordagem única para resolver problemas 
              complexos com código limpo e eficiente.
            </p>
            <p>
              Quando não estou programando, gosto de jogos, animes, filmes e séries, que me ajudam a manter 
              a criatividade e o equilíbrio.
            </p>
          </TextoSobre>
          <ImagemSobre>
            <img src="src/assets/imagens/LuizGSN-completo2.jpg" alt="Minha foto" />
          </ImagemSobre>
        </ConteudoSobre>
      </ContainerSobre>
    </SecaoSobre>
  );
}

export default Sobre;