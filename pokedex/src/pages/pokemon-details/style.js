import styled from "styled-components";
import fundoPokedexDetails from "../../assets/img/pokemon2.jpg";

export const StylePokemonDetails = styled.div`
  height: 88vh;
  background-image: url(${fundoPokedexDetails});
  overflow: scroll;

  h1 {
    color: #fff;
    background-color: blue;
  }
`;
