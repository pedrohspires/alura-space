import Cabecalho from "../../Components/Cabecalho";
import Menu from '../../Components/Menu';
import Banner from "../../Components/Banner";
import styles from './PaginaInicial.module.scss';
import Rodape from "../../Components/Rodape";

function PaginaInicial(){
  return (
    <>
      <Cabecalho />
      <main>
        <div className={styles.principal}>
          <Menu />
          <Banner />
        </div>
      </main>
      <Rodape />
    </>
  );
}

export default PaginaInicial;