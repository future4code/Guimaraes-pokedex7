import React from "react";
import './style.css'
import {goToHome} from "../../routes/Coordinator"
import { goToPokedex } from "../../routes/Coordinator";
import { goToPokemonDetails } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";

export const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Projeto Pokedex</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/"> Voltar a Página Inicial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pokedex">Ver Minha Pokedex</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pokedex/details">Detalhes do Pokemon</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>goBack(navigate)}>Voltar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </div>
    
  );
};
