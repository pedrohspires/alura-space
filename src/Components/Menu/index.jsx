import React from 'react'
import home from '../../Assets/icones/home-ativo.png'
import maisCurtidas from '../../Assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../Assets/icones/mais-vistas-inativo.png'
import novas from '../../Assets/icones/novas-inativo.png'
import surpreendaMe from '../../Assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="Botão home" />
          <a href="/">Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="Botão mais curtidas" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="Botão mais vistas" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="Botão novas" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="Botão surpreenda-me" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu