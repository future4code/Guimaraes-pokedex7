import styled from "styled-components"
import fundoError from "../../assets/img/pokemon2.jpg"
 
export const StyledError = styled.div`
overflow: scroll;
height: 88vh;
background-image: url(${fundoError});


h1{
    color: #fff;
    background-color: blue;
    display: flex;
    width: 50vw;
    border-radius: 30px;
    padding: 10px;
    padding-left: 50px;
}
`

