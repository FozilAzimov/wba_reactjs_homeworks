import styled, { css } from "styled-components";
import { ReactComponent as filter_home } from '../../assets/icons/filter_home.svg';
import { ReactComponent as status } from '../../assets/icons/status.svg';
import { ReactComponent as price } from '../../assets/icons/price.svg';
import { ReactComponent as modal_icon } from '../../assets/icons/advenced.svg';
import { ReactComponent as btn_search } from '../../assets/icons/search.svg';

export const Icons = styled.div``;

const icon_position = css`
position: absolute;
left: 35px;
top: 13px;
:hover{
  cursor: pointer;
}
`;

Icons.filter_home = styled(filter_home)`
${ icon_position }
left: 15px !important;
`;
Icons.status = styled(status)`
${ icon_position }
`;
Icons.price = styled(price)`
${ icon_position }
`;
Icons.modal_icon = styled(modal_icon)`
${ icon_position }
left: 15px !important;
`;
Icons.btn_search = styled(btn_search)`
${ icon_position }
left: 54px;
`;



export const Parent = styled.div`
width: 1518px;
height: 64px;
background: #fff;
`
export const Container = styled.div`
width: 1270px;
margin: 0 auto;
`
const Display = css`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Filter = styled(Container)`
height: 64px;
${ Display };
`
export const Input_icon = styled.div`
position: relative;
`
export const First_Filter_input = styled.input`
width: 570px;
height:44px;
border: 1px solid #E6E9EC;
border-radius: 2px;
outline: none;
padding-left: 44px ;
font-size: 14px;
font-weight: 400px;
color: #0D263B;
`
export const Modal_btn = styled(First_Filter_input)`
width: 131px;
padding-left: 35px ;
background-color: #fff;
transition: all .4s;
:hover{
  cursor: pointer;
  background: rgb(247, 243, 243, 0.999);
  transition: all .2s;
  border: 1px solid #999;
}
`
export const Search_inp = styled(First_Filter_input)`
width: 180px;
background: #0061DF;
border: 1px solid #0061DF;
padding-left: 78px ;
::placeholder{
  color: #fff;
}
color: #fff;
`
