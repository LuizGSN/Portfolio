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
    "Desenvolvedor Fullstack com expertise em criar soluções web performáticas", 
  []);

  React.useEffect(() => {
    let timeoutId;
    const velocidade = estaDigitando ? (textoDigitado.length === 0 ? 150 : 50) : 30;
    
    const timeout = () => {
      timeoutId = setTimeout(() => {
        if (estaDigitando) {
          if (textoDigitado.length < textoCompleto.length) {
            setTextoDigitado(textoCompleto.substring(0, textoDigitado.length + 1));
          } else {
            setTimeout(() => setEstaDigitando(false), 2000);
          }
        } else if (textoDigitado.length > 0) {
          setTextoDigitado(textoCompleto.substring(0, textoDigitado.length - 1));
          if (textoDigitado.length === 1) {
            setEstaDigitando(true);
          }
        }
      }, velocidade);
    };

    timeout();
    return () => clearTimeout(timeoutId);
  }, [textoDigitado, estaDigitando, textoCompleto]);

  const handleDownloadCV = () => {
    const cvUrl = '/caminho/para/seu-curriculo.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Curriculo-Luiz-Gonzaga.pdf';
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
              href="https://github.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </IconeRedeSocial>
            <IconeRedeSocial 
              href="https://linkedin.com/in/seu-perfil" 
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