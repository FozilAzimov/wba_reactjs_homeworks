import styled, { css } from "styled-components";

const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
const placeholder = css`
font-size: 14px;
color: #696969;
opacity: .7;
`
export const Parent = styled.div`
width: 100%;
`
export const Container = styled.div`
width: 1258px;
margin: 0 auto;
`

export const Text = styled.div`
color: #0D263B;
font-size: ${ ({ size }) => {
    switch (size) {
      case 'large': return '28px';
      case 'medium': return '18px';
      default: return '0';
    }
  } };
font-weight: 600;
padding-bottom:  ${ ({ p_b }) => p_b ? '32px' : '0' };
`
export const Form = styled.form`
width: 100%;
height: 170px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding: 24px 30px 48px 30px;
margin-bottom: 32px;
`
export const InpBox = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
export const Inp = styled.input`
width: 585px;
height: 30px;
border: none;
outline: none;
border-bottom: 2px solid  #E6E9EC;
::placeholder{
${ placeholder };
}
margin-bottom: 45px;
`
export const Select = styled.select`
width: 383px;
height: 30px;
border: none;
color: #696969;
border-bottom: 2px solid  #E6E9EC;
`;
export const Option = styled.option``;

export const Property_BtnBox = styled.span`
width: 100%;
display: flex;
justify-content: end;
margin-bottom: 96px;
`
export const Property_Btn = styled.button`
width: 280px;
height: 44px;
background: #0061DF;
border-radius: 2px;
border: none;
color: #fff;

:hover{
  cursor:pointer;
}

:active{
    transform: scale(1.03);
}
`;
