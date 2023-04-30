import styled, { css } from "styled-components";

import { ReactComponent as pin } from '../../assets/icons/pin.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as instagram } from '../../assets/icons/instagrem.svg';
import { ReactComponent as linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as topIcon } from '../../assets/icons/topIcon.svg';

export const Icons = styled.div``;
const active = css`
:hover{
  cursor: pointer;
}
`
Icons.Pin = styled(pin)`
${ active }
width: 30px;
height: 30px;
`;
Icons.Phone = styled(phone)`
${ active }
`;
Icons.Email = styled(email)`
${ active }
`;
Icons.Facebook = styled(facebook)`
${ active }
`;
Icons.Twitter = styled(twitter)`
${ active }
`;
Icons.Instagram = styled(instagram)`
${ active }
`;
Icons.Linkedin = styled(linkedin)`
${ active }
`;
Icons.Logo = styled(logo)`
${ active }
`;
Icons.TopIcon = styled(topIcon)`
${ active }
`;

export const Parent = styled.div`
width: 1518px;
height: 417px;
background: #0D263B;
color: #fff;
@media(max-width:375px){
  width: 375px;
  height: 1285px;
}
`
export const Container = styled.div`
width: 1270px;
margin: 0 auto;
text-align: center;
@media(max-width:375px){
  width: 343px;
}
`
const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Footer_top = styled.div`
height: 348px;
${ Display }
@media(max-width:375px){
  width: 343px;
  height: 1136px;
  flex-direction: column;
  align-items: start;
}
`
export const Footer_bottom = styled.div`
height: 68px;
border-top: 1px solid rgba(255, 255, 255, 0.15);
@media(max-width:375px){
  width: 375px;
  height: 148px;
}
`
export const Footer_Box = styled.div`
width:  ${ ({ type }) => {
    switch (type) {
      case "large": return "295px";
      case "medium": return "142px";
      case "small": return "85px";
      default: return "20px";
    }
  } };
height: 276px;
text-align: start;
@media(max-width:375px){
  margin-top: 50px;
  height:  ${ ({ type }) => {
    switch (type) {
      case "large": return "230px";
      case "medium": return "300px";
      case "small": return "200px";
      default: return "20px";
    }
  } };
}
`
export const Title = styled.div`
font-size: ${ ({ bold }) => bold ? "16px" : "14px" };
font-weight: ${ ({ bold }) => bold ? "600" : "400" };
margin-left: ${ ({ type }) => {
    switch (type) {
      case "margin": return "15px";
      default: return "0";
    }
  } };
:hover{
  cursor: ${ ({ bold }) => bold ? "default" : "pointer" };
}
`
export const Text = styled.div`
width: 250px;
height: ${ ({ height }) => height ? "40px" : "20px" };
display: flex;
line-height: 20px;
margin-top:23px;
`
export const Footer_icons = styled.div`
width: 160px;
height: 36px;
${ Display }
position: relative;
`
export const Opasity = styled.div`
width: 36px;
height: 36px;
border-radius: 3px;
opacity: .1;
background: #fff;
position: absolute;
right: 38px;
`
export const Footer_logo = styled.div`
height: 68px;
${ Display };
@media(max-width:375px){
  height: 148px;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}
`
export const Footer_title = styled.div`
height: 36px;
width: 110px;
${ Display };
`
export const Footer_text = styled.div`
height: 45px;
width: 480px;
${ Display };
@media(max-width:375px){
  width: 240px;
  height: 40px;
  text-align: center;
}
`
export const Top_icon = styled.button`
width: 45px;
height: 45px;
background: #0061DF;
border: none;
:hover{
  cursor: pointer;
}
${ Display }
justify-content: center;
@media(max-width:375px){
width: 45px;
height: 45px;
position: absolute;
right: 0px;
bottom: 16px;
}
`