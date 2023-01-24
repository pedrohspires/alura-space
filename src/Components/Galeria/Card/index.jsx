import React from 'react'
import Foto from './Foto';

function Card({ itens, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map(foto => {
        return (
          <Foto 
            item={foto} 
            styles={styles} 
          />
        );
      })}
    </ul>
  )
}

export default Card