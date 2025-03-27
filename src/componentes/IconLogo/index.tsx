import IconLogoimg from '../../assets/img/base/inpEV-logo.svg';

interface DynamicTextProps {
    localClass: string; // Parte fixa do texto
}

const IconLogo: React.FC<DynamicTextProps> = ({ localClass }) => {
    return (
        <>
            <img className={localClass} src={IconLogoimg} alt='inpEV-logo' />
        </>
    )
}

export default IconLogo;