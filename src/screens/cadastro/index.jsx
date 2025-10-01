import { BackgroundCadastro, CadastroContainer, CadastroForm, CadastroImg, CadastroTitle, InputContainer, LabelCadastro } from "./styles";
import ImgRedCar from '../../assets/img-red-car-stop.png'
import InputsBey from "../../components/inputs/InputsBey";
import { useState } from "react";
import BtnsBey from "../../components/buttons/ButtonsBey";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import ImgEstacionamento from '../../assets/img-estacionamento.png'

export default function Cadastro(){
    const navigation = useNavigation()
    const [nameComplete,setNameComplete] = useState("")
    const [email,setEmail]= useState("")
    const [senha,setSenha] = useState("")
    return(

        <ImageBackground   source={ImgEstacionamento}
                resizeMode="cover"
                style={{ flex: 1}}
                >
            <BackgroundCadastro>
                <CadastroImg source={ImgRedCar} title='Img carro vermelho' alt='img carro vermelho'/>
                <CadastroContainer>
                <CadastroTitle>Faça seu cadastro</CadastroTitle>
                <CadastroForm>
                    <InputContainer>
                <LabelCadastro>Nome Completo:</LabelCadastro>
                <InputsBey
                placeholder={"Informe seu nome completo"}
                value={nameComplete}
                onChangeText={setNameComplete}
                />
                    </InputContainer>

                    <InputContainer>
                <LabelCadastro>E:mail</LabelCadastro>
                <InputsBey
                placeholder={"Informe seu e-mail"}
                value={email}
                onChangeText={setEmail}
                />
                    </InputContainer>
                <LabelCadastro>Senha:</LabelCadastro>
                <InputsBey
                placeholder={"Informe sua senha"}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                />

                </CadastroForm>

                <BtnsBey title={"Cadastrar"} onPress={() => navigation.navigate("Login")} />
                {/* nao quero que aconteça nada ainda */}
            
             
                
                </CadastroContainer>
            </BackgroundCadastro>

        </ImageBackground>
   
    )
}