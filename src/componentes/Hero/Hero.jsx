import React, { useState, useEffect } from 'react';
import { 
  SecaoHero, 
  ConteudoHero,
  TituloHero, 
  SubtituloHero, 
  BotaoHero,
  RedesSociais,
  HeroImagem,
  HeroContainer
} from './estilos';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  const [nomeDigitado, setNomeDigitado] = useState('');
  const [estaDigitando, setEstaDigitando] = useState(true);
  const nomeCompleto = "Luiz Gonzaga";

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (estaDigitando) {
        if (nomeDigitado.length < nomeCompleto.length) {
          setNomeDigitado(nomeCompleto.substring(0, nomeDigitado.length + 1));
        } else {
          setEstaDigitando(false);
        }
      } else if (!estaDigitando && nomeDigitado.length > 0) {
        setNomeDigitado(nomeCompleto.substring(0, nomeDigitado.length - 1));
        if (nomeDigitado.length === 1) {
          setEstaDigitando(true);
        }
      }
    }, 150);


    return () => clearTimeout(timeout);
  }, [nomeDigitado, estaDigitando]);

  return (
    <SecaoHero id="inicio">
      <HeroContainer>
        <ConteudoHero>
          <SubtituloHero>Olá, eu sou</SubtituloHero>
          <TituloHero>
            <span className="nome-digitando">{nomeDigitado}</span>
            <span className="cursor">|</span>
          </TituloHero>
          <SubtituloHero>
            Desenvolvedor Fullstack com expertise em criar soluções web performáticas
          </SubtituloHero>
          <BotaoHero href="#projetos">
            Ver Meus Projetos
          </BotaoHero>
          
          <RedesSociais>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
          </RedesSociais>
        </ConteudoHero>

        <HeroImagem>
          <div className="foto-container">
            <img src="src/assets/imagens/LuizGSN-completo.jpg" alt="Luiz Gonzaga" />
            <div className="destaque"></div>
          </div>
        </HeroImagem>
      </HeroContainer>
    </SecaoHero>
  );
};

export default Hero;