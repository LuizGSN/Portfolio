import React, { useState } from 'react';
import { 
  SecaoHero, 
  ConteudoHero,
  TituloHero, 
  SubtituloHero, 
  BotaoHero,
  HeroContainer,
  RedesSociais,
  IconeRedeSocial
} from './estilos';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  const [textoDigitado, setTextoDigitado] = useState('');
  const [estaDigitando, setEstaDigitando] = useState(true);
  const textoCompleto = React.useMemo(() => 
    "Full Stack Developer - Transformando problemas complexos em código simples!", 
  []);

  React.useEffect(() => {
    const velocidadeDigitacao = 50;
    const velocidadeApagamento = 30;
    const pausaCompleto = 2000;
    const pausaVazio = 500;

    const executarAnimacao = () => {
      if (estaDigitando) {
        if (textoDigitado.length < textoCompleto.length) {
          const delay = textoDigitado.length === 0 ? 150 : velocidadeDigitacao;
          let timeoutId = setTimeout(() => {
            setTextoDigitado(textoCompleto.substring(0, textoDigitado.length + 1));
          }, delay);
          return () => clearTimeout(timeoutId);
        } else {
          let timeoutId = setTimeout(() => setEstaDigitando(false), pausaCompleto);
          return () => clearTimeout(timeoutId);
        }
      } else {
        if (textoDigitado.length > 0) {
          let timeoutId = setTimeout(() => {
            setTextoDigitado(prev => prev.substring(0, prev.length - 1));
          }, velocidadeApagamento);
          return () => clearTimeout(timeoutId);
        } else {
          let timeoutId = setTimeout(() => setEstaDigitando(true), pausaVazio);
          return () => clearTimeout(timeoutId);
        }
      }
    };

    return executarAnimacao();
  }, [textoDigitado, estaDigitando, textoCompleto]);

  const handleDownloadCV = () => {
    const cvUrl = '/docs/LuizGSN-CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'LuizGSN-CV-novo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SecaoHero id="inicio">
      <HeroContainer>
        <ConteudoHero>
          <SubtituloHero>Oi oi, eu sou...</SubtituloHero>
          <TituloHero aria-live="polite">Luiz Gonzaga</TituloHero>
          <SubtituloHero aria-live="polite">
            <span className="texto-digitando" aria-label={textoCompleto}>
              {textoDigitado}
            </span>
            {estaDigitando && <span className="cursor" aria-hidden="true" />}
          </SubtituloHero>
          
          <BotaoHero 
            onClick={handleDownloadCV}
            aria-label="Baixar currículo"
          >
            <FaFileDownload style={{ marginRight: '8px' }} />
            Baixar Currículo
          </BotaoHero>

          <RedesSociais>
            <IconeRedeSocial 
              href="https://github.com/LuizGSN" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </IconeRedeSocial>
            <IconeRedeSocial 
              href="https://www.linkedin.com/in/luizgsn/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </IconeRedeSocial>
          </RedesSociais>
        </ConteudoHero>
      </HeroContainer>
    </SecaoHero>
  );
};

export default Hero;