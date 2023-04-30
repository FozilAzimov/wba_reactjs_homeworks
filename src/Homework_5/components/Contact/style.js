import styled, { css } from "styled-components";

const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
const placeholder = css`
font-size: 14px;
color: #696969;
`
export const Parent = styled.div`
width: 100%;
`
export const Container = styled.div`
width: 1258px;
margin: 0 auto;
`

export const Text = styled.div`
font-size: ${ ({ size }) => {
    switch (size) {
      case 'large': return '28px';
      case 'medium': return '18px';
      default: return '0';
    }
  } };
color: #0D263B;
font-weight: ${ ({ bold }) => bold ? '600' : '400' };
padding-top:  ${ ({ p_t }) => p_t ? '34px' : '0' };
padding-bottom:  ${ ({ p_b }) => p_b ? '32px' : '0' };
`
export const Form = styled.form`
width: 100%;
height: 301px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding: 24px 30px 48px 30px;
margin-bottom: 32px;
`
export const InpBox = styled.div`
width: 100%;
height: 70px;
${ Display }
align-items: end !important;
margin-bottom: 45px;
`
export const Inp = styled.input`
width:  ${ ({ width }) => width ? '100%' : '585px' };
height: 30px;
border: none;
outline: none;
border-bottom: 2px solid  #E6E9EC;
::placeholder{
${ placeholder };
}
`
export const Label = styled.label`
${ placeholder };
`;

