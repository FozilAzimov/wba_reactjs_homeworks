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
height: 240px;
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