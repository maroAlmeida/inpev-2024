import estilos from './Banner.module.scss';
import IHero from '../../Interfaces/IHero';

interface BannerProps {
  banner: IHero
}

const Banner = ( { banner }: BannerProps ) => {
  return (
    <section className={estilos.BannerArea}>
      <div className={estilos.Container}>
        <h1 className={estilos.Titulo}>{banner.titulo}</h1>
        <p className={estilos.Descricao} >{banner.descricao}</p>
        {/* Renderiza a imagem somente se frontImage tiver mais de 2 caracteres */}
        {banner.frontImage.length > 2 && (
          <img className={estilos.FrontImg} src={banner.frontImage} alt="" />
        )}
      </div>
      <img className={estilos.BackImg} src={banner.backImage} alt={banner.descricao}/>
    </section>
  )
}

export default Banner