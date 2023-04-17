import styled, { css } from "styled-components";

export const Icons = styled.div``;


export const Parent = styled.div`
width: 1518px;
height: 571px;
position: relative;
/* text-align: center; */
`
export const Fon = styled.img`
width: 1518px;
height: 571px;
`
export const Opacity = styled.div`
width: 1518px;
height: 571px;
background: rgba(0, 0, 0, 0.65);
position: absolute;
`
const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
const Display_flex = css`
display: flex;
justify-content: space-between;
align-items: center;
`
export const FonTitle = styled.h1`
width: 567px;
height: 72px;
margin: 204px 48px;
color: #fff;
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
text-align: center;
font-size: 28px;
font-weight: 600;
`
export const Nav_BTN = styled.div`
width: 180px;
height: 44px;
background: #0061DF;
border-radius: 2px;
color: #fff;
font-size: 14px;
font-weight: 400;
transition: all 0.7s;
:hover{
  cursor: pointer;
  background: rgb(0, 90, 200);
  border: 1px solid  silver;
  transition: all 0.7s;
}
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom: 203px;
left: 50%;
transform: translateX(-50%);
`


