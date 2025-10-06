import { View ,TouchableOpacity} from 'react-native'
import ImagemHome from '../../assets/imghome.png'
import BtnsBey from "../../components/buttons/ButtonsBey"
import { useNavigation } from "@react-navigation/native"
import { ContainerPages, HomeCaption, HomeContainer, HomeLink, HomeSpan, ImageHome, TitleHome } from './styles'
export default function HomeBey(){
    const navigation = useNavigation()
    return(
        <HomeContainer>

            <ImageHome source={ImagemHome} alt='imagem de um pequeno estacionamento'/>

            <TitleHome>Seja bem-vindo!</TitleHome>
            <ContainerPages>
              <BtnsBey title={"Cadastra-se"} onPress={() => navigation.navigate("Cadastro")} />
              <BtnsBey title={"Login"} onPress={() => navigation.navigate("Login")} />
              <BtnsBey title={"Liberação"} onPress={() => navigation.navigate("Liberacao")} />
              <BtnsBey title={"Retirada"} onPress={() => navigation.navigate("Retirada")} />
            </ContainerPages>
        <HomeLink>
            <HomeCaption>Verificar veículos ativos?</HomeCaption>
            <TouchableOpacity onPress={() => navigation.navigate("Veiculos")}>
                        <HomeSpan>Clique aqui!</HomeSpan>
                      </TouchableOpacity>
        </HomeLink>

     </HomeContainer>
                     
    )
}