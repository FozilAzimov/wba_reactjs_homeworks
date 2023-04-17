import React, { Component } from 'react';
import House from '../../assets/imgs/house.jpg';
import Apartment from '../../assets/imgs/apartment.jpg';
import Office from '../../assets/imgs/office.jpg';
import Villa from '../../assets/imgs/villa.jpg';


import {
  Icons,
  Parent,
  Container,
  FonTitle,
  Slider_btn,
  CategoryContent,
  CategoryBox,
  CardName,
  Slider_icons,
  Span_icon,
} from './style';

export default class Category extends Component {
  render() {
    return (
      <Parent>
        <Container>
          <FonTitle type="large" top bold>Category</FonTitle>
          <FonTitle type="small">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</FonTitle>
          <Icons.Left />
          <Slider_btn />
          <CategoryContent>
            <>
              <Icons.Discord />
              <CardName type="left">House</CardName>
              <CategoryBox src={ House } />
            </>
            <>
              <Icons.House />
              <CardName type="left_center">Apartment</CardName >
              <CategoryBox src={ Apartment } />
            </>
            <>
              <Icons.Calculator />
              <CardName type="right_center">Office</CardName >
              <CategoryBox src={ Office } />
            </>
            <>
              <Icons.Maps />
              <CardName type="right">Villa</CardName >
              <CategoryBox src={ Villa } />
            </>
          </CategoryContent >
          <Slider_btn right />
          <Icons.Right />
          <Slider_icons>
            <Span_icon />
            <Span_icon active />
            <Span_icon />
            <Span_icon />
            <Span_icon />
          </Slider_icons>
        </Container >
      </Parent >
    )
  }
}
