import { FaSearch } from "react-icons/fa";
import './ContainerBuscador.css'

function ContainerBuscador(){
    return(
        <div className="container-buscador">
            <input
                type="text"
                placeholder="Digite seu CEP"
            />
            <button>
                <FaSearch  size={20} color="#f5f5f5"/>
            </button>
        </div>
    )
}

export default ContainerBuscador;