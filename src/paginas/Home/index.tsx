import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import '../../assets/styles/globals.scss';
import NextPage from '../../components/NextPage';

const items = [
  { id: 1, percentage: "75%", text: "Postem lam a nimus, conecab oribus restorr." },
  { id: 2, percentage: "", text: "Postem lam a nimus, conecab oribus restorr umquisqui." },
  { id: 3, percentage: "", text: "Utad quam et aliam,  urios serum doluptat Debit lacesti tem" },
  { id: 4, percentage: "90%", text: "Nam vendis is ma doloratusa dit peditiu. " },
];

const text1 = "Gestor do Sistema Campo Limpo, programa brasileiro de logística reversa de embalagens vazias de defensivos agrícolas";
const text2 = "Introdução nam a nimus, conecab oribus restorr umquisqui ullibearum debis dolore, a num volum utae. Itam re vendaector sam voloremquia sam facea voluptaquis aut ulli bearum de";

const trigoPerct = "50%";
const trigoLeg = "Postem lam a nimus, conecab oribus restorr umquisqui";

function HomePage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={styles.homeSection} >

      {/* /Home Banner */}
      <div className={`${styles.homeContent} ${styles.homeBg}`} >
        <div className="relativeNov" >
          <div className="w-full py-4 desk-only" >
            <p className={`${styles.title1} cronosFont text-black bold`} >
              Relatório de sustentabilidade
              <br /><span>2024</span>
            </p>
          </div>

          {/* <div className="mobile-only w-full gap-4" ></div> */}

          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 ">
            <div className={styles.boxOrange} >
              <h1>{text1}</h1>
            </div>

            <div className='desk-only' >&nbsp;</div>
            <div className="w-full px-4 mobile-only" >
              <p className={`${styles.title1} cronosFont text-black bold`} >
                Relatório de sustentabilidade
                <br /><span>2024</span>
              </p>
            </div>

            <div>
              <div className={styles.boxGreen} >
                <h1>{text2}</h1>
              </div>
              <div className={styles.filetGreen} ></div>
            </div>
          </div>

        </div> {/* /relative */}

        <div className={` ${styles.linePresd} w-full`} >{/* msgPresd */}
          <div className={styles.msgPresd} >
            <p className={styles.msgTitle} >Mensagem do diretor-presidente</p>
            <p className={styles.msgTxt} >"A robustez e a efetividade do Sistema Campo Limpo e a sua importância para a agricultura brasileira foram comprovadas mais uma vez em 2023. A operação com excelência do Sistema foi imprescindível para recebermos um volume de embalagens pós-consumo 10% superior ao registrado em 2022 e destinarmos de maneira ambientalmente correta 53,2 mil toneladas, ultrapassando a marca de 750 mil toneladas destinadas desde 2002."</p>
            <p >Marcelo Okamura <i>Diretor-presidente do inpEV</i> </p>

            <Link className={styles.msgLink} to="/mensagempresidente">Leia a mensagem completa!</Link>
          </div>
        </div> {/* /msgPresd */}
      </div>{/* /homeContent */}

      {/* /Home Temas Materiais */}
      <div className={`${styles.homeContent} ${styles.homeBgLeads} `} >
        <div className={` ${styles.temasMateriais} relativeNov `} >
          <div>
            <p className={styles.tmTitle} >Temas materiais - destaques</p>
            <div className={styles.tmPdts} ></div>

            {/* Row Leads icons */}
            <div className={`${styles.leadsBox} w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`} >

              {/* Box 1 */}
              <Link to="#">
                <div className={styles.box1} >
                  <p>Les excearcimus autate cor aut harionemquam  aliquam, ent omnis desti derm ipitiatur sanimus  as aliquam.</p>
                  <div className={styles.lead} ></div>
                  <div className={styles.box1Fil} ></div>
                </div>
              </Link>

              {/* Box 2 */}
              <Link to="#">
                <div className={styles.box2} >
                  <div className="desk-only vh100" >
                    <div className={styles.trigo} >
                      <p className={styles.percent} >{trigoPerct}</p>
                      <img src="./img/home/trigo.svg" alt="trigo" />
                    </div>
                    <div className={styles.box2Fil} >
                      <div className={styles.lead} ></div>
                    </div>
                    <div className={styles.box2Fil2} ></div>
                    <p className={styles.content} >{trigoLeg}</p>
                  </div>

                  <div className="mobile-only" >
                    <div className="flex" >
                      <div>
                        <p className={styles.percent} >{trigoPerct}</p>
                        <p className={styles.content} >{trigoLeg}</p>
                      </div>
                      <div className={styles.lead} ></div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Box 3 */}
              <Link to="#">
                <div className={styles.box3} >
                  <p>Les excearcimus autate cor aut harionemquam  aliquam, ent omnis desti derm ipitiatur sanimus  as aliquam.</p>
                  <div className={styles.lead} ></div>
                  <div className={styles.box3Fil} ></div>
                </div>
              </Link>

              {/* Box 4 */}
              <Link to="#">
                <div className={styles.box4} >
                  <div className={styles.flower} >
                    <p>Postem lam a nimus, conecab oribus restorr umquisqui</p>
                  </div>

                  <div className={` ${styles.box4Fil2} mobile-only `} ></div>

                  <div className={styles.box4Fil} >
                    <div className={styles.lead} ></div>
                  </div>
                </div>
              </Link>

            </div>

            {/* Row Leads Rdp */}
            <div className={`${styles.tmBxRdp} w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 `}>
              {items.map((item) => (
                <Link
                  to="#"
                  key={item.id}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`${styles.itemRdp} transition-opacity duration-300`}
                    style={{ opacity: hovered === null || hovered === item.id ? 1 : 0.9 }}
                  >
                    <p className="text-white">
                      {item.percentage && <span>{item.percentage}</span>}
                      <br />
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* /Next Page */}
      <div className="relativeNov py-4" >
        <div className="float-right text-right" >
          <NextPage linkText="apresentacao" namePage="Apresentação" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
