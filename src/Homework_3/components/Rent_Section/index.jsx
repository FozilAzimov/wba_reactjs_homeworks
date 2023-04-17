import React, { Component } from 'react';
import { Card1, Card2, Card3 } from './card';
import {
  Icons,
  Container,
  Parent,
  Recomended_title,
  Slider_btn,
  CardContent,
  Slider_icons,
  Span_icon
} from './style';
export default class Rent extends Component {
  render() {
    return (
      <Parent>
        <Container>
          <Recomended_title bold>Recent Properties for Rent</Recomended_title>
          <Recomended_title>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Recomended_title>
          <Icons.Left />
          <Slider_btn />
          <CardContent>
            <Card1 />
            <Card2 />
            <Card3 />
          </CardContent>
          <Slider_btn right />
          <Icons.Right />
          <Slider_icons>
            <Span_icon />
            <Span_icon active />
            <Span_icon />
            <Span_icon />
            <Span_icon />
          </Slider_icons>
        </Container>
      </Parent>
    )
  }
}
