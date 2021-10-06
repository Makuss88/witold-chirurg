import styled from 'styled-components';

import { Carousel } from 'react-carousel-minimal';

import img1 from '../../../../assets/image/img1.jpg';
import img2 from '../../../../assets/image/img2.jpg';
import img3 from '../../../../assets/image/img3.jpg';
import img4 from '../../../../assets/image/img4.jpg';
import img5 from '../../../../assets/image/img5.jpg';

export const CarouselImages = styled(Carousel)`
  border: 2px solid blue;
  .thumbnails {
    justify-content: center;
  }
`;


const DATA = [{
  image: img1,
  caption: "USG CIĄŻY"
},
{
  image: img2,
  caption: "USG BIODER"
},
{
  image: img3,
  caption: "USG BIODEREK"
},
{
  image: img4,
  caption: "ANALIZA CIĄŻY"
},
{
  image: img5,
  caption: "USG KOLANA"
},
];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}


export const carouselOption = {
  captionStyle: captionStyle,
  slideNumberStyle: slideNumberStyle,
  data: DATA,
  time: 3000,
  width: "800px",
  height: "500px",
  radius: "20px",
  captionPosition: "bottom",
  automatic: true,
  dots: true,
  pauseIconColor: "white",
  pauseIconSize: "40px",
  slideImageFit: "cover",
  thumbnails: true,
  thumbnailWidth: "100px",
}