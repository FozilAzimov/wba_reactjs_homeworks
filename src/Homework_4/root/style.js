import styled from "styled-components";

export const Sticky = styled.div`
width: 1518px;
position: sticky;
top: 0;
z-index: 999;
box-shadow: 0 2px 20px  rgba(13, 38, 59, .3);
@media (max-width:375px) {
  max-width:375px
}
`