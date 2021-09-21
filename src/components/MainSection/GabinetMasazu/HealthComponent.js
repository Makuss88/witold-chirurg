import React from 'react';

import classes from './HealthComponent.module.css';

const HealthComponent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.healthMenu}>
        ZDROWIE, URODA & RELAKS <br />
        <p>Poniżej przedstawiamy przykładowe zastosowanie naszych masaży.</p>
      </div>
      <div className={classes.flex}>
        <div className={classes.excerpt}>
          <h5 className={classes.header}>Dla ZDROWIA: </h5>
          <ul className={classes.table}>
            <li>bóle pleców, karku</li>
            <li>zmęczenie,</li>
            <li>rewitalizacja po porodzie</li>
            <li>sportowe</li>
            <li>oczyszczające</li>
            <li>dla kobiet ciężarnych</li>
          </ul>
        </div>

        <div className={classes.excerpt}>
          <h5 className={classes.header}>Dla URODY: </h5>
          <ul className={classes.table}>
            <li>antycelluitowe</li>
            <li>wspomagające odchudzanie</li>
            <li><strong>Japoński Masaż Twarzy</strong></li>
            <li>modelujące,</li>
          </ul>
        </div>

        <div className={classes.excerpt}>
          <h5 className={classes.header}>Dla RELAKSU: </h5>
          <ul className={classes.table}>
            <li>masaż głowy</li>
            <li><strong>Japoński Masaż Twarzy</strong></li>
            <li>antystresowe,</li>
            <li>Idealne na bezsenność</li>
            <li>ciepłym olejem</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HealthComponent
