import styled, { css } from "styled-components";

import { ReactComponent as left_black } from '../../assets/icons/left_black.svg';
import { ReactComponent as right_black } from '../../assets/icons/right_black.svg';
import { ReactComponent as user } from "../../assets/icons/rasm6.svg";

export const Icons = styled.div``;

const left_right_btn = css`
position:absolute;
top: 287px;
`
Icons.Left = styled(left_black)`
${ left_right_btn }
left: 50px;
`;
Icons.Right = styled(right_black)`
${ left_right_btn }
right: 50px;
`;
Icons.User_img = styled(user)`
position: absolute;
top: 178px;
left: 50%;
transform: translateX(-50%);
border: 2px solid #fff;
border-radius: 50%;
box-shadow: 0 0 10px silver;
`;

export const Parent = styled.div`
width: 1518px;
height: 482px;
background: #F5F7FC;
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
export const FonTitle = styled.div`
font-weight: ${ ({ bold }) => bold ? "700" : "400" };
padding-top: ${ ({ top }) => top ? "48px" : "10px" };
font-size: ${ ({ type }) => {
    switch (type) {
      case "large": return "28px";
      case "medium": return "18px";
      case "small": return "16px";
      default: return "20px";
    }
  } };
color: ${ ({ bold }) => bold ? "#0D263B" : "#696969" };
`
export const Slider_btn = styled.div`
width: 45px;
height: 45px;
background: #fff;
opacity: 0.2;
border: 1px solid #000;
border-radius: 50%;
position: absolute;
top: 270px;
left:${ ({ right }) => right ? "1441px" : "32px" };
box-shadow: 0px 10px 30px rgb(0,0,0);
:hover{
  cursor: pointer;
  opacity: 0.25;
}
`

export const CardBox = styled.div`
width: 1270px;
height: 286px;
${ Display };
margin-top: 32px;
`
export const Card = styled.div`
width: 380px;
height: 286px;
position: relative;
text-align: center;
`
export const TopBox = styled.div`
width: 380px;
height: 197px;
background: #fff;
padding: 40px 48px 61px 48px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
color: #696969;
`

export const Card_title = styled.div`
margin-top: ${ ({ bold }) => bold ? "37px" : "10px" };
font-weight: ${ ({ bold }) => bold ? "600" : "400" };
font-size: 16px;
color: ${ ({ bold }) => bold ? "#0D263B" : "#696969" };
`

