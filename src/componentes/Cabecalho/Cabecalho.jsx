import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ContainerCabecalho, 
  Logo, 
  Navegacao, 
  MenuMobile,
  MenuMobileContainer
} from './estilos';
import { FiMenu, FiX } from 'react-icons/fi';

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuAberto(false);

  return (
    <>
      <ContainerCabecalho className={scroll ? 'scroll' : ''}>
        <Logo as={Link} to="/">
          <span>Meu</span>Portfólio
        </Logo>
        
        <Navegacao>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link></li>
            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#habilidades" onClick={closeMenu}>Habilidades</a></li>
            <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          </ul>
        </Navegacao>
        
        <MenuMobile onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? <FiX size={24} /> : <FiMenu size={24} />}
        </MenuMobile>
      </ContainerCabecalho>

      {/* Menu Mobile */}
      <MenuMobileContainer $aberto={menuAberto}>
        <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Início</Link>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
        <a href="#projetos" onClick={closeMenu}>Projetos</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </MenuMobileContainer>
    </>
  );
}

export default Cabecalho;