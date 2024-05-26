import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './ContainerBuscador.css';
import api_cep from "../../services/api";

function ContainerBuscador(){

    const [input, setInput] = useState('')
    const [cep, setcep] = useState({})

    async function teste_use_state(){
       // 62940000/json

       if(input === ''){
        alert("Preencha algum CEP!")
        return
       }

       try{
        const objetosApi = await api_cep.get(`${input}/json`)
        setcep(objetosApi.data)

       }

       catch{
        alert("Erro ao buscar CEP")
        setInput("")

       }

    }

    return(
        <div className="container-buscador">
            <input
                type="text"
                placeholder="Digite seu CEP"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={teste_use_state}>
                <FaSearch  size={20} color="#f5f5f5"/>
            </button>
        </div>
    );
};

export default ContainerBuscador;
