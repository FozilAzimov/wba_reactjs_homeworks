import React from 'react';
import {
  Icons,
  Parent,
  Container,
  NavBox,
  Logo,
  Nav,
  Text,
} from './style';


export default function Navbar() {
  return (
    <>
      <Parent>
        <Container>
          <NavBox>
            <Logo>
              <Icons.Logo />
              <Text bold white>Houzing</Text>
            </Logo>

            <Nav>
              <Text>Home</Text>
              <Text>Properties</Text>
              <Text>Contact</Text>
            </Nav>

          </NavBox>
        </Container>
      </Parent>
    </>
  )
}
