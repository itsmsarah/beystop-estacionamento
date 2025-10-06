import {
  BackgroundLogin,
  CadastroCaption,
  CadastroLink,
  CadastroSpan,
  Caption,
  ContainerInfo,
  ContainerLabel,
  LabelInputs,
  LoginContainer,
  LoginForm,
  TitleLogin
} from "./styles";

import InputsBey from "../../components/inputs/InputsBey";

import { useState } from "react";
import { TouchableOpacity,ImageBackground } from "react-native";
import BtnsBey from "../../components/buttons/ButtonsBey";
import { useNavigation } from "@react-navigation/native";
import ImgEstacionamento from '../../assets/img-estacionamento.png'

export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
     <ImageBackground   source={ImgEstacionamento}
                    resizeMode="cover"
                    style={{ flex: 1}}
                    >
    <LoginContainer>
      <BackgroundLogin>
        <LoginForm>

          <TitleLogin>Faça seu login</TitleLogin>

          <ContainerLabel>
            <ContainerInfo>
              <LabelInputs>Email:</LabelInputs>
              <InputsBey
                placeholder="Informe seu e-mail"
                value={email}
                onChangeText={setEmail}
              />

              <LabelInputs>Senha:</LabelInputs>
              <InputsBey
                placeholder="Informe sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />

              <Caption>Esqueceu a senha?</Caption>

            </ContainerInfo>
            <BtnsBey title={"Login"} onPress={() =>navigation.navigate("Liberacao")} />
            {/* nao quero que aconteça nada ainda */}
          </ContainerLabel>
            <CadastroLink>
            <CadastroCaption>Não possui conta?</CadastroCaption>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <CadastroSpan>Cadastra-se</CadastroSpan>
          </TouchableOpacity>
            </CadastroLink>

        </LoginForm>
      </BackgroundLogin>
    </LoginContainer>
    </ImageBackground>
  )
}
