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
    margin-left: 1rem;
  }


`;
