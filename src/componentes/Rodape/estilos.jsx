import styled from 'styled-components';

export const ContainerRodape = styled.footer`
  padding: 2rem;
  text-align: center;
  background: #333;
  color: white;
`;

export const TextoRodape = styled.p`
  margin-bottom: 1rem;
`;

export const LinksRedeSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const LinkSocial = styled.a`
  color: white;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #646cff;
  }
`;