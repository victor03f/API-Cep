import { useState } from "react"
import './BuscarCEP.css' 
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
        } catch (error) {
            setErro(error)
        }

    }

    return (
        <div className="content">
            <h1>
                Buscar Endereço pelo CEP
            </h1>
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
        </div>
    )
}