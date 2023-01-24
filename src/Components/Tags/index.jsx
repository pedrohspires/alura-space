import React from 'react'
import styles from './Tags.module.scss';

function Tags({ tags, filtrarFotos, limparFiltros }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags</p>
      <ul className={styles.tags__lista}>
        {tags.map(tag => {
          return <li key={tag} onClick={() => filtrarFotos(tag)} >{tag}</li>;
        })}
        <li onClick={limparFiltros}>Todas</li>
      </ul>
    </div>
  )
}

export default Tags