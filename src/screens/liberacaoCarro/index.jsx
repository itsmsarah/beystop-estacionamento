import { useState } from "react"
import { BackgroundLiberacao, LiberacaoCaption, LiberacaoContainer, LiberacaoContent, LiberacaoImg, LiberacaoLabel, LiberacaoLink, LiberacaoSpan, LiberacaoTitle, TextSpan } from "./styles"
import MiniVeiculos from '../../assets/img-mini-veículos.png'
import InputsBey from "../../components/inputs/InputsBey"
import BtnsBey from "../../components/buttons/ButtonsBey"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity ,ImageBackground} from "react-native"
import ImgEstacionamento from '../../assets/img-estacionamento.png'


export default function LiberacaoCarro(){
    const navigation = useNavigation()

    const [placa,setPlaca] = useState("")
    return(

         <ImageBackground   source={ImgEstacionamento}
                        resizeMode="cover"
                        style={{ flex: 1}}
                        >
        <BackgroundLiberacao>
            <LiberacaoImg source={MiniVeiculos} alt="imagem como vários mini véiculos" />
            <LiberacaoContainer>
                <LiberacaoTitle>Cadastre seu veículo</LiberacaoTitle>
                <LiberacaoContent>
                    <LiberacaoLabel>Placa:</LiberacaoLabel>
                    <InputsBey placeholder={"Informe sua placa"} value={placa} onChangeText={setPlaca}/>
                </LiberacaoContent>
                <BtnsBey title={"Cadastrar"}/>
                <LiberacaoLink>
                <LiberacaoCaption>Quer retirar seu carro?</LiberacaoCaption>
                <TouchableOpacity onPress={() => navigation.navigate("Retirada")}>
                    <TextSpan>Clique aqui</TextSpan>

                </TouchableOpacity>
               
                </LiberacaoLink>


            </LiberacaoContainer>

        </BackgroundLiberacao>
        </ImageBackground>

    )
}