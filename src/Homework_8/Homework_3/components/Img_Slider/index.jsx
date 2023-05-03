import React, { Component } from 'react';

import Img from '../../assets/imgs/img_slider.jpg';

import {
  Parent,
  Fon,
  Opacity,
  FonTitle,
  Nav_BTN,
} from './style';


export default class ImgSlider extends Component {
  render() {
    return (
      <Parent>
        <Opacity />
        <Fon src={ Img } />
        <FonTitle>Vermont Farmhouse With Antique Jail Is
          the Week's Most Popular Home</FonTitle>
        <Nav_BTN>Read more</Nav_BTN>
      </Parent>
    )
  }
}
