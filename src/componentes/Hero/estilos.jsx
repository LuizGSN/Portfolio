import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const piscaCursor = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SecaoHero = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  background-color: var(--cor-secundaria);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('src/assets/imagens/hero-pattern.svg') no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.1;
    z-index: 0;

    @media (max-width: 768px) {
      background-size: cover;
      opacity: 0.05;
    }
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const ConteudoHero = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out forwards;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const SubtituloHero = styled.h2`
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--cor-texto);
  line-height: 1.6;
  max-width: 100%;

  .texto-digitando {
    display: inline-block;
    min-height: 1.5em;
  }

  .cursor {
    display: inline-block;
    animation: ${piscaCursor} 0.7s infinite;
    color: var(--cor-primaria);
  }
`;

export const TituloHero = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1.5rem;
  color: var(--cor-destaque);
  line-height: 1.2;
  font-weight: 400;
  background: var(--cor-texto);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

export const BotaoHero = styled.button`
  padding: 1rem 2rem;
  background-color: var(--cor-primaria);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(100, 108, 255, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    background-color: var(--cor-destaque);
    box-shadow: 0 6px 20px rgba(100, 108, 255, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  svg {
    transition: transform 0.3s ease;
    margin-right: 8px;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid var(--cor-destaque);
    outline-offset: 3px;
  }
`;

export const RedesSociais = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
`;

export const IconeRedeSocial = styled.a`
  color: var(--cor-texto);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    color: var(--cor-destaque);
    opacity: 1;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;