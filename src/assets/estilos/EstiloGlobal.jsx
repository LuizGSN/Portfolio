import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  :root {
    --cor-primaria: #08D9D6;
    --cor-secundaria: #252A34;
    --cor-destaque: #FF2E63;
    --cor-fundo: #EAEAEA;
    --cor-texto: #252A34;
    --cor-texto-claro: #5a5f6b;
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
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  :focus {
    outline: 2px solid var(--cor-primaria);
    outline-offset: 2px;
  }

  ::selection {
    background-color: var(--cor-primaria);
    color: var(--cor-secundaria);
  }
`;

export default EstiloGlobal;