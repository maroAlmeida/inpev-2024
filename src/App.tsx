import { Routes, Route } from 'react-router-dom';
import './assets/styles/index.scss';
import ScrollToTop from './componentes/ScrollToTop';
import NavBar from './componentes/NavBar';
import Rodape from './componentes/Rodape';
import Home from './paginas/Home';
import Apresentacao from './paginas/Apresentacao';
import MensagemPresidente from './paginas/MensagemPresidente';
import DesempenhoFinanceiro from './paginas/DesempenhoFinanceiro';

function App() {
  return (
    <>
      <NavBar />
      <div className="contentCenter">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/mensagempresidente" element={<MensagemPresidente />} />
          <Route path="/desempenhofinanceiro" element={<DesempenhoFinanceiro />} />
        </Routes>
      </div>
      <Rodape />
    </>
  );
}

export default App;
