import { ContainerLeft, TituloLeft, Image } from "./styles";
import imagem from '../../images/astronaut.svg';


const Left = () => {

    return(
        <ContainerLeft>
            <TituloLeft>Faça login <br/> E entre para o nosso time</TituloLeft>
            <Image src={imagem} alt="Astrounauta" />
        </ContainerLeft>
    )
}

export default Left;