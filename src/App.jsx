import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial';
import DetalhesProjeto from './paginas/DetalhesProjeto';
import EstiloGlobal from './assets/estilos/EstiloGlobal';

function App() {
  return (
    <Router>
      <EstiloGlobal />
      <Cabecalho />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/projetos/:id" element={<DetalhesProjeto />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;