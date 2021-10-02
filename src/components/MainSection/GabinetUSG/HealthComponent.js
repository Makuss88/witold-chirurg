import React from 'react';

import classes from './HealthComponent.module.css';

const HealthComponent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.healthMenu}>
        ZDROWIE, URODA & RELAKS <br />
        <p>Poniżej przedstawiamy przykładowe zastosowanie naszych zabiegów.</p>
      </div>
      <div className={classes.flex}>
        <div className={classes.excerpt}>
          <h5 className={classes.header}>Dla ZDROWIA: </h5>
          <ul className={classes.table}>
            <li> USG tętnic szyjnych</li>
            <li> USG serca</li>
            <li> USG stawów biodrowych</li>
            <li> USG piersi </li>
            <li> USG ortopedyczne</li>
            <li> USG układu moczowego</li>
            <li> USG tarczycy.bóle pleców, karku</li>
          </ul>
        </div>

        <div className={classes.excerpt}>
          <h5 className={classes.header}>Dla URODY: </h5>
          <ul className={classes.table}>
            <li>USG piersi </li>
            <li>USG brzucha</li>
            <li><strong>USG bioderek</strong></li>
            <li>analiza USG całego ciała</li>
          </ul>
        </div>

        <div className={classes.excerpt}>
          <h5 className={classes.header}>Dla RELAKSU: </h5>
          <ul className={classes.table}>
            <li>Tarczyca</li>
            <li><strong>Moszny i jąder</strong></li>
            <li>Staw barkowy i inne stawy</li>
            <li>Idealne na bezsenność</li>
            <li>Staw kolanowymasaż głowy</li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default HealthComponent
