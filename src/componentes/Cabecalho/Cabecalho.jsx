import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { 
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  MobileMenuButton,
  MobileMenu,
  ThemeToggle
} from './estilos';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const navItems = [
  { label: 'Início', path: '/', isHash: false },
  { label: 'Sobre', path: '#sobre', isHash: true },
  { label: 'Habilidades', path: '#habilidades', isHash: true },
  { label: 'Projetos', path: '#projetos', isHash: true },
  { label: 'Contato', path: '#contato', isHash: true }
];

export default function Cabecalho({ alternarTema, temaDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' && !temaDark) {
      alternarTema();
    }
  }, []);

  const handleToggleTheme = () => {
    const newTheme = !temaDark;
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    alternarTema();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path, isHash = false) => {
    setMobileOpen(false);
    
    if (isHash) {
      if (location.pathname !== '/') {
        navigate('/', { state: { hash: path } });
      } else {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          const element = document.getElementById(path.replace('#', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      if (path === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(path);
    }
  };

  const isActive = (path, isHash) => {
    if (path === '/' && !isHash) {
      const isTopo = window.scrollY < 100;
      const isHomePage = location.pathname === '/';
      const noHash = !location.hash;
      return (isTopo && !activeSection) || (isHomePage && noHash && isTopo);
    }
    if (isHash) {
      return activeSection === path || location.hash === path;
    }
    return location.pathname === path;
  };

  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash);
    } else if (location.pathname === '/' && window.scrollY < 100) {
      setActiveSection(null);
    }
  }, [location]);

  useEffect(() => {
    const checkInitialSection = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView();
            setActiveSection(location.hash);
          }, 100);
        }
      } else if (window.scrollY < 100) {
        setActiveSection(null);
      }
    };

    checkInitialSection();
  }, []);

  useEffect(() => {
    if (location.state?.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.state.hash.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <NavbarContainer $scrolled={scrolled}>
        <NavLogo 
          as={Link} 
          to="/" 
          onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}
        >
          <span>Luiz</span>Gonzaga
        </NavLogo>
        
        <NavMenu>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              href={item.path}
              $active={isActive(item.path, item.isHash)}
              onClick={(e) => { e.preventDefault(); handleNavigation(item.path, item.isHash); }}
            >
              {item.label}
            </NavItem>
          ))}
          
          <ThemeToggle onClick={handleToggleTheme} $temaDark={temaDark}>
            <FiSun className="sun" />
            <FiMoon className="moon" />
          </ThemeToggle>
        </NavMenu>

        <MobileMenuButton onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
      </NavbarContainer>

      <MobileMenu $open={mobileOpen}>
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            as="button"
            $active={isActive(item.path, item.isHash)}
            onClick={() => handleNavigation(item.path, item.isHash)}
          >
            {item.label}
          </NavItem>
        ))}
        <ThemeToggle onClick={handleToggleTheme} $temaDark={temaDark}>
          <FiSun className="sun" />
          <FiMoon className="moon" />
        </ThemeToggle>
      </MobileMenu>
    </>
  );
}