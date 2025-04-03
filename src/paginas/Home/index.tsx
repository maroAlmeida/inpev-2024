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

const text1 = "Representante da indústria fabricante de defensivos agrícolas no Sistema Campo Limpo, programa brasileiro de logística reversa";
const text2 = "Este Relatório de Sustentabilidade 2024 apresenta os principais resultados financeiros, operacionais e socioambientais do Instituto Nacional de Processamento de Embalagens Vazias (inpEV), que integra o Sistema Campo Limpo, programa brasileiro de logística reversa de embalagens vazias ou com sobras pós-consumo de defensivos agrícolas.";

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
            <p className={styles.msgTxt} >"Esta é a versão resumida do Relatório de Sustentabilidade 2024 do Instituto Nacional de Processamento de Embalagens Vazias (inpEV), que reúne os principais resultados operacionais, financeiros e socioambientais do ano do Sistema Campo Limpo. O documento é publicado anualmente desde 2002, uma demonstração do comprometimento do Instituto com a transparência e a prestação de contas para com todos os elos da cadeia agrícola. <br />Boa leitura!"</p>
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

                      <svg
                        width="89"
                        height="60"
                        viewBox="0 0 89 60"
                        fill="#9ca94e"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M45.76 9.09C45.76 4.07 49.84 0 54.88 0H89.02V9.09C89.02 14.11 84.94 18.18 79.9 18.18H45.76V9.09Z" />
                        <path d="M43.26 9.09C43.26 4.07 39.18 0 34.14 0H0V9.09C0 14.11 4.08 18.18 9.12 18.18H43.26V9.09Z" />
                        <path d="M45.76 30.01C45.76 24.99 49.84 20.92 54.88 20.92H89.02V30.01C89.02 35.03 84.94 39.1 79.9 39.1H45.76V30.01Z" />
                        <path d="M43.26 30.01C43.26 24.99 39.18 20.92 34.14 20.92H0V30.01C0 35.03 4.08 39.1 9.12 39.1H43.26V30.01Z" />
                        <path d="M45.76 50.91C45.76 45.89 49.84 41.82 54.88 41.82H89.02V50.91C89.02 55.93 84.94 60 79.9 60H45.76V50.91Z" />
                        <path d="M43.26 50.91C43.26 45.89 39.18 41.82 34.14 41.82H0V50.91C0 55.93 4.08 60 9.12 60H43.26V50.91Z" />
                      </svg>


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
                    <p className="">
                      {item.percentage && <span>{item.percentage}<br /></span>}
                      {item.text}
                    </p>
                    <img className={styles.leadBco} src="./img/home/leadBco.svg" alt="lead" />
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
