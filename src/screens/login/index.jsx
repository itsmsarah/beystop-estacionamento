import { 
  BackgroundLogin, 
  Caption, 
  ContainerBtns, 
  ContainerInfo, 
  ContainerLabel, 
  LabelInputs, 
  LoginContainer, 
  LoginForm, 
  TitleLogin 
} from "./styles";

import InputsBey from "../../components/inputs/InputsBey";

import { useState } from "react";
import BtnsBey from "../../components/buttons/ButtonsBey";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
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
            <BtnsBey title={"Login"} onPress={() => {}} />
                {/* nao quero que aconteça nada ainda */}
          </ContainerLabel>

        </LoginForm>
      </BackgroundLogin>
    </LoginContainer>
  );
}
