import axios from "axios";

// https://viacep.com.br/ws/     --      62940000/json

const api_cep = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api_cep;