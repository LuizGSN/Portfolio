import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ContainerProjeto = styled.div`
  padding: 8rem 5% 5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CabecalhoProjeto = styled.div`
  margin-bottom: 3rem;
`;

const TituloProjeto = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ImagemProjeto = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ConteudoProjeto = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DescricaoProjeto = styled.div`
  line-height: 1.8;

  p, ul {
    margin-bottom: 1.5rem;
  }

  li {
    margin-left: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const DetalhesProjeto = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
`;

const ItemDetalhe = styled.div`
  margin-bottom: 1.5rem;
`;

const RotuloDetalhe = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #666;
`;

const ValorDetalhe = styled.p`
  font-weight: 500;
`;

function PaginaDetalhesProjeto() {
  const { id } = useParams();
  
  const projeto = {
    id: 1,
    titulo: "Plataforma de E-commerce",
    descricao: "Plataforma completa de e-commerce desenvolvida com React no frontend e Node.js no backend.",
    descricaoLonga: `
      <p>Este projeto foi desenvolvido para um cliente do setor de moda que precisava de uma solução completa de e-commerce. A plataforma inclui:</p>
      <ul>
        <li>Frontend em React com Redux para gerenciamento de estado</li>
        <li>Backend em Node.js com Express</li>
        <li>Banco de dados MongoDB</li>
        <li>Integração com API de pagamentos</li>
        <li>Sistema de avaliação de produtos</li>
      </ul>
      <p>O maior desafio foi implementar o sistema de carrinho persistente que mantém os itens mesmo após o usuário sair do site.</p>
    `,
    imagem: "https://via.placeholder.com/1200x500",
    tecnologias: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
    funcionalidades: ["Carrinho de compras", "Checkout seguro", "Painel administrativo", "Sistema de avaliações"],
    linkGithub: "https://github.com/seuusuario/plataforma-ecommerce",
    linkDemo: "https://ecommerce-exemplo.com"
  };

  return (
    <ContainerProjeto>
      <CabecalhoProjeto>
        <TituloProjeto>{projeto.titulo}</TituloProjeto>
      </CabecalhoProjeto>
      
      <ImagemProjeto src={projeto.imagem} alt={projeto.titulo} />
      
      <ConteudoProjeto>
        <DescricaoProjeto dangerouslySetInnerHTML={{ __html: projeto.descricaoLonga }} />
        
        <DetalhesProjeto>
          <ItemDetalhe>
            <RotuloDetalhe>Tecnologias Utilizadas</RotuloDetalhe>
            <ValorDetalhe>
              {projeto.tecnologias.join(', ')}
            </ValorDetalhe>
          </ItemDetalhe>
          
          <ItemDetalhe>
            <RotuloDetalhe>Principais Funcionalidades</RotuloDetalhe>
            <ValorDetalhe>
              <ul>
                {projeto.funcionalidades.map(func => (
                  <li key={func}>{func}</li>
                ))}
              </ul>
            </ValorDetalhe>
          </ItemDetalhe>
          
          <ItemDetalhe>
            <RotuloDetalhe>Repositório no GitHub</RotuloDetalhe>
            <ValorDetalhe>
              <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer">Ver Código</a>
            </ValorDetalhe>
          </ItemDetalhe>
          
          {projeto.linkDemo && (
            <ItemDetalhe>
              <RotuloDetalhe>Demonstração Ao Vivo</RotuloDetalhe>
              <ValorDetalhe>
                <a href={projeto.linkDemo} target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
              </ValorDetalhe>
            </ItemDetalhe>
          )}
        </DetalhesProjeto>
      </ConteudoProjeto>
    </ContainerProjeto>
  );
}

export default PaginaDetalhesProjeto;