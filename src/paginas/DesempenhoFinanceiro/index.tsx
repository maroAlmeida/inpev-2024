import React from 'react';
// import '../../assets/styles/globals.scss'; // Importa o CSS global
import classNames from 'classnames'; // Importa classnames
import estilos from './DesempenhoFinanceiro.module.scss';
import bannerDesktop from './img/banner.jpg';
import bannerMobile from './img/banner.jpg';
import foto from './img/foto.png';
// import IconO from '../../componentes/IconO';


const DesempenhoFinanceiro = () => {
    return (
        <>
            <div className={classNames(estilos.DesempenhoFinanceiroSection, 'internalContent')} >
                <div className="w-full">
                    <div className="W-full _pdg0 bannerInt">
                        <picture>
                            <source srcSet={bannerMobile} media="(max-width: 768px)" />
                            <img src={bannerDesktop} alt="Imagem responsiva" />
                        </picture>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="">
                        {/* <IconO /> */}

                        <p className="desc _gray1">s repasses financeiros das fabricantes associadas e do canal de distribuição (associações e cooperativas), as taxas de credenciamento pagas pelos recicladores e o valor recebido pelo arrendamento da Campo Limpo Reciclagem e Transformação de Plásticos S.A. constituem a receita do inpEV, que não recebe apoio financeiro do governo ou de agências de crédito.</p>

                        <p className="desc _gray1">Um dos focos é alcançar a autossustentação do Sistema, que correspondeu a 57% em 2023. No ano, houve a atualização do cálculo para garantir maior acuracidade do indicador e, por isso, o percentual ficou abaixo do divulgado nos dois últimos anos (76% em 2022 e 70% em 2021). </p>

                        <p className="desc _gray1">Sempre buscando adotar medidas de eficiência, o inpEV estabelece metas anuais de redução de aportes financeiros para os associados. A meta inicial de 2023 previa a redução de R$ 60 milhões nos aportes, valor que foi revisado para R$ 50 milhões, especialmente em função do aumento dos custos dos serviços logísticos. Todo esse contexto foi gerenciado com agilidade pela liderança, com o suporte do Conselho Diretor. Há reuniões mensais para acompanhamento do orçamento. </p>
                    </div>
                    <div className="">
                        <img src={foto} alt='foto' />
                        <div className="_sixtpdg">
                            <p className="desc _turq1 _bold7">De 2002 a 2023, todos os elos da cadeia aportaram<br /> R$ <span className="_fnt45">2 bilhões</span> para custear o Sistema Campo Limpo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={estilos.tableBlockLine} >
                    <div>
                        <p className="desc _orange txt-upc _bold7">DESEMPENHO ECONÔMICO-FINANCEIRO<sup>1</sup></p>
                    </div>

                    {/* Tabela tailwind */}
                    <div className={classNames(estilos.tabela1, 'hidden')} >
                        <table className="min-w-full border-collapse border border-gray-200">
                            {/* Cabeçalho da tabela */}
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="w-[40%] px-4 py-2 text-left _bold7 _turq1">(R$ milhões)</th>
                                    <th className="px-4 py-2 text-center _bold7 _turq1">2022</th>
                                    <th className="px-4 py-2 text-center _bold7 _turq1">2023</th>
                                    <th className="px-4 py-2 text-center _bold7 _turq1">2024</th>
                                </tr>
                            </thead>

                            {/* Corpo da tabela */}
                            <tbody>
                                {[...Array(6)].map((_, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                    >
                                        <td className="px-4 py-2 border-t">Dado {index + 1}-1</td>
                                        <td className="px-4 py-2 border-t text-center">Dado {index + 1}-2</td>
                                        <td className="px-4 py-2 border-t text-center">Dado {index + 1}-3</td>
                                        <td className="px-4 py-2 border-t text-center">Dado {index + 1}-4</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Tabela tailwind em grid */}
                    <div className={classNames(estilos.tabela1, 'bg-gray-200')} >
                        <div className="grid grid-cols-[40%_1fr_1fr_1fr] gap-y-4 min-w-[900px] border-b border-red-600 ">
                            <div className="_turq1 _bold7 text-left px-4 py-2">Coluna 1</div>
                            <div className="_turq1 _bold7 text-center px-4 py-2">Coluna 2</div>
                            <div className="_turq1 _bold7 text-center px-4 py-2">Coluna 3</div>
                            <div className="_turq1 _bold7 text-center px-4 py-2">Coluna 4</div>
                        </div>
                        <div className="grid grid-cols-[40%_1fr_1fr_1fr] gap-y-4 min-w-[900px] ">
                            <div className="border-b border-white text-left px-4 py-2">Dado 1-1</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 1-2</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 1-3</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 1-4</div>
                            <div className="border-b border-white text-left px-4 py-2">Dado 2-1</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 2-2</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 2-3</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 2-4</div>
                            <div className="border-b border-white text-left px-4 py-2">Dado 3-1</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 3-2</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 3-3</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 3-4</div>
                            <div className="border-b border-white text-left px-4 py-2">Dado 4-1</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 4-2</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 4-3</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 4-4</div>
                            <div className="border-b border-white text-left px-4 py-2">Dado 5-1</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 5-2</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 5-3</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 5-4</div>
                            <div className="border-b border-white text-left px-4 py-2">Dado 6-1</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 6-2</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 6-3</div>
                            <div className="border-b border-white text-center px-4 py-2">Dado 6-4</div>
                        </div>

                    </div>
                </div>{/* tableBlockLine */}






            </div> {/* DesempenhoFinanceiroSection */}
        </>
    );
}

export default DesempenhoFinanceiro;
