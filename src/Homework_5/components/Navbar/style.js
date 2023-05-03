import styled, { css } from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Icons = styled.div``;
Icons.Logo = styled(logo)``;


const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Parent = styled.div`
width: 1518px;
height: 64px;
background: #0D263B;
position: sticky;
top: 0;
box-shadow: 0 5px 15px rgba(13, 38, 59, 0.3);
`
export const Container = styled.div`
width: 1258px;
margin: 0 auto;
`
export const NavBox = styled.div`
width: 855px;
height: 64px;
${ Display }
`
export const Logo = styled.div`
width: 105px;
height: 64px;
${ Display }
cursor: pointer;
`
export const Nav = styled.div`
width: 333px;
height: 64px;
${ Display }
`
export const Text = styled.div`
font-size: 16px;
color: ${ ({ white }) => white ? '#fff' : 'lightgray' };
font-weight: ${ ({ bold }) => bold ? '700' : '400' };
transition: all .3s;
:hover{
  cursor: pointer;
}
:active{
  color: #fff;
  transition: all .3s;
}
`