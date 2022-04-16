import React, {useContext} from "react";
import { StylePokemonDetails } from "./style";
import { ContextPokemonList } from "../../context/Context";
import { CardPokemon } from "../../components/cardPokemon/cardPokemon";


export const PokemonDetails = () => {

  const cardPokemonDetails = ()=>{
        return (
        <>
           
        </>
    ) 
}


  return (
    <StylePokemonDetails>
      <div className="container-fluid">
      <div className="topo">
      <h1> Nome do Pokemon</h1>
      <button> Add a Pokedex</button>

      </div>
     
      <div className="foto-frente">
      <img
        src={"https://img.olhardigital.com.br/wp-content/uploads/2016/02/20160226125130-860x450.jpg"}
        className="card-img-top"
        alt="Imagem Pokemon"
      />
      </div>
      <div  className="foto-costa">
      <img
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2akpl8H3qydXsHMfD9tvtsxZqgq-HJHDyjV-OQLrnjPZd2g-RnjmkKhWEYdOQozAiXE&usqp=CAU"}
        className="card-img-top"
        alt="Imagem Pokemon"
      />
      </div>

      <div  className="poderes">
          <h4>Poderes</h4>
          <p> <b>hp:</b> 60 </p>
          <p><b>attack:</b> 62 </p>
          <p><b>defense:</b> 63 </p>
          <p><b>special-attack: </b> 80 </p>
          <p><b>special-defense: </b> 80 </p>
          <p><b>speed: </b> 60 </p>
      </div>
      
      <div className="grass-poison">
          <p className="grass">grass</p>
          <p className="poison">poison</p>
      </div>

      <div  className="ataques">
          <h4>Principais ataques</h4>
          <p> <b>hp:</b> 60 </p>
          <p><b>attack:</b> 62 </p>
          <p><b>defense:</b> 63 </p>
          <p><b>special-attack: </b> 80 </p>
          <p><b>special-defense: </b> 80 </p>
          <p><b>speed: </b> 60 </p>
      </div>
      
  </div>
    </StylePokemonDetails>

  );
};
