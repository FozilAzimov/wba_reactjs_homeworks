import React, { Component } from 'react';
import Card_img1 from '../../assets/imgs/card_img1.jpg';
import Card_img2 from '../../assets/imgs/card_img2.jpg';
import Card_img3 from '../../assets/imgs/card_img3.jpg';
import rasm1 from '../../assets/icons/rasm4.svg';
import rasm2 from '../../assets/icons/rasm5.svg';
import rasm3 from '../../assets/icons/rasm6.svg';
import {
  Icons,
  Card_box,
  Card_img,
  Card_btn,
  Card_style,
  Box,
  FonTitle,
  Card_footer,
  Left_footer,
  Right_footer,
  Img,
} from './style';

export class Card1 extends Component {
  render() {
    return (
      <Card_box>
        <Card_btn>featured</Card_btn >
        <Card_btn btn >for sale</Card_btn >
        <Card_img src={ Card_img1 } />
        <Img src={ rasm1 } />
        <Card_style bold mg>New Apartment Nice Wiew</Card_style>
        <Card_style>Quincy St, Brooklyn, NY, USA</Card_style>
        <Box>
          <FonTitle>
            <Icons.Bed />4 Beds
          </FonTitle>
          <FonTitle>
            <Icons.Bath />5 Beths
          </FonTitle>
          <FonTitle>
            <Icons.Car />1 Garag
          </FonTitle>
          <FonTitle>
            <Icons.Ruler />1200 Sq Ft
          </FonTitle>
        </Box>
        <Card_footer>
          <Left_footer>
            <Card_style><s>$2,800/mo</s></Card_style>
            <Card_style bold>$7,500/mo</Card_style>
          </Left_footer>
          <Right_footer>
            <Icons.Strelka />
            <Icons.Yurak />
          </Right_footer>
        </Card_footer>
      </Card_box >
    )
  }
}

export class Card2 extends Component {
  render() {
    return (
      <Card_box>
        <Card_btn>featured</Card_btn >
        <Card_btn btn >for sale</Card_btn >
        <Card_img src={ Card_img2 } />
        <Img src={ rasm2 } />
        <Card_style bold mg>New Apartment Nice Wiew</Card_style>
        <Card_style>Quincy St, Brooklyn, NY, USA</Card_style>
        <Box>
          <FonTitle>
            <Icons.Bed />4 Beds
          </FonTitle>
          <FonTitle>
            <Icons.Bath />5 Beths
          </FonTitle>
          <FonTitle>
            <Icons.Car />1 Garag
          </FonTitle>
          <FonTitle>
            <Icons.Ruler />1200 Sq Ft
          </FonTitle>
        </Box>
        <Card_footer>
          <Left_footer>
            <Card_style><s>$2,800/mo</s></Card_style>
            <Card_style bold>$7,500/mo</Card_style>
          </Left_footer>
          <Right_footer>
            <Icons.Strelka />
            <Icons.Yurak />
          </Right_footer>
        </Card_footer>
      </Card_box >
    )
  }
}

export class Card3 extends Component {
  render() {
    return (
      <Card_box>
        <Card_btn>featured</Card_btn >
        <Card_btn btn >for sale</Card_btn >
        <Card_img src={ Card_img3 } />
        <Img src={ rasm3 } />
        <Card_style bold mg>New Apartment Nice Wiew</Card_style>
        <Card_style>Quincy St, Brooklyn, NY, USA</Card_style>
        <Box>
          <FonTitle>
            <Icons.Bed />4 Beds
          </FonTitle>
          <FonTitle>
            <Icons.Bath />5 Beths
          </FonTitle>
          <FonTitle>
            <Icons.Car />1 Garag
          </FonTitle>
          <FonTitle>
            <Icons.Ruler />1200 Sq Ft
          </FonTitle>
        </Box>
        <Card_footer>
          <Left_footer>
            <Card_style><s>$2,800/mo</s></Card_style>
            <Card_style bold>$7,500/mo</Card_style>
          </Left_footer>
          <Right_footer>
            <Icons.Strelka />
            <Icons.Yurak />
          </Right_footer>
        </Card_footer>
      </Card_box >
    )
  }
}
