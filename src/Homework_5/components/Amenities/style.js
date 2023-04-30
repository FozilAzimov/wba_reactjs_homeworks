import styled, { css } from "styled-components";

const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Parent = styled.div`
width: 100%;
`
export const Container = styled.div`
width: 1258px;
margin: 0 auto;
`
export const Box = styled.div`
width: 100%;
height: 340px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding: 24px 30px 48px 30px;
margin-bottom: 32px;
`
export const Text = styled.div`
font-size: ${ ({ size }) => {
    switch (size) {
      case 'medium': return '18px';
      case 'small': return '14px';
      default: return '0';
    }
  } };
color:${ ({ black }) => black ? '#0D263B' : '#696969' };
opacity:${ ({ gray }) => gray ? '.7' : '1' };
font-weight: ${ ({ bold }) => bold ? '600' : '400' };
padding-bottom:  ${ ({ p_b }) => p_b ? '32px' : '0' };
`
export const Form = styled.form`
height: 196px;
margin-top: 20px;
`
export const CheckBoxContent = styled.div`
width: 80%;
display: flex;
flex-wrap: wrap;
`;
export const CheckTitle = styled.div`
width: 20%;
height: 18px;
display: flex;
margin-bottom:26px;
`;
export const CheckBox = styled.input`
width: 18px;
height: 18px;
margin-right: 12px;
`;

