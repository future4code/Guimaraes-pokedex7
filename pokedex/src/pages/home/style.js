import styled from "styled-components"
import fundoHome from "../../assets/img/pokemon2.jpg"
 
export const StyledHome = styled.div`
background-image: linear-gradient(0deg, rgb(249, 66, 6),rgb(250, 134, 22),rgb(251, 202, 37));
display: flex;
flex-direction: column;
align-items: center;
height: 88vh;
overflow: scroll;
background-image: url(${fundoHome});
`

