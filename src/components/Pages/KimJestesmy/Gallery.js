import React from 'react'

import { personsInfo } from '../../../assets/helper/TextPerson';

// import classes from './Gallery.module.css';

import './Gallery.module.css';
import './Gallery.css';

const Gallery = () => {

  const myArrCreatedFromMap = personsInfo.map((i) => (

    <li key={"id:" + i.id}>
      <div className={"item img" + i.id}>
        <div className="info">
          <h1>{i.name}</h1>
          <p>{i.text}</p>
        </div>
      </div>
    </li>
  ));

  return (
    <ul className="grid">
      {myArrCreatedFromMap}
    </ul>
  )
}

export default Gallery;
