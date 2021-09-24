import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './ChangeImage.css'

import img1 from '../../../assets/image/img1.jpg';
import img2 from '../../../assets/image/img2.jpg';
import img3 from '../../../assets/image/img3.jpg';
import img4 from '../../../assets/image/img4.jpg';


const ChangeImage = () => {
  return (
    <Carousel infiniteLoop autoPlay>
      <div>
        <img src={img1} alt='USG' />
        <p className="image">USG BRZUCHA</p>
      </div>
      <div>
        <img src={img2} alt='USG' />
        <p className="image">ANALIZA BIODER</p>
      </div>
      <div>
        <img src={img3} alt='USG' />
        <p className="image">BIODERKA U DZIECKA</p>
      </div>
      <div>
        <img src={img4} alt='USG' />
        <p className="image">USG CIĄŻY</p>
      </div>
    </Carousel>
  );
};

export default ChangeImage;
