import { useState } from "react"
import { BackgroundRetirada, ImgCarroRetirado, RetiradaCaption, RetiradaContainer, RetiradaContent, RetiradaLabel, RetiradaLink, RetiradaSpan, RetiradaTitle } from "./styles"
import CarroRetirado from '../../assets/img-carro-retirado.png'
import BtnsBey from "../../components/buttons/ButtonsBey"
import InputsBey from "../../components/inputs/InputsBey"
import { TouchableOpacity } from "react-native"

export default function RetiradaCarro(){
    
    const [placa,setPlaca] = useState("")
    
    return(
        <BackgroundRetirada>
            <ImgCarroRetirado source={CarroRetirado} alt="img de um carro vermelho sendo retirado"/>

            <RetiradaContainer>
                <RetiradaTitle>Retire seu veículo</RetiradaTitle>

                <RetiradaContent>
                    <RetiradaLabel>Placa</RetiradaLabel>
                      <InputsBey placeholder={"Informe a placa"} value={placa} onChangeText={setPlaca}/>
                </RetiradaContent>
                <BtnsBey title={"Retirar"}/>
                <RetiradaLink>
                    <RetiradaCaption>Não cadastrou seu carro?</RetiradaCaption>
                    <TouchableOpacity>
                        <RetiradaSpan>Clique aqui</RetiradaSpan>
                    </TouchableOpacity>
                </RetiradaLink>
                


            </RetiradaContainer>


        </BackgroundRetirada>
    )
}