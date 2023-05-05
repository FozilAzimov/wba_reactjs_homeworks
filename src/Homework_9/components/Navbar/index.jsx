import React from 'react'
import { Container, Item } from './style';
import { Outlet } from 'react-router-dom';


export default function Navbar() {



  return (
    <>
      <Container>
        <Item to='/'>LOGO</Item>
        <Item to='/home'>Home</Item>
        <Item to='/about'>About</Item>
        <Item to='/services'>Services</Item>
        <Item to='/contact'>Contact</Item>
        <Item to='/singin'>SingIn</Item>
      </Container>
      <Outlet />
    </>
  )
}