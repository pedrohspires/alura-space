import React from 'react'
import styles from './Populares.module.scss';
import fotosPopulares from './fotos-populares.json';

function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPopulares.map(foto => {
          return (
            <img key={foto.id} src={foto.path} alt={foto.alt} />
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  )
}

export default Populares