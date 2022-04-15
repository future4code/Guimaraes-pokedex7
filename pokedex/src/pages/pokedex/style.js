import styled from "styled-components";
import fundoPokedex from "../../assets/img/pokemon2.jpg";

export const StylePokedex = styled.div`
  overflow: scroll;
  height: 88vh;
  background-image: url(${fundoPokedex});

  h1 {
    color: #fff;
    background-color: blue;
  }
`;
