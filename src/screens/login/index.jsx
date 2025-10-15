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
import api from '../../../api'

export default function Login() {
  const navigation = useNavigation()

  const[data,setData] = useState([])
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async () => {
  try {
    const res = await api.post("/auth/login", {
      email: email,
      senha: senha
    });

    console.log("Resposta da API:", res.data);
    setData(res.data); 

    navigation.navigate("Liberacao");

  } catch (err) {
    console.log("Erro ao  fazer login", err);
    alert("Erro ao fazer login. Verifique os dados e tente novamente.");
  }
};

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
            <BtnsBey title={"Login"} onPress={fazerLogin} />
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
