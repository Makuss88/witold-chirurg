import React from 'react';

import { Carousel } from 'react-carousel-minimal';

import img1 from '../../../assets/image/img1.jpg';
import img2 from '../../../assets/image/img2.jpg';
import img3 from '../../../assets/image/img3.jpg';
import img4 from '../../../assets/image/img4.jpg';
import img5 from '../../../assets/image/img5.jpg';

const data = [
  {
    image: img1,
    caption: "San Francisco"
  },
  {
    image: img2,
    caption: "San Francisco"
  },
  {
    image: img3,
    caption: "San Francisco"
  },
  {
    image: img4,
    caption: "San Francisco"
  },
  {
    image: img5,
    caption: "San Francisco"
  },
];

const ChangeImage = () => {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <Carousel
      captionStyle={captionStyle}
      slideNumberStyle={slideNumberStyle}
      data={data}
      time={3000}
      width="850px"
      height="500px"
      radius="20px"
      captionPosition="bottom"
      automatic={true}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideImageFit="cover"
      thumbnails={true}
      thumbnailWidth="100px"
      style={{
        textAlign: "center",
        margin: "40px auto",
      }}
    />);
};

export default ChangeImage;
