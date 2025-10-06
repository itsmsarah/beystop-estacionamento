import { useState } from "react"
import { BackgroundRetirada, ImgCarroRetirado, RetiradaCaption, RetiradaContainer, RetiradaContent, RetiradaLabel, RetiradaLink, RetiradaSpan, RetiradaTitle } from "./styles"
import CarroRetirado from '../../assets/img-carro-retirado.png'
import BtnsBey from "../../components/buttons/ButtonsBey"
import InputsBey from "../../components/inputs/InputsBey"
import { TouchableOpacity,ImageBackground } from "react-native"
import ModalBey from "../../components/modal/Modal"
import { useNavigation } from "@react-navigation/native"
import ImgEstacionamento from '../../assets/img-estacionamento.png'

export default function RetiradaCarro(){
    const navigation = useNavigation()
    const [placa,setPlaca] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    
    return(
         <ImageBackground   source={ImgEstacionamento}
                        resizeMode="cover"
                        style={{ flex: 1}}
                        >
        <BackgroundRetirada>
            <ImgCarroRetirado source={CarroRetirado} alt="img de um carro vermelho sendo retirado"/>

            <RetiradaContainer>
                <RetiradaTitle>Retire seu veículo</RetiradaTitle>

                <RetiradaContent>
                    <RetiradaLabel>Placa</RetiradaLabel>
                      <InputsBey placeholder={"Informe a placa"} value={placa} onChangeText={setPlaca}/>
                </RetiradaContent>
                <BtnsBey title={"Retirar"} onPress={() => setModalVisible (true)}/>
                <RetiradaLink>
                    <RetiradaCaption>Não cadastrou seu carro?</RetiradaCaption>
                    <TouchableOpacity onPress={()=> navigation.navigate("Liberacao")}>
                        <RetiradaSpan>Clique aqui</RetiradaSpan>
                    </TouchableOpacity>
                </RetiradaLink>
                

            </RetiradaContainer>

            <ModalBey 
            visible={modalVisible} onClose={() => setModalVisible(false)}/>

        </BackgroundRetirada>
        </ImageBackground>
    )
}