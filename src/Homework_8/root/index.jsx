import React from 'react'

import Navbar from './Navbar';
import Filter_Section from './Filter_Section';
import Footer from './Footer'

import Root1 from '../Homework_3/root';
import Root2 from '../Homework_5/root';

import { Fixed } from './style';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

export default function Root() {
  return (
    <>
      <Fixed>
        <Navbar />
        <Filter_Section />
      </Fixed>

      <Route path={ '/home' }>
        <Root1 />
      </Route>

      <Route path={ '/properties' }>
        <Root2 />
      </Route>

      <Footer />
    </>
  )
}
