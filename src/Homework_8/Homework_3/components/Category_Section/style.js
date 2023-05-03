import styled, { css } from "styled-components";

import { ReactComponent as home } from '../../assets/icons/home.svg';
import { ReactComponent as apartment } from '../../assets/icons/apartment.svg';
import { ReactComponent as office } from '../../assets/icons/office.svg';
import { ReactComponent as villa } from '../../assets/icons/villa.svg';

import { ReactComponent as left_black } from '../../assets/icons/left_black.svg';
import { ReactComponent as right_black } from '../../assets/icons/right_black.svg';

export const Icons = styled.div``;
const location = css`
position: absolute;
top: 150px;
`
Icons.Discord = styled(home)`
${ location }
left: 130px;
`;
Icons.House = styled(apartment)`
${ location }
left: 456px;
`;
Icons.Calculator = styled(office)`
${ location }
right: 435px;
`;
Icons.Maps = styled(villa)`
${ location }
right: 125px;
`;

const left_right_btn = css`
position:absolute;
top: 370px;
`
Icons.Left = styled(left_black)`
${ left_right_btn }
left: 50px;
`;
Icons.Right = styled(right_black)`
${ left_right_btn }
right: 50px;
`;


export const Parent = styled.div`
width: 1518px;
height: 682px;
position: relative;
`
export const Container = styled.div`
width: 1270px;
margin: 0 auto;
text-align: center;
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
export const FonTitle = styled.div`
font-weight: ${ ({ bold }) => bold ? "700" : "400" };
padding-top: ${ ({ top }) => top ? "96px" : "10px" };
color: ${ ({ bold }) => bold ? "#0D263B" : "#696969" };
font-size: ${ ({ type }) => {
    switch (type) {
      case "large": return "28px";
      case "medium": return "18px";
      case "small": return "16px";
      default: return "20px";
    }
  } };
`

export const CategoryContent = styled.div`
width: 1270px;
margin: 40px auto 24px auto;
${ Display };
position: relative;
`

export const CategoryBox = styled.img`
width: 100%;
height: 350px;
text-align: center;
padding: 0 15px;
line-height: 24px;
border-radius: 3px;
`
export const Slider_btn = styled.div`
width: 45px;
height: 45px;
background: #fff;
opacity: 0.2;
border: 1px solid #000;
border-radius: 50%;
position: absolute;
top: 353px;
left:${ ({ right }) => right ? "1441px" : "32px" };
box-shadow: 0px 10px 30px rgb(0,0,0);
:hover{
  cursor: pointer;
  opacity: 0.25;
}
`

export const CardName = styled.div`
color: #fff;
font-size: 18px;
font-weight: 600;
position: absolute;
bottom: 93px;
left: ${ ({ type }) => {
    switch (type) {
      case "left": return "135px";
      case "left_center": return "437px";
      case "right_center": return "780px";
      case "right": return "1097px";
      default: return "0";
    }
  } };
`
export const Slider_icons = styled.div`
width: 92px;
height: 8px;
position: absolute;
bottom: 90px;
left: 713px;
${ Display_flex };
`

export const Span_icon = styled.span`
width: ${ ({ active }) => active ? "12px" : "8px" };
height: ${ ({ active }) => active ? "12px" : "8px" };
border:${ ({ active }) => active ? "2px" : "4px" } solid  #0061DF;
border-radius: 50%;
display: inline-block;
margin: 0 4px;
`