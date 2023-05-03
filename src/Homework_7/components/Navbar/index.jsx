import React, { useState } from 'react';

import {
  Container,
  Item
} from './style';

export default function Navbar() {
  const [pathname, Pathname] = useState('home');

  const setName = ({ target: { innerText } }) => {
    Pathname(innerText.toLowerCase());
  }


  return (
    <Container>

      <Item onClick={ (e) => setName(e) }>Home</Item>
      <Item onClick={ (e) => setName(e) }>About</Item>
      <Item onClick={ (e) => setName(e) }>Contact</Item>
      <Item onClick={ (e) => setName(e) }>Info</Item>

    </Container>
  )
}
