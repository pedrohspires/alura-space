import React, { useState } from 'react';
import Tags from '../Tags';
import styles from './Galeria.module.scss';
import fotos from './fotos.json';
import Card from './Card';

function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(valor => valor.tag))];

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter(foto => foto.tag === tag);

    setItens(novasFotos);
  }

  const limparFiltros = () => {
    setItens(fotos);
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} limparFiltros={limparFiltros} />
      <Card itens={itens} styles={styles} />
    </section>
  )
}

export default Galeria