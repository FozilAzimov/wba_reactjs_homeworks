import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 60px;
background: #333;
display: flex;
justify-content: space-evenly;
align-items: center;
.active{
color: red;
}
`


export const Item = styled(NavLink)`
color: white;
text-decoration: none;
font-size: 20px;
`