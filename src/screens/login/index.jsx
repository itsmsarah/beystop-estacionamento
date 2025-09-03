import { BackgroundLogin, LoginContainer } from "./styles";
import RetanguloVermelho from "../../assets/background-red.png"

export default function Login(){
    return(
        <LoginContainer>
          <BackgroundLogin source={RetanguloVermelho}/>
        </LoginContainer>
    )
}