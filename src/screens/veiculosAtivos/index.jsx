import {ContainerVeiculos, TitleVeiculos } from "./styles";
import { ImageBackground, SafeAreaView } from "react-native";
import ImgEstacionamento from "../../assets/img-estacionamento.png"
import AmostraVeiculos from "../../components/box-veiculosAtivos";

export default function VeiculosAtivos(){
    return(
           <ImageBackground
      source={ImgEstacionamento}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <ContainerVeiculos>

        <SafeAreaView>
        <TitleVeiculos>Veículos Ativos</TitleVeiculos>
        <AmostraVeiculos/>
        <AmostraVeiculos/>
        <AmostraVeiculos/>
        </SafeAreaView>
      </ContainerVeiculos>
    </ImageBackground>
    )
}