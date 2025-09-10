
import { ImageBackground} from 'react-native';
import { ContainerApp } from './styles';
import ImgEstacionamento from './src/assets/img-estacionamento.png'
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';

 export default function App() {
  return (
    <ContainerApp>
      <ImageBackground source={ImgEstacionamento} title='imagem de estacionamento' resizeMode='cover' style={{flex: 1}} />
      {/* <Login/> */}
      <Cadastro/>
    </ContainerApp>
 
  );
}
