import React, { Component } from 'react';
import Testimonials_Card from './card';

import {
  Icons,
  Parent,
  Container,
  FonTitle,
  Slider_btn,
  CardBox,
} from './style';

export default class Testimonials extends Component {
  render() {
    return (
      <Parent>
        <Container>
          <FonTitle top bold type="large">Testimonials</FonTitle>
          <FonTitle type="small">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</FonTitle>
          <Icons.Left />
          <Slider_btn />
          <CardBox>
            <Testimonials_Card />
            <Testimonials_Card />
            <Testimonials_Card />
          </CardBox>
          <Slider_btn right />
          <Icons.Right />
        </Container>
      </Parent>
    )
  }
}
