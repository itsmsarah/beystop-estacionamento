import { BackgroundLogin, Caption, ContainerBtns, ContainerLabel, LabelInputs, LoginContainer, TitleLogin } from "./styles";
import InputsBey from "../../components/inputs/InputsBey";
import { useState } from "react";


export default function Login(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
    return(
        <LoginContainer>
          <BackgroundLogin>

          <TitleLogin>Faça seu login</TitleLogin>

          <ContainerBtns>
          <ContainerLabel>
              <LabelInputs>Email:</LabelInputs>
          <InputsBey
          placeholder="Informe seu e-mail"
          value={email}
          onChangeText={setEmail}
          />

          </ContainerLabel>
          

          <ContainerLabel>
              <LabelInputs>Senha:</LabelInputs>
          <InputsBey
          placeholder="Informe sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={senha}
          />
          </ContainerLabel>

          <Caption>Esqueceu a senha?</Caption>
        
          </ContainerBtns>
          

          </BackgroundLogin>

        </LoginContainer>
    )
}