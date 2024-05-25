import { FaSearch } from "react-icons/fa";

function App(){
    return(
        <div className="container">
            <h1 className="titulo">Meu Buscador de CEP</h1>

            <div className="container-buscador">
                <input
                type="text"
                placeholder="Digite seu CEP"
                />
                <button>
                    <FaSearch  size={20} color="#f5f5f5"/>
                </button>
            </div>
            <div className="card">

            </div>
        
        </div>
    );
};

export default App;
