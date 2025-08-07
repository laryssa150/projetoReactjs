import React, {useState} from "react";

function Formularios(){
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[telefone, setTelefone] = useState("");
    const[endereco, setEndereco]= useState("")

    function cadastrarUsuarios (e){
    e.preventDefault();
    setUser({
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
    });
    setNome("");
    setEmail("");
    setTelefone("");
    setEndereco("");
    }

    return(
        <div className="container">
            <h1>Cadastro de Usuários</h1>
        <form onSubmit={cadastrarUsuarios}>
            <label htmlFor="nome">Nome:</label>
            <input placeholder="Digite seu Primeiro nome" type="text" id="nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
            <br/>
            <label htmlFor="nome">Sobrenome:</label>
            <input placeholder="Digite seu Sobrenome" type="text" id="sobrenome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input placeholder="Digite seu Email" type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <br/>
            <label htmlFor="telefone">Telefone:</label>
            <input placeholder="Digite seu telefone" type="number" id="telefone" value={telefone} onChange={(e)=> setTelefone(e.target.value)}/>
            <br/>
            <label htmlFor="endereço">Endereço:</label>
            <input placeholder="Digite seu Endereço" type="text" id="endereco" value={endereco} onChange={(e)=> setEndereco(e.target.value)}/>
            <br/>
            <label htmlFor="complemeto">Complemento:</label>
            <input placeholder="Digite o complemento" type="text" id="complemento" value={endereco} onChange={(e)=> setEndereco(e.target.value)}/>
            <br/>
            <label htmlFor="cidade">Cidade:</label>
            <input placeholder="Cidade" type="text" id="cidade" value={endereco} onChange={(e)=> setEndereco(e.target.value)}/>
            <br/>
            <label htmlFor="estado">Estado:</label>
            <input placeholder="Estado" type="text" id="estado" value={endereco} onChange={(e)=> setEndereco(e.target.value)}/>
            <br/>
            <label htmlFor="cep">CEP:</label>
            <input placeholder="Digite seu CEP" type="number" id="cep" value={endereco} onChange={(e)=> setEndereco(e.target.value)}/>
            <br/>

            <button type="submit">Registrar</button>
        </form>
        <br/>
        <br/>
        </div>
    )
}
export default Formularios;