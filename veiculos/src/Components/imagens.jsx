import Hondacivic from "../assets/Hondacivic.jpg"
import fordimagem from "../assets/fordimagem.jpg"
import volkswagencarro from "../assets/volkswagencarro.jpg"

function Imagens (){
    return(
        <div>
            <h1>Lista de Imagens</h1>
            <img src={Hondacivic} alt="Civic"/>
            <img src={fordimagem} alt="Ford"/>
            <img src={volkswagencarro} alt="Civic"/>
        </div>
    )
}
export default Imagens