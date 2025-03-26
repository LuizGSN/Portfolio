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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const SecaoHero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5%;
  background: linear-gradient(135deg, var(--cor-fundo) 0%, #d1d1d1 100%);
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
    background-position: right center;
    background-size: contain;
    opacity: 0.1;
    z-index: 0;

    @media (max-width: 768px) {
      background-size: cover;
      opacity: 0.05;
    }
  }
`;

export const ConteudoHero = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out forwards;
`;

export const TituloHero = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin-bottom: 1.5rem;
  color: var(--cor-secundaria);
  line-height: 1.2;
  font-weight: 700;
  min-height: 1.2em;

  .nome-digitando {
    color: var(--cor-destaque);
  }

  .cursor {
    display: inline-block;
    margin-left: 2px;
    animation: piscaCursor 0.7s infinite;
  }

  @keyframes piscaCursor {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const SubtituloHero = styled.h2`
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 400;
  margin-bottom: 2rem;
  color: #555;
  line-height: 1.6;
  max-width: 600px;
`;

export const BotaoHero = styled.a`
  padding: 1rem 2.5rem;
  background-color: var(--cor-primaria);
  color: white;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.1s;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 4px 15px var(--cor-primaria);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    background-color: #e02959;
    box-shadow: 0 6px 20px var(--cor-destaque);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(0);
  }
`;

export const RedesSociais = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;

  a {
    color: #555;
    font-size: 1.5rem;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #e02959;
      transform: translateY(-3px);
    }
  }
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeroImagem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .foto-container {
    position: relative;
    width: 325px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px #e0295a5e;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(20%);
      transition: all 0.5s ease;
      position: relative;
      z-index: 2;
    }

    .destaque {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #9442586c, #ff0044b5);
      mix-blend-mode: multiply;
      z-index: 3;
    }

    &:hover {
      img {
        filter: grayscale(0%);
        transform: scale(1.03);
      }
      
      .destaque {
        background: linear-gradient(135deg, #646cff88, #535bf288);
      }
    }
  }

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 3rem;
    
    .foto-container {
      width: 280px;
      height: 280px;
    }
  }
`;

export const TextoDigitando = styled.span`
  border-right: 2px solid #646cff;
  animation: piscaCursor 0.7s infinite;

  @keyframes piscaCursor {
    from { border-right-color: transparent; }
    to { border-right-color: #646cff; }
  }
`;

