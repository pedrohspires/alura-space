import React from 'react';
import Icone from './Icone';
import icones from './Icones.json';
import styles from './Menu.module.scss';


function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icones.map(icone => {
          return (
            <Icone 
              key={icone.id} 
              icone={icone} 
              style={styles} 
            />);
        })}
      </ul>
    </nav>
  )
}

export default Menu