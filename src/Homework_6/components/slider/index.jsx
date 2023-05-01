import React, { useRef, useState } from 'react';
import {
  Container,
  Img,
  LeftIcon,
  RightIcon,
  SliderImg,
} from './style';

import img1 from '../../assets/imgs/img1.jpg';
import img2 from '../../assets/imgs/img2.jpg';
import img3 from '../../assets/imgs/img3.jpg';


export default function Slider() {

  const element = useRef();

  const [img, setImg] = useState([img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3, img1]);

  const [count, setCount] = useState(0);

  return (
    <Container>
      <LeftIcon onClick={ () => setCount(count - element.current?.width) }>left</LeftIcon>
      <SliderImg style={ { right: count } }>
        {
          img.map((img) => <Img ref={ element } src={ img } />)
        }
      </SliderImg>
      <RightIcon onClick={ () => setCount(count + element.current?.width) }>right</RightIcon>
    </Container >
  )
}