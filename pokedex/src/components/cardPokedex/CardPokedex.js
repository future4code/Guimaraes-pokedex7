import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const CardPokedex = (props) => {
  const navigate = useNavigate();

  const { name, sprites } = props.pokemon;

  const style = "thumb-container me-2 mb-2 " + props.type

  const goToPokemonDetails = (name) =>{
    navigate(`${name}`)
  }
  return (
    <div className={style} style={{ width: "18rem" }}>
      <div className="card-img-poke">
      <img
        src={sprites.other.dream_world.front_default}
        className="card-img-top"
        alt="Imagem Pokemon"
      />
      </div>
 
      <div className="card-body">
        <h5 className="card-title">{name}</h5> 
      </div>
      <div className="card-body">
      <p>ID:{props.pokemon.id}</p>
      </div>
      <div className="card-body">
        <button className="btn btn-primary me-3" onClick={()=> props.removeToPokedex(props.pokemon)}>Remover da Pokedex</button>
        <button
          className="btn btn-primary"
          onClick={() => goToPokemonDetails (name)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
