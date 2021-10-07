import React from 'react'

import img1 from '../../../assets/image/person1.jpg';
import img2 from '../../../assets/image/person2.jpg';
// import img3 from '../../../assets/image/person3.jpg';
// import img4 from '../../../assets/image/person4.jpg';

import classes from './Gallery.module.css';

const Gallery = () => {
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <img src={img1} className={classes.image} alt='??' />
        <div className={classes.info}>
          <div className={classes.text}>
            mój napis dookoła napisku
          </div>
        </div>
      </div>
      <div className={classes.flex}>
        <img src={img2} className={classes.image} alt='??' />
        <div className={classes.info}>
          <div className={classes.text}>
            napis zdj 2
          </div>
        </div>
      </div>
    </div >
  )
}

export default Gallery;
