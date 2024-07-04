/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react"
import './BuscarCEP.css' 
import { Link } from 'react-router-dom';

export default function buscarCEP() {
    
    

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    const [erro,setErro] = useState(null)


    const fetchEndereco = async () => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/
            `)
            const data = await response.json()
            setEndereco(data)
            setErro('')
        } catch (error) {
            setErro(error)
        }

    }

    return (
        <div className="content">
            <h4>
            Busca por CEP: Insira o CEP desejado no campo de busca principal e clique no botão "Buscar". A ferramenta retornará o endereço completo correspondente, incluindo nome da rua, bairro, cidade e estado.
            </h4>
            <input
                type="text"
                value={cep}
                placeholder="Digite aqui"
                onChange={(e) => setCep(e.target.value)}
            ></input>
            <button onClick={fetchEndereco}>
                Buscar
            </button>
            {erro && (
                <p>CEP não encontrado.</p>
            )}
            {endereco &&(
            <div>
                <p>Rua:{endereco.logradouro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>Bairro:{endereco.bairro}</p>
                <p>UF:{endereco.uf}</p>
                </div>
            )}
            <article>
                <button>
                    <Link to="/">Buscar CEP</Link>
                </button>
            </article>
        </div>
    )
}