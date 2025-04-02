import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Faz o scroll para o topo ao mudar de rota
  }, [pathname]); // Executa toda vez que o caminho mudar

  return null;
};

export default ScrollToTop;
