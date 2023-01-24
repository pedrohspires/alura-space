import React from 'react';
import Tags from '../Tags';
import styles from './Galeria.module.scss';
import fotos from './fotos.json';
import Card from './Card';

function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Card itens={fotos} styles={styles} />
    </section>
  )
}

export default Galeria