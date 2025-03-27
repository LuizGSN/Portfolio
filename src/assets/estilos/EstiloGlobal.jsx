import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  :root {
    --cor-primaria: ${({ theme }) => theme.primaria};
    --cor-secundaria: ${({ theme }) => theme.secundaria};
    --cor-destaque: ${({ theme }) => theme.destaque};
    --cor-fundo: ${({ theme }) => theme.fundo};
    --cor-texto: ${({ theme }) => theme.texto};
    --cor-texto-claro: ${({ theme }) => theme.textoClaro};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  :focus {
    outline-offset: 2px;
  }

  ::selection {
    background-color: var(--cor-primaria);
    color: var(--cor-secundaria);
  }
`;

export default EstiloGlobal;