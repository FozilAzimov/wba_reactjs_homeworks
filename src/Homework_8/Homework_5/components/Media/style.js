import styled, { css } from "styled-components";
import { ReactComponent as file } from "../../assets/icons/file.svg";

export const Icons = styled.div``;

Icons.File = styled(file)``;

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
      case 'small': return '14px';
      default: return '0';
    }
  } };
color:${ ({ gray }) => gray ? '#696969' : '#0D263B' };
opacity:${ ({ gray }) => gray ? '.7' : '1' };
font-weight: ${ ({ bold }) => bold ? '600' : '400' };
padding-bottom:  ${ ({ p_b }) => p_b ? '32px' : '0' };
`
export const Box = styled.div`
width: 100%;
height: 900px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding: 24px 30px 48px 30px;
margin-bottom: 32px;
`
export const Select = styled.select`
width: 383px;
height: 30px;
border: none;
color: #696969;
border-bottom: 2px solid  #E6E9EC;
`;
export const Option = styled.option``;

export const Media_Img_Box = styled.div`
width: 660px;
height: 150px;
${ Display };
margin-top: 16px;
`;
export const Img_Box = styled.div`
width: 150px;
height: 150px;
background: #C4C4C4;
border-radius: 3px;
transition: all .4s;

:hover{
  cursor:pointer;
  box-shadow: 0 0 5px #000;
  transition: all .4s;
}
`;

export const Media_Btn = styled.button`
padding: 12px 40px;
border: 1px solid #0061DF;
border-radius: 2px;
color: #0061DF;
background: #fff;
margin: 24px 0 44px 0;
transition: all .4s;

:hover{
  cursor:pointer;
}

:active{
    transition: all .4s;
    transform: scale(1.07);
}
`
export const Media_Icon = styled.div`
width: 130px;
height: 20px;
margin-top: 16px;
${ Display };

:hover{
  cursor: pointer;
}
`

export const InpBox = styled.div`
width: 100%;
height: 70px;
${ Display }
align-items: end !important;
margin-bottom: 45px;
`
export const Inp = styled.input`
width: 100%;
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