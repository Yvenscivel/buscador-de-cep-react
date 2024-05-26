import ContainerBuscador from "./components/ContainerBuscador/ContainerBuscador";
import Titulo from "./components/Titulo/Titulo";
import Card from "./components/Card/Card";
import React from "react";

function App(){

    return(
        <div className="container">
            <Titulo />
            <ContainerBuscador />
            <Card />
        </div>
    );
};

export default App;
