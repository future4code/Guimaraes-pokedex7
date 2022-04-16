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

  .topo{
    display:flex;
    justify-content: space-between;
  }
  .topo h1{
    display: flex;
    width: 100%;
    height:35px;
    font-size: 20px;
    padding: 5px;
    background-color:rgba(000,000,000,0.4);
    margin-top: 2px;
    border-radius: 6px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    justify-content:center;
    
  }

  .topo button{
    width: 200px;
    height: 35px;
    margin-right: 1px;
    border: 0;
    background-color:rgba(000,000,000,0.4);
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-size: 15px;
    border-radius: 6px;
    text-shadow:1px 1px 4px black;
    text-transform: uppercase;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    margin-top: 2px;
  }

  .topo button:hover{
    background-color: rgba(34,139,340,0.7);
  }

  .foto-frente{
    width:8rem;
    padding: 5px;
    margin-top: 20px;
    margin-left:100px;
    border-radius:10px;
    cursor: pointer;
  }

  .foto-frente:hover{
    border:solid 1px #ccc;
  }

  .foto-costa{
    width: 6rem;
    padding: 5px;
    margin-top:100px;
    margin-left:100px;
    cursor: pointer;
  }

  .foto-costa:hover{
    border:solid 1px #ccc;
  }

  .poderes{
    position: absolute;
    width: 250px;
    height: 320px;
    background-color: #ccc;
    margin-top: -260px;
    margin-left:430px;
    background-color: rgba(169,169,169,0.8);
  }

  .poderes:hover{
    background-color: rgba(0,0,0,0.7);
    cursor: pointer;
    color: #fff;
  }

  .poderes h4{
    font-size: 25px;
    text-align: center;
    padding: 3px;
    margin-top: 10px;
    font-weight: bolder;
  }

  .poderes p{
    margin-left: 15px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: normal;
  }

  .grass-poison{
    width: 220px;
    padding: 1px;
    height: 35px;
    display: flex;
    background-color: rgba(169,169,169,0.5);
    justify-content:space-evenly;
    margin-left: 850px;
    margin-top: -300px;
    border-radius: 5px;
    color: #000;
    font-weight: 500;
  }

  .grass-poison:hover{
    background-color: rgba(0,0,0,0.7);
    cursor: pointer;
    color: #fff;
  }

  .grass-poison p{
    justify-content: space-between;
  }

  .ataques{
    position: absolute;
    width: 250px;
    height: 320px;
    background-color: #ccc;
    margin-top: 20px;
    margin-left:840px;
    padding: 15px;
    background-color: rgba(169,169,169,0.8);
  }

  .ataques:hover{
    background-color: rgba(0,0,0,0.7);
    cursor: pointer;
    color: #fff;
  }
`;
