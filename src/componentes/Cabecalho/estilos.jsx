import styled from 'styled-components';

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ $scrolled }) => $scrolled ? '1.5rem 5%' : '1.5rem 5%'};
  background: ${({ theme }) => theme.fundo + 'cc'};
  backdrop-filter: blur(12px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${({ theme }) => theme.primaria + '20'};
`;

export const NavLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primaria};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.destaque};
    transform: translateY(-2px);
  }

  span {
    color: ${({ theme }) => theme.primaria};
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  position: relative;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  color: ${({ theme, $active }) => $active ? theme.destaque : theme.primaria};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
  background: none;
  border: none;
  font-family: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => $active ? '100%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.destaque};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.destaque};
    
    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primaria};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: ${({ theme }) => theme.fundo + 'ee'};
  backdrop-filter: blur(15px);
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transform: ${({ $open }) => $open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;

  ${NavItem} {
    font-size: 1.2rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaria + '20'};
  }
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.fundo};
  border: 2px solid ${({ theme }) => theme.primaria};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  .sun, .moon {
    position: absolute;
    transition: all 0.3s ease;
  }

  .sun {
    opacity: ${({ $temaDark }) => $temaDark ? 0 : 1};
    transform: ${({ $temaDark }) => $temaDark ? 'translateY(50px)' : 'translateY(0)'};
  }

  .moon {
    color: var(--cor-primaria);
    opacity: ${({ $temaDark }) => $temaDark ? 1 : 0};
    transform: ${({ $temaDark }) => $temaDark ? 'translateY(0)' : 'translateY(-50px)'};
  }

  &:hover {
    transform: rotate(30deg);
  }
`;