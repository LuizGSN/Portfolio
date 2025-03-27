import styled from 'styled-components';

export const SecaoSobre = styled.section`
  min-height: 100vh;
  padding: 8rem 5% 5rem;
  background-color: ${({ theme }) => theme.fundo};
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  
  @media (max-width: 768px) {
    padding: 6rem 5% 3rem;
  }
`;

export const ContainerSobre = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const ConteudoSobre = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const TextoSobre = styled.div`
  p {
    margin-bottom: 1.8rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.texto};
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImagemSobre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    max-width: 440px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 2rem;
    
    img {
      max-width: 280px;
    }
  }
`;