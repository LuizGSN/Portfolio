import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { temaClaro, temaEscuro } from './assets/estilos/Tema';
import EstiloGlobal from './assets/estilos/EstiloGlobal';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [temaDark, setTemaDark] = useState(false);

  const alternarTema = () => {
    setTemaDark(!temaDark);
  };

  return (
    <ThemeProvider theme={temaDark ? temaEscuro : temaClaro}>
      <EstiloGlobal />
      <Router>
        <Cabecalho alternarTema={alternarTema} temaDark={temaDark} />
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
        </Routes>
        <Rodape />
      </Router>
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;