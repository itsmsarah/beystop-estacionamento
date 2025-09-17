
import { ImageBackground} from 'react-native';
import { ContainerApp } from './styles';
import ImgEstacionamento from './src/assets/img-estacionamento.png'
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import LiberacaoCarro from './src/screens/liberacaoCarro';
import RetiradaCarro from './src/screens/retirada';
import VeiculosAtivos from './src/screens/veiculosAtivos';

 export default function App() {
  return (
    <ContainerApp>
      <ImageBackground source={ImgEstacionamento} title='imagem de estacionamento' resizeMode='cover' style={{flex: 1, position:'absolute'}}  />
      {/* <Login/> */}
      {/* <Cadastro/> */}
      {/* <LiberacaoCarro/> */}
      {/* <RetiradaCarro/> */}
      <VeiculosAtivos/>
    </ContainerApp>
 
  );
}
