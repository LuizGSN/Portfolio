import styled from 'styled-components';

export const SecaoContato = styled.section`
  padding: 5rem 5%;
  background-color: var(--cor-fundo-claro);
  text-align: center;
`;

export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

export const ContainerContato = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const MensagemCTA = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: var(--cor-texto);
  font-weight: 500;
`;

export const TextoContato = styled.p`
  font-size: 1.1rem;
  margin: 1.5rem 0;
  color: var(--cor-texto);
  
  &.disponibilidade {
    font-style: italic;
    margin-top: 3rem;
    color: var(--cor-texto-claro);
  }
`;

export const RedesSociais = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

export const LinkRedeSocial = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: white;
  border-radius: 50px;
  text-decoration: none;
  color: var(--cor-texto);
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 1.3rem;
    color: var(--cor-destaque);
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    color: var(--cor-destaque);
  }
`;

export const BotaoWhatsapp = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: #25D366;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  margin: 2rem auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  
  svg {
    font-size: 1.5rem;
  }
  
  &:hover {
    background: #128C7E;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }
`;