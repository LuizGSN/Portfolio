import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ContainerCabecalho, 
  Logo, 
  Navegacao, 
  MenuMobile,
  MenuMobileContainer,
  BotaoTema
} from './estilos';
import { FiMenu, FiX } from 'react-icons/fi';

function Cabecalho({ alternarTema, temaDark }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path, isHash = false) => {
    setMenuAberto(false);
    
    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/', { state: { hash: path } });
      } else {
        setTimeout(() => {
          const element = document.getElementById(path.replace('#', ''));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      if (path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      navigate(path);
    }
  };

  useEffect(() => {
    if (location.state?.hash) {
      const element = document.getElementById(location.state.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuAberto(false);
  };

  return (
    <>
      <ContainerCabecalho className={scroll ? 'scroll' : ''}>
        <Logo as={Link} to="/" onClick={handleLogoClick}>
          <span>Luiz</span>Gonzaga
        </Logo>
        
        <Navegacao>
          <ul>
            <li>
              <Link 
                to="/"
                onClick={() => handleNavigation('/')}
                className={location.pathname === '/' ? 'active' : ''}
              >
                Início
              </Link>    
            </li>
            <li>
              <button onClick={() => handleNavigation('#sobre', true)}>
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('#habilidades', true)}>
                Habilidades
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('#projetos', true)}>
                Projetos
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation('#contato', true)}>
                Contato
              </button>
            </li>
            <li>
              <BotaoTema onClick={alternarTema}>
                {temaDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
              </BotaoTema>
            </li>
          </ul>
        </Navegacao>
        
        <MenuMobile onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? <FiX size={24} /> : <FiMenu size={24} />}
        </MenuMobile>
      </ContainerCabecalho>
      
      <MenuMobileContainer $aberto={menuAberto}>
        <button 
          onClick={() => handleNavigation('/')}
          className={location.pathname === '/' ? 'active' : ''}
        >
          Início
        </button>
        <button onClick={() => handleNavigation('#sobre', true)}>
          Sobre
        </button>
        <button onClick={() => handleNavigation('#habilidades', true)}>
          Habilidades
        </button>
        <button onClick={() => handleNavigation('#projetos', true)}>
          Projetos
        </button>
        <button onClick={() => handleNavigation('#contato', true)}>
          Contato
        </button>
        <BotaoTema onClick={alternarTema}>
          {temaDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
        </BotaoTema>
      </MenuMobileContainer>
    </>
  );
}

export default Cabecalho;