import { Accordion, AccordionTab } from 'primereact/accordion';  
import styles from './Styles/sobre.module.css';

const Sobre = () => {
    return (
        <div className="w-6 mx-auto my-5">
            <Accordion activeIndex={0}>
                <AccordionTab 
                 header={<span className="sobre">Historia</span>} 
                >
                <p className={styles.sobre}>
                             A FS11 Fundada em 2010 , a  FS11 Sports  é uma empresa inovadora no setor de vestuario, dedicada
        a atender seus clientes com  soluções sustentáveis que atendam às necessidades do nosso planeta.
        Com uma  equipe  apaixonada  por  fazer  a diferença , oferecemos produtos que reduzem o impacto 
        ambiental sem comprometer a eficácia.
                    </p>
                </AccordionTab>
                <AccordionTab
                header={<span className="sobre">Missão</span>} 
                >
                <p className={styles.sobre}>
        Nossa missão é liderar a mudança para um futuro mais verde através de inovações que promovam um
        estilo de vida sustentável. Escolher a FS11 Sports significa apostar em um futuro onde a
        tecnologia e o meio ambiente andam de mãos dadas. 
                    </p>
               </AccordionTab>
                <AccordionTab
                  header={<span className="sobre">Depoimentos</span>}  
                >
                <p className={styles.sobre}>
        É Uma empresa que cumpre prazos e atende muito bem seus clientes.
                </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}


export default Sobre