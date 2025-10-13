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
     const [data, setData] = useState([]);
    const [nameComplete,setNameComplete] = useState("")
    const [email,setEmail]= useState("")
    const [senha,setSenha] = useState("")

     const cadastrarUsuario = async () => {
    try {
      const res = await api.post(`/auth/register`);
       console.log("Resposta da API:", res.data);
      setData(res.data);
    } catch (err) {
      console.log("Erro ao cadastrar usuário", err);
    }
  }
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
                keyboardType="text"
                />
                    </InputContainer>

                    <InputContainer>
                <LabelCadastro>E:mail</LabelCadastro>
                <InputsBey
                placeholder={"Informe seu e-mail"}
                value={email}
                onChangeText={setEmail}
                keyboardType="text"
                />
                    </InputContainer>
                <LabelCadastro>Senha:</LabelCadastro>
                <InputsBey
                placeholder={"Informe sua senha"}
                value={senha}
                onChangeText={setSenha}
                keyboardType="text"
                secureTextEntry
                />

                </CadastroForm>

                <BtnsBey title={"Cadastrar"} onPress={(cadastrarUsuario)} />
          
            
             
                
                </CadastroContainer>
            </BackgroundCadastro>

        </ImageBackground>
   
    )
}