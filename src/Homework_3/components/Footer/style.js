import styled, { css } from "styled-components";

import { ReactComponent as pin } from '../../assets/icons/pin.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as instagram } from '../../assets/icons/instagrem.svg';
import { ReactComponent as linkedin } from '../../assets/icons/linkedin.svg';

export const Icons = styled.div``;
Icons.Pin = styled(pin)``;
Icons.Phone = styled(phone)``;
Icons.Email = styled(email)``;
Icons.Facebook = styled(facebook)``;
Icons.Twitter = styled(twitter)``;
Icons.Instagram = styled(instagram)``;
Icons.Linkedin = styled(linkedin)``;

export const Parent = styled.div`
width: 1518px;
height: 417px;
background: #0D263B;
color: #fff;
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
export const Footer_top = styled.div`
height: 348px;
${ Display }
`
export const Footer_bottom = styled.div`
height: 68px;
border-top: 1px solid rgba(255, 255, 255, 0.15);

`
export const Footer_Box = styled.div`
width:  ${ ({ type }) => {
    switch (type) {
      case "large": return "295px";
      case "medium": return "142px";
      case "small": return "85px";
      default: return "20px";
    }
  } };;
height: 276px;
border: 1px solid #fff;
text-align: start;
`
export const Title = styled.div`
font-size: ${ ({ bold }) => bold ? "16px" : "14px" };
font-weight: ${ ({ bold }) => bold ? "600" : "400" };
margin-left: ${ ({ bold }) => bold ? "0" : "15px" };
`
export const Text = styled.div`
width: 270px;
height: 40px;
display: flex;
line-height: 20px;
margin-top: 23px;
`