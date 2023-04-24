import React from 'react';
import {
  Parent,
  Container,
  Nav,
  Icons,
  Logo,
  List,
  Nav_BTN,
  Logo_title,
  Item
} from './style';

export default function Navbar() {
  return (
    <Parent>
      <Container>
        <Nav>
          <Logo>
            <Icons.logo />
            <Logo_title>Houzing</Logo_title>
          </Logo>
          <List>
            <Item>Home</Item>
            <Item>Properties</Item>
            <Item>Contact</Item>
          </List>
          <Nav_BTN>Login</Nav_BTN>
        </Nav>
      </Container>
    </Parent>
  )
}

