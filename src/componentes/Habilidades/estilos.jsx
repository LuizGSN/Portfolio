import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const IconeHabilidade = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--cor-texto-claro);
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const NomeHabilidade = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: var(--cor-texto-claro);
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const ItemHabilidade = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(37, 42, 52, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--cor-primaria);
    transition: height 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(37, 42, 52, 0.15);
    
    &::before {
      height: 100%;
    }
    
    ${IconeHabilidade} {
      animation: ${floatAnimation} 2s ease-in-out infinite;
      color: var(--cor-destaque);
    }
    
    ${NomeHabilidade} {
      color: white;
    }
  }
`;

export const SecaoHabilidades = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 5% 5%;
  background-color: var(--cor-fundo);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  scroll-snap-align: start;
`;

export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
  color: var(--cor-primaria);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--cor-destaque);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

export const GradeHabilidades = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1000px;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.5rem;
  }
`;