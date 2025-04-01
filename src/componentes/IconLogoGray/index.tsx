
interface DynamicTextProps {
    localClass: string; // Parte fixa do texto
}

const IconLogo: React.FC<DynamicTextProps> = ({ localClass }) => {
    return (
        <>
            <img className={localClass} src="/img/logo/inpEV_logo.png" alt='logo inpev' />
        </>
    )
}

export default IconLogo;