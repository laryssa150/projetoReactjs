import Carros from "./Carros";
import Imagens from "./imagens";
import Hondacivic from "./imagens"
import fordimagem from "./imagens"
import volkswagencarro from "./imagens"
 
 
function Garagem() {

const veiculos = [{
    nome: 'Civic',
    imagem : <img src={Hondacivic}alt="civic" />,
    ano: 2024

},

{
    nome: 'ford',
imagem : <img src={fordimagem}alt="ford" />,
ano: 2025
},

{
nome: 'volkswagen',
imagem : <img src={volkswagencarro}alt="volkswagen" />,
ano: 2023
}]

 
    return (
        <div>
            <h1>Os carros que estão na minha garagem :</h1>
            <ul>
            {veiculos.map((veiculo) => <Carros nome = {veiculo.nome} imagem = {veiculo.imagem} ano = {veiculo.ano} />)}</ul>
            <Imagens/>
        </div>
    )
}

 
export default Garagem;
 