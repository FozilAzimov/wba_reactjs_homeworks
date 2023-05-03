import React, { Component } from 'react';
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

export default class Navbar extends Component {
  render() {
    return (
      <Parent>
        <Container>
          <Nav>
            <Logo>
              <Icons.logo />
              <Logo_title>Houzing</Logo_title>
            </Logo>
            <List>
              <Item to='/home'>Home</Item>
              <Item to='/properties'>Properties</Item>
              <Item to='/contact'>Contact</Item>
            </List>
            <Nav_BTN>Login</Nav_BTN>
          </Nav>
        </Container>
      </Parent>
    )
  }
}
