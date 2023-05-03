import styled, { css } from "styled-components";
import { ReactComponent as logo } from '../assets/icons/logo.svg';


import { NavLink } from 'react-router-dom/cjs/react-router-dom';



export const Icons = styled.div``;

Icons.logo = styled(logo)`
width: 30px;
height: 36px;
`;


export const Parent = styled.div`
width: 1518px;
height: 64px;
background: #0D263B;
`
export const Container = styled.div`
width: 1270px;
margin: 0 auto;
`
const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Nav = styled(Container)`
${ Display };
`
export const Logo = styled.div`
width: 117px;
height: 64px;
:hover{
  cursor: pointer;
}
${ Display };
`
export const List = styled.div`
width: 333px;
height: 64px;
${ Display };
`
export const Nav_BTN = styled.button`
width: 120px;
height: 44px;
background-color: transparent;
border: 1px solid #fff;
border-radius: 2px;
color: #fff;
font-size: 14px;
font-weight: 400;
transition: all .4s;
:hover{
  cursor: pointer;
  transform: scale(1.05);
  transition: all .4s;
}
`
export const Logo_title = styled.h1`
font-size: 20px;
color: #fff;
`;
const styleItem = { color: '#999' }
export const Item = styled(NavLink).attrs(() => { return { activeStyle: styleItem } })`
font-size: 16px;
color: #fff;
font-weight: 400;
text-decoration: none;
cursor: pointer;
:hover{
  color: #f2f2e8;
}
`