import React, {useState} from "react";

function Formularios(){
    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[idade, setidade] = useState(0);

    const[user,setUser]= useState({})

    function cadastrarUsuarios (e){
    e.preventDefault();
    setUser({
        nome: nome,
        email: email,
        idade: idade,
    });
    setNome("");
    setEmail("");
    setidade(0);
    }

    return(
        <div>
            <h1>Cadastro de Usuários</h1>
        <form onSubmit={cadastrarUsuarios}>
            <label htmlFor="nome">Nome:</label>
            <input placeholder="Digite seu nome" type="text" id="nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input placeholder="Digite seu Email" type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <br/>
            <label htmlFor="idade">Idade:</label>
            <input placeholder="Digite sua idade" type="idade" id="idade" value={idade} onChange={(e)=> setidade(e.target.value)}/>
            <br/>
            <button type="submit">Registrar</button>
        </form>
        <br/>
        <br/>
        <div>
            <span>Bem-vindo: {user.nome}</span><br/>
            <span>E-mail: {user.email}</span><br/>
            <span>Idade: {user.idade}</span><br/>
        </div>
        </div>
    )
}
export default Formularios;