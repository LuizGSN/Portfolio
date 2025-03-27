import styled, { keyframes } from 'styled-components';

export const SecaoHabilidades = styled.section`
  min-height: 100vh;
  padding: 5% 5%;
  background-color: var(--cor-fundo);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ColunaHardSkills = styled.div`
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  h3 {
    font-size: 2rem;
    color: var(--cor-primaria);
    margin-bottom: 2.5rem;
    text-align: center;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: var(--cor-destaque);
      margin: 1rem auto 0;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const GridHardSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`;

export const IconeHardSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--cor-texto-escuro);
  padding: 1.2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  svg {
    font-size: 3rem;
    color: var(--cor-primaria);
    transition: color 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    
    svg {
      color: var(--cor-destaque);
    }
  }
`;

export const ColunaSoftSkills = styled.div`
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);

  h3 {
    font-size: 2rem;
    color: var(--cor-primaria);
    margin-bottom: 2.5rem;
    text-align: center;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: var(--cor-destaque);
      margin: 1rem auto 0;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const ListaSoftSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

export const ItemSoftSkill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--cor-texto-escuro);
  padding: 1.2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2); /* Fundo semi-transparente */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg {
    font-size: 1.8rem;
    color: var(--cor-primaria);
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    svg{
      color: var(--cor-destaque);
    }
  }
`;