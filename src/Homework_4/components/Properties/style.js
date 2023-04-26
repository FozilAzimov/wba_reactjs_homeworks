import styled, { css } from "styled-components";
import { ReactComponent as strelka_bottom } from '../../assets/icons/strelka_bottom.svg'
import { ReactComponent as bed } from '../../assets/icons/bed.svg'
import { ReactComponent as bath } from '../../assets/icons/bath.svg'
import { ReactComponent as garage } from '../../assets/icons/garage.svg'
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg'
import { ReactComponent as strelka } from '../../assets/icons/strelka.svg'
import { ReactComponent as yurak } from '../../assets/icons/yurak.svg'

export const Icons = styled.div``;

Icons.strelka_bottom = styled(strelka_bottom)`
position: absolute;
right: 0;
top: 5px;
`;
Icons.bed = styled(bed)``;
Icons.bath = styled(bath)``;
Icons.garage = styled(garage)``;
Icons.ruler = styled(ruler)``;
Icons.strelka = styled(strelka)``;
Icons.yurak = styled(yurak)``;

export const Parent = styled.div`
width: 1518px;
@media(max-width:375px){
  width: 375px;
}
`
export const Container = styled.div`
width: 1270px;
margin: 0 auto;
@media(max-width:375px){
  width: 343px;
  margin: 0 auto;
}
`
const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Title = styled.h1`
text-align: center;
@media(max-width:375px){
  width: 343px;
}
`
export const Text = styled.div`
color: ${ ({ black }) => black ? '#0D263B' : '#696969' };
font-size: ${ ({ type }) => {
    switch (type) {
      case 'large': return '28px';
      case 'medium': return '16px';
      case 'small': return '14px';
      default: return '0'
    }
  } };
font-weight: ${ ({ bold }) => bold ? '600' : '400' };
margin-top: ${ ({ m_t }) => m_t ? '64px' : '0' };
margin-bottom: ${ ({ m_b }) => {
    switch (m_b) {
      case 'katta': return '64px';
      case 'orta': return '8px';
      default: return '0'
    }
  } };
`
export const Sort_Result = styled(Container)`
height: 20px;
${ Display }
align-items: start;
`
export const Result = styled.div`
width: 92px;
height: 20px;
`
export const Sort = styled.div`
width: 200px;
height: 22px;
border-bottom: 2px solid #E6E9EC;
position: relative;
`
export const Inp = styled.input`
border: none;
width: 145px;
outline: none;
::placeholder{
  font-size: 14px;
}
padding-left: 5px;
`;
export const Card_Box = styled(Container)`
${ Display };
align-items: start;
flex-wrap: wrap;
margin-top: 16px;
row-gap: 20px;
@media(max-width:375px){
  width:375px;
}
`

export const Card = styled.div`
width: 380px;
height: 430px;
position: relative;
transition: .3s;
:hover{
  cursor: pointer;
  box-shadow: 0 0 10px silver;
  transition: .3s;
}
@media(max-width){
  width: 243px;
}
`;

export const Card_Img = styled.img`
width: 380px;
height: 220px;
border-radius: 3px 3px 0 0;
`;
export const User_img = styled.img`
position: absolute;
top: -20px;
right: 23px;
border-radius: 50%;
border: 2px solid #fff;
`;

export const Card_title = styled.div`
width: 380px;
height: 210px;
border-radius: 0 0 3px 3px;
border-left: 1px solid #E6E9EC;
border-right: 1px solid #E6E9EC;
border-bottom: 1px solid #E6E9EC;
margin-top: -8px;
position: relative;
`;

export const Btn = styled.button`
padding: 5px 12px;
font-size: 10px;
font-weight: 600;
border: none;
border-radius: 3px;
text-transform: uppercase;
color: #fff;
background: ${ ({ bg }) => bg ? '#0061DF' : '#0D263B' };
top: 20px;
left: ${ ({ bg }) => bg ? '20px' : '287px' };
position: absolute;
:hover{
  cursor: pointer;
}
`
export const Card_titleTop = styled.div`
width: 380px;
height: 150px;
text-align: start;
padding: 24px 0 16px 20px;
`
export const Card_titleBottom = styled.div`
width: 380px;
height: 60px;
padding: 8px 20px;
border-top: 1px solid #E6E9EC;
${ Display }
`

export const IconCard = styled.div`
height: 44px;
width: 340px;
margin-top: 15px;
${ Display }
`
export const IconBox = styled.div`
height: 44px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const CardFooter_left = styled.div`
width: 86px;
height: 44px;
`
export const CardFooter_right = styled.div`
width: 70px;
height: 35px;
${ Display }
`
export const Button = styled.button`
padding: 12px 85px;
margin: 60px auto 110px auto;
color: #fff;
border-radius: 2px;
border: none;
background: #0061DF;
cursor: pointer;
:active{
  transform: scale(1.01);
}
`