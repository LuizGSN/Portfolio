import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const ImagemProjeto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

export const TituloProjeto = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--cor-secundaria);
  transition: color 0.3s ease;
  font-weight: 600;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const CartaoProjeto = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(37, 42, 52, 0.1);
  transition: all 0.4s ease;
  background: white;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(37, 42, 52, 0.15);
    
    ${ImagemProjeto} {
      transform: scale(1.05);
    }
    
    ${TituloProjeto} {
      color: var(--cor-destaque);
    }
  }
`;

export const SecaoProjetos = styled.section`
  min-height: 100vh;
  padding: 8rem 5%;
  background-color: var(--cor-fundo);
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
`;

export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
  color: var(--cor-secundaria);
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
  }
`;

export const ImagemContainer = styled.div`
  height: 220px;
  overflow: hidden;
`;

export const InfoProjeto = styled.div`
  padding: 1.8rem;
`;

export const DescricaoProjeto = styled.p`
  color: var(--cor-texto-claro);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
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

export const IconesTecnologia = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const IconeTecnologia = styled.div`
  font-size: 1.8rem;
  color: var(--cor-secundaria);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--cor-destaque);
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;