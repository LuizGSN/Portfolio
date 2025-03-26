import styled from 'styled-components';

const Container = styled.footer`
  padding: 2rem;
  text-align: center;
  background: #333;
  color: white;
`;

function Rodape() {
  return (
    <Container>
      <p>© {new Date().getFullYear()} Meu Portfólio</p>
      <p>Desenvolvido com React e Styled Components</p>
    </Container>
  );
}

export default Rodape;