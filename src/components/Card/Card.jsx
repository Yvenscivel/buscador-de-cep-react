import React from "react";
import './Card.css'


function Card(){
    return(
        <div className="card">
            <h2>CEP</h2>
            <span>Unidade Federativa:   </span>
            <span>Localidade:      </span>
            <span>Bairro:      </span>
            <span>Logradouro:   </span>
        </div>
    );
;}

export default Card;

