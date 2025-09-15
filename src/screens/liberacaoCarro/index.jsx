import { useState } from "react"
import { BackgroundLiberacao, LiberacaoCaption, LiberacaoContainer, LiberacaoContent, LiberacaoImg, LiberacaoLabel, LiberacaoLink, LiberacaoSpan, LiberacaoTitle, TextSpan } from "./styles"
import MiniVeiculos from '../../assets/img-mini-veículos.png'
import InputsBey from "../../components/inputs/InputsBey"
import BtnsBey from "../../components/buttons/ButtonsBey"

export default function LiberacaoCarro(){

    const [placa,setPlaca] = useState("")
    return(
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
                <LiberacaoSpan>
                    <TextSpan>Clique aqui</TextSpan>
                </LiberacaoSpan>
                </LiberacaoLink>


            </LiberacaoContainer>

        </BackgroundLiberacao>

    )
}