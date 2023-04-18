import React, { Component } from 'react';
import Img from '../../assets/imgs/fon.jpg';
import {
  Icons,
  Parent,
  Fon,
  Opacity,
  Slider_btn,
  CenterBox,
  FonTitle,
  Box,
  Nav_BTN,
  Slider_icons,
  Span_icon,
} from './style';

export default class Fon_Section extends Component {
  render() {
    return (
      <Parent>
        <Fon src={ Img } />
        <Opacity>
          <Icons.Left />
          <Slider_btn />
          <CenterBox>
            <FonTitle bold type="large">Skyper Pool Partment</FonTitle>
            <FonTitle type="small">112 Glenwood Ave Hyde Park, Boston, MA</FonTitle>
            <Box>
              <FonTitle type="small">
                <Icons.Bed />4 Beds
              </FonTitle>
              <FonTitle type="small">
                <Icons.Bath />5 Beths
              </FonTitle>
              <FonTitle type="small">
                <Icons.Car />1 Garag
              </FonTitle>
              <FonTitle type="small">
                <Icons.Ruler />1200 Sq Ft
              </FonTitle>
            </Box>
            <FonTitle bold type="medium">$5,250/mo</FonTitle>
            <Nav_BTN>Read more</Nav_BTN>
            <Slider_icons>
              <Span_icon />
              <Span_icon active />
              <Span_icon />
              <Span_icon />
              <Span_icon />
            </Slider_icons>
          </CenterBox>
          <Slider_btn right />
          <Icons.Right />
        </Opacity>
      </Parent>
    )
  }
}
