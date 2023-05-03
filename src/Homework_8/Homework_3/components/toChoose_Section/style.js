import styled, { css } from "styled-components";
import { ReactComponent as discord } from '../../assets/icons/discord.svg';
import { ReactComponent as house } from '../../assets/icons/house.svg';
import { ReactComponent as calculator } from '../../assets/icons/calculator.svg';
import { ReactComponent as maps } from '../../assets/icons/maps.svg';

export const Icons = styled.div``;

Icons.Discord = styled(discord)``;
Icons.House = styled(house)``;
Icons.Calculator = styled(calculator)``;
Icons.Maps = styled(maps)``;

export const Parent = styled.div`
width: 1518px;
height: 434px;
background: #F5F7FC;
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

export const ChooseContent = styled.div`
width: 1270px;
margin: 40px auto 24px auto;
${ Display }
`

export const ChooseBox = styled.div`
width: 235px;
height: 230px;
text-align: center;
padding: 0 15px;
line-height: 24px;
`

