import styled from 'styled-components';

export const SecaoContato = styled.section`
  padding: 5rem 5%;
  background-color: ${({ theme }) => theme.fundoClaro || theme.fundo};
  text-align: center;
`;

export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primaria};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.destaque};
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
  color: ${({ theme }) => theme.texto};
  font-weight: 500;
`;

export const TextoContato = styled.p`
  font-size: 1.1rem;
  margin: 1.5rem 0;
  color: ${({ theme }) => theme.texto};
  
  &.disponibilidade {
    font-style: italic;
    margin-top: 3rem;
    color: ${({ theme }) => theme.textoClaro};
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
  
  svg {
    font-size: 1.5rem;
  }
  
  &:hover {
    background: #128C7E;
    transform: translateY(-3px);
  }
`;

export const RedesSociaisInfo = styled.p`
  color: ${({ theme }) => theme.texto};
  font-size: 0.9rem;
  margin-top: 1.5rem;
  text-align: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  font-style: italic;
  
  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-top: 1.2rem;
  }
`;