import styled, { css } from "styled-components";
import { ReactComponent as left_black } from '../../assets/icons/left_black.svg';
import { ReactComponent as right_black } from '../../assets/icons/right_black.svg';
import { ReactComponent as bed_black } from '../../assets/icons/bed_black.svg';
import { ReactComponent as bath_black } from '../../assets/icons/bath_black.svg';
import { ReactComponent as car_black } from '../../assets/icons/car_black.svg';
import { ReactComponent as ruler_black } from '../../assets/icons/ruler_black.svg';
import { ReactComponent as strelka } from '../../assets/icons/strelka.svg';
import { ReactComponent as yurak } from '../../assets/icons/yurak.svg';

export const Icons = styled.div``;


const left_right_btn = css`
position:absolute;
top: 318px;
`
Icons.Left = styled(left_black)`
${ left_right_btn }
left: 50px;
`;
Icons.Right = styled(right_black)`
${ left_right_btn }
right: 50px;
`;
export const Img = styled.img`
position: absolute;
right: 22px;
top: 200px;
border: 2px solid #fff;
border-radius: 50%;
`
Icons.Bed = styled(bed_black)``;
Icons.Bath = styled(bath_black)``;
Icons.Car = styled(car_black)``;
Icons.Ruler = styled(ruler_black)``;
Icons.Strelka = styled(strelka)``;
Icons.Yurak = styled(yurak)``;


export const Parent = styled.div`
width: 1518px;
height: 710px;
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
export const Recomended_title = styled.h1`
font-weight: ${ ({ bold }) => bold ? "600" : "400" };
font-size:  ${ ({ bold }) => bold ? "28px" : "16px" };
line-height: 36px;
letter-spacing: -0.02em;
color: ${ ({ bold }) => bold ? "#0D263B" : "#696969" };
margin-top:${ ({ bold }) => bold ? "96px" : "5px" } ;
`
export const Slider_btn = styled.div`
width: 45px;
height: 45px;
background: #fff;
opacity: 0.2;
border: 1px solid #000;
border-radius: 50%;
position: absolute;
top: 300px;
left:${ ({ right }) => right ? "1441px" : "32px" };
box-shadow: 0px 10px 30px rgb(0,0,0);
:hover{
  cursor: pointer;
  opacity: 0.25;
}
`
export const CardContent = styled.div`
width: 1180px;
height: 430px;
margin: 32px auto;
${ Display }
`
export const Card_box = styled.div`
width: 380px;
height: 430px;
border: 1px solid #E6E9EC;
border-radius: 3px;
position: relative;
text-align: start;
transition: all .4s;
:hover{
  cursor: pointer;
  transform: scale(1.002);
  box-shadow: 0 0 20px silver;
  transition: all .4s;
}
`
export const Card_img = styled.img`
border-radius: 3px 3px 0 0;
`;

export const Card_btn = styled.button`
padding: 5px 12px;
height: 23px;
width: 75px;
color: #fff;
font-weight: 600;
font-size: 10px;
background: ${ ({ btn }) => btn ? "#0D263B" : "#0061DF" };
border-radius: 3px;
border: none;
text-transform: uppercase;
position: absolute;
top: 20px;
left: ${ ({ btn }) => btn ? "289px" : "20px" };
${ Display }
:hover{ 
  cursor: pointer;
}
`

export const Card_style = styled(Recomended_title)`
font-size:  ${ ({ bold }) => bold ? "16px" : "14px" };
margin-top: ${ ({ mg }) => mg ? "17px" : "4px" };
line-height: 25px;
padding-left: 20px;
`;

export const Box = styled.div`
width: 337px;
height: 47px;
margin: 10px auto 15px auto;
${ Display_flex };
`;
export const FonTitle = styled.div`
font-size: 14px;
color: #696969;
height: 47px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const Card_footer = styled.div`
height: 60px;
border-top: 1px solid #E6E9EC;
${ Display };
`
export const Left_footer = styled.div``;
export const Right_footer = styled.div`
width: 70px;
margin-right: 20px;
${ Display };
`;

export const Slider_icons = styled.div`
width: 92px;
height: 8px;
position: absolute;
bottom: 48px;
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