import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SecaoProjetos = styled.section`
  min-height: 100vh;
  padding: 5rem 5%;
  background-color: var(--cor-fundo);
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
  color: var(--cor-primaria);
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;
  
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

export const GradeProjetos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    gap: 2rem;
  }
`;

export const LinkProjeto = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  
  &:hover {
    text-decoration: none;
  }
`;

export const ImagemContainer = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const ImagemProjeto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.3s ease;
`;

export const InfoProjeto = styled.div`
  padding: 1.5rem;
  background: var(--cor-secundaria);

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

export const TituloProjeto = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--cor-texto);
  transition: color 0.3s ease;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DescricaoProjeto = styled.p`
  color: var(--cor-texto-claro);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const IconesTecnologia = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const IconeTecnologia = styled.div`
  position: relative;
  font-size: 1.8rem;
  color: var(--cor-primaria);
  transition: all 0.3s ease;
  cursor: default;
  
  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--cor-texto);
    color: var(--cor-fundo);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.7rem;
    opacity: 0;
    transition: opacity 0.3s;
    white-space: nowrap;
    pointer-events: none;
    margin-bottom: 5px;
  }

  &:hover {
    color: var(--cor-destaque);
    transform: scale(1.1);
    
    .tooltip {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CartaoProjeto = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  background: var(--cor-secundaria);
  position: relative;
  z-index: 1;
  will-change: transform;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    
    ${ImagemProjeto} {
      transform: scale(1.05);
      filter: brightness(0.9);
    }

    ${TituloProjeto} {
      color: var(--cor-destaque);
    }
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const OverlayImagem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;

  ${CartaoProjeto}:hover & {
    opacity: 1;
  }
`;

export const BotoesAcao = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  opacity: 0;
  display: flex;
  gap: 1.5rem;
  z-index: 2;
  transition: all 0.3s ease;

  ${CartaoProjeto}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  @media (max-width: 480px) {
    gap: 1rem;
    bottom: 15px;
    flex-direction: column;
    align-items: center;
  }
`;

export const BotaoRepositorio = styled.a`
  padding: 0.7rem 1.3rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background: var(--cor-destaque);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;

export const BotaoProjeto = styled(Link)`
  padding: 0.7rem 1.3rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background: var(--cor-destaque);
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
    font-size: 1.1rem;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
`;