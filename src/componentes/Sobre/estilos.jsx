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

  .underline {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.destaque};
    text-underline-offset: 3px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Highlights = styled.div`
  background: ${({ theme }) => theme.destaque + '20'};
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 3px solid ${({ theme }) => theme.destaque};

  p {
    margin: 10px 0;
    font-size: 0.95em;
    color: ${({ theme }) => theme.texto};
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: '•';
      color: ${({ theme }) => theme.destaque};
      font-weight: bold;
    }
  }

  hr {
    border: 1px solid ${({ theme }) => theme.destaque + '30'};
    margin: 15px 0;
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