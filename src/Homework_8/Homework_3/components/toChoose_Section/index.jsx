import React, { Component } from 'react'

import {
  Parent,
  Container,
  FonTitle,
  ChooseContent,
  ChooseBox,
  Icons,
} from './style';



export default class ToChoose extends Component {
  render() {
    return (
      <Parent>
        <Container>
          <FonTitle top bold type="large">Why Choose Us?</FonTitle>
          <FonTitle type="small">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</FonTitle>
          <ChooseContent>
            <ChooseBox>
              <Icons.Discord />
              <FonTitle bold type="medium">Trusted By Thousands</FonTitle>
              <FonTitle type="small">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</FonTitle>
            </ChooseBox>
            <ChooseBox>
              <Icons.House />
              <FonTitle bold type="medium">Trusted By Thousands</FonTitle>
              <FonTitle type="small">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</FonTitle>
            </ChooseBox>
            <ChooseBox>
              <Icons.Calculator />
              <FonTitle bold type="medium">Trusted By Thousands</FonTitle>
              <FonTitle type="small">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</FonTitle>
            </ChooseBox>
            <ChooseBox>
              <Icons.Maps />
              <FonTitle bold type="medium">Trusted By Thousands</FonTitle>
              <FonTitle type="small">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</FonTitle>
            </ChooseBox>
          </ChooseContent>
        </Container>
      </Parent>
    )
  }
}
