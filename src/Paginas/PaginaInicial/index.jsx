import Cabecalho from "Components/Cabecalho";
import Menu from "Components/Menu";
import Banner from "Components/Banner";
import styles from "./PaginaInicial.module.scss";
import Rodape from "Components/Rodape";
import Galeria from "Components/Galeria";
import Populares from "Components/Populares";

function PaginaInicial(){
  return (
    <>
      <Cabecalho />
      <main>
        <div className={styles.principal}>
          <Menu />
          <Banner />
        </div>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}

export default PaginaInicial;