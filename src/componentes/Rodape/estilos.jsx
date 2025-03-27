import styled from 'styled-components';

export const ContainerRodape = styled.footer`
  padding: 3rem 5%;
  background: var(--cor-primaria);
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ConteudoRodape = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinksRedeSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const LinkSocial = styled.a`
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  
  &:hover {
    color: var(--cor-destaque);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

export const Creditos = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;