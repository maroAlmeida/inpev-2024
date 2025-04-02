
interface DynamicTextProps {
    localClass: string; // Parte fixa do texto
}

const LogoBco: React.FC<DynamicTextProps> = ({ localClass }) => {
    return (
        <>
            <img className={localClass} src="img/logo/logo-bco.svg" alt='logo-bco.svg' />
        </>
    )
}

export default LogoBco;