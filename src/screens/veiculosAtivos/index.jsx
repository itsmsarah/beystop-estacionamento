import { ContainerVeiculos, LoginCaption, LoginLink, LoginSpan, TitleVeiculos } from "./styles";
import { ImageBackground, TouchableOpacity,ScrollView } from "react-native";
import ImgEstacionamento from "../../assets/img-estacionamento.png"
import AmostraVeiculos from "../../components/box-veiculosAtivos";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export default function VeiculosAtivos() {
  const navigation = useNavigation()



  return (
    <ImageBackground
      source={ImgEstacionamento}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
    
        <ContainerVeiculos>

          <TitleVeiculos>Veículos Ativos</TitleVeiculos>

          <AmostraVeiculos />
        

          <LoginLink>
            <LoginCaption>Quer acessar sua conta? </LoginCaption>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <LoginSpan>Clique aqui</LoginSpan>
            </TouchableOpacity>
          </LoginLink>

        </ContainerVeiculos>
      
    </ImageBackground>
  )
}