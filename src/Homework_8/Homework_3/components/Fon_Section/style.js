import styled, { css } from "styled-components";
import { ReactComponent as left } from '../../assets/icons/left.svg';
import { ReactComponent as right } from '../../assets/icons/right.svg';
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as car } from '../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';

export const Icons = styled.div``;

const left_right_btn = css`
position:absolute;
top: 267px;
`
Icons.Left = styled(left)`
${ left_right_btn }
left: 50px;
`;
Icons.Right = styled(right)`
${ left_right_btn }
right: 50px;
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;




export const Parent = styled.div`
width: 1518px;
height: 571px;
position: relative;
`
const Display = css`
display: flex;
justify-content: center;
`
const Display_flex = css`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Fon = styled.img`
width: 100%;
height: 571px;
position: absolute;
`;

export const Opacity = styled.div`
width: 1518px;
height: 571px;
background: rgba(0, 0, 0, 0.65);
position: absolute;
${ Display }
`

export const Slider_btn = styled.div`
font-size: 30px;
width: 45px;
height: 45px;
background: #fff;
opacity: 0.2;
border-radius: 50%;
position: absolute;
top: 250px;
left:${ ({ right }) => right ? "1441px" : "32px" };
:hover{
  cursor: pointer;
  background: #fff;
  opacity: 0.25;
}
`
export const CenterBox = styled.div`
width: 492px;
height: 400px;
position: absolute;
bottom: 32px;
/* background: silver; */
`

export const Box = styled.div`
width: 337px;
height: 47px;
margin: 0 auto 30px auto;
${ Display_flex };
`;

export const FonTitle = styled.div`
font-weight: ${ ({ bold }) => bold ? "700" : "400" };
margin-bottom: ${ ({ bold }) => bold ? "10px" : "0" };
font-size: ${ ({ type }) => {
    switch (type) {
      case "large": return "44px";
      case "medium": return "28px";
      case "small": return "16px";
      default: return "20px";
    }
  } };
color: #fff;
height: 47px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

export const Nav_BTN = styled(Box)`
width: 180px;
height: 44px;
background-color: transparent;
border: 1px solid #fff;
border-radius: 2px;
color: #fff;
font-size: 14px;
font-weight: 400;
transition: all 0.4s;
:hover{
  cursor: pointer;
  transform: scale(1.05);
  transition: all 0.4s;
}
${ Display };
margin-top: 40px;
`

export const Slider_icons = styled.div`
width: 92px;
height: 8px;
position: absolute;
bottom: 0;
left: 200px;
${ Display_flex };
`
export const Span_icon = styled.span`
width: ${ ({ active }) => active ? "12px" : "8px" };
height: ${ ({ active }) => active ? "12px" : "8px" };
background: #fff;
border-radius: 50%;
display: inline-block;
margin: 0 4px;
`