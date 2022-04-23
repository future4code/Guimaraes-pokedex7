import styled from "styled-components";
import fundoHome from "../../assets/img/pokemon2.jpg";

export const StyledHome = styled.div`
  overflow: scroll;
  height: 88vh;
  background-image: url(${fundoHome});

  .container-fluid {
    margin-left: 1rem;
  }

  h1 {
    color: #fff;
    background-color: blue;
    display: flex;
    width: 50vw;
    border-radius: 30px;
    padding: 10px;
    padding-left: 50px;
  }

  .container-button button{
 /*    margin-left: 1rem; */
  }

#pages{
  color: #fff;
  background-color: #000;
  font-size: 1.5rem;
  margin: 1rem;
  border-radius: 5px 5px; 
  padding: 2px;
}

`;
