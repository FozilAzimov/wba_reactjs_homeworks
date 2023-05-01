import styled, { css } from "styled-components";

export const Container = styled.div`
width: 588px;
height: 340px;
margin: 200px auto 0 auto;
display: flex;
align-items: center;
position: relative;
overflow: hidden;
z-index: 999;
`
export const Img = styled.img`
width: 100%;
height: 340px;
border-radius: 15px;
`
const Stile = css`
width: 40px;
height: 40px;
border: 1px solid lightblue;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
color: lightblue;
font-weight: 700;
z-index: 999;
cursor: pointer;
:active{
  border: 2px solid blue;
}
`;

export const LeftIcon = styled.div`
${ Stile };
left: 20px;
`
export const RightIcon = styled.div`
${ Stile };
right: 20px;
`

export const SliderImg = styled.div`
width: 588px;
height: 340px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 1s;
`