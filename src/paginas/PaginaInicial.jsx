import Hero from '../componentes/Hero/Hero';
import Sobre from '../componentes/Sobre/Sobre';
import Habilidades from '../componentes/Habilidades/Habilidades';
import Projetos from '../componentes/Projetos/Projetos';
import Contato from '../componentes/Contato/Contato';

function PaginaInicial() {
  return (
    <>
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </>
  );
}

export default PaginaInicial;