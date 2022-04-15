import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/Coordinator";
import { goToPokemonDetails } from "../../routes/Coordinator";

export const CardPokedex = (props) => {
  const navigate = useNavigate();

  return (
    <div className="card me-2 mb-2" style={{ width: "18rem" }}>
      <img
        src={""}
        className="card-img-top"
        alt="Imagem Pokemon"
      />
      <div className="card-body">
        <h5 className="card-title">{""}</h5>
      </div>
      <div className="card-body">
        <button
          className="btn btn-primary me-3"
         
        >
          Ir à Pokedex
        </button>
        <button
          className="btn btn-primary"
         
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
