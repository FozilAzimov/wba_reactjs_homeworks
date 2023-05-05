import React, { useEffect, useState } from 'react';

import {
  Container,
  Item
} from './style';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

export default function Navbar() {

  const his = useHistory();

  const [pathname, Pathname] = useState('home');

  const setName = ({ target: { innerText } }) => {
    Pathname(innerText.toLowerCase());
  }

  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("", pathname)

  console.log(newUrl);


  return (
    <Container>

      <Item onClick={ (e) => setName(e) }>Home</Item>
      <Item onClick={ (e) => setName(e) }>About</Item>
      <Item onClick={ (e) => setName(e) }>Contact</Item>
      <Item onClick={ (e) => setName(e) }>Info</Item>

    </Container>
  )
}
