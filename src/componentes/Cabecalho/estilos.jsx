import styled from 'styled-components';

export const ContainerCabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background-color: var(--cor-secundaria);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  &.scroll {
    padding: 1rem 5%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--cor-primaria);
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05);
    color: var(--cor-destaque);
  }

  span {
    color: var(--cor-fundo);
  }
`;

export const Navegacao = styled.nav`
  ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  li {
    position: relative;
  }

  a {
    font-weight: 500;
    color: var(--cor-fundo);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1.1rem;
    padding: 0.5rem 0;

    &:hover {
      color: var(--cor-primaria);
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--cor-destaque);
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }

    &.active {
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }

  svg {
    transition: transform 0.3s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MenuMobileContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $aberto }) => ($aberto ? '0' : '-100%')};
  width: 70%;
  height: 100vh;
  background: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1000;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    transition: color 0.3s;

    &:hover {
      color: #646cff;
    }
  }
`;