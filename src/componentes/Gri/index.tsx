import React from "react";
import estilos from './Gri.module.scss';

interface DynamicTextProps {
  staticText: string; // Parte fixa do texto
  dynamicText: string; // Parte dinâmica do texto
}

const GRI: React.FC<DynamicTextProps> = ({ staticText, dynamicText }) => {
  return (
    <span className={estilos.GRI}>&nbsp; {staticText} {dynamicText}&nbsp;</span>
  );
};

export default GRI;


