import Cabecalho from "../../Components/Cabecalho";
import Menu from '../../Components/Menu';
import Banner from "../../Components/Banner";
import styles from './PaginaInicial.module.scss';

function PaginaInicial(){
  return (
    <>
      <Cabecalho />
      <div className={styles.principal}>
        <Menu />
        <Banner />
      </div>
    </>
  );
}

export default PaginaInicial;