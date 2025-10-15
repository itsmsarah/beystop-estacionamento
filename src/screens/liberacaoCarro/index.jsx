import { useState } from "react";
import { TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  BackgroundLiberacao,
  LiberacaoCaption,
  LiberacaoContainer,
  LiberacaoContent,
  LiberacaoImg,
  LiberacaoLabel,
  LiberacaoLink,
  LiberacaoTitle,
  TextSpan
} from "./styles";
import MiniVeiculos from "../../assets/img-mini-veículos.png";
import InputsBey from "../../components/inputs/InputsBey";
import BtnsBey from "../../components/buttons/ButtonsBey";
import ImgEstacionamento from "../../assets/img-estacionamento.png";
import api from "../../../api";

export default function LiberacaoCarro() {
  const navigation = useNavigation();
  const [placa, setPlaca] = useState("");

  const liberarCarro = async () => {
    try {
      const res = await api.post(`/api/veiculos/entrada`, { placa });
      console.log("Resposta da API:", res.data);

      navigation.navigate("Veiculos");
    } catch (err) {
      console.log("Erro ao cadastrar veículo:", err);
      alert("Erro ao cadastrar veículo. Verifique os dados e tente novamente.");
    }
  };

  return (
    <ImageBackground
      source={ImgEstacionamento}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <BackgroundLiberacao>
        <LiberacaoImg source={MiniVeiculos} alt="imagem com vários mini veículos" />
        <LiberacaoContainer>
          <LiberacaoTitle>Cadastre seu veículo</LiberacaoTitle>
          <LiberacaoContent>
            <LiberacaoLabel>Placa:</LiberacaoLabel>
            <InputsBey
              placeholder={"Informe sua placa"}
              value={placa}
              onChangeText={setPlaca}
            />
          </LiberacaoContent>
          <BtnsBey title={"Login"} onPress={liberarCarro} />
          <LiberacaoLink>
            <LiberacaoCaption>Quer retirar seu carro?</LiberacaoCaption>
            <TouchableOpacity onPress={() => navigation.navigate("Retirada")}>
              <TextSpan>Clique aqui</TextSpan>
            </TouchableOpacity>
          </LiberacaoLink>
        </LiberacaoContainer>
      </BackgroundLiberacao>
    </ImageBackground>
  );
}
