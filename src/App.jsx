import ContainerBuscador from "./components/ContainerBuscador/ContainerBuscador";
function App(){
    return(
        <div className="container">
            <h1 className="titulo">Meu Buscador de CEP</h1>
            <ContainerBuscador />
            <div className="card">
            </div>
        </div>
    );
};

export default App;
