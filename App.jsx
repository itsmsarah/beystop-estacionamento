
import { ImageBackground, StatusBar} from 'react-native';
import { ContainerApp } from './styles';
import ImgEstacionamento from './src/assets/img-estacionamento.png'
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import LiberacaoCarro from './src/screens/liberacaoCarro';
import RetiradaCarro from './src/screens/retirada';
import VeiculosAtivos from './src/screens/veiculosAtivos';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens:{
    Home: VeiculosAtivos,
    Login: Login,
    Cadastro: Cadastro,
    Liberacao: LiberacaoCarro,
    Retirada: RetiradaCarro,
    Veiculos: VeiculosAtivos



  }
})

const Navigation = createStaticNavigation(RootStack)

 export default function App() {

    // <ContainerApp>
    //   <ImageBackground source={ImgEstacionamento} title='imagem de estacionamento' resizeMode='cover' style={{flex: 1}}  />
    //   {/* <Login/> */}
    //   {/* <Cadastro/> */}
    //   {/* <LiberacaoCarro/> */}
    //   <RetiradaCarro/>
    //   {/* <VeiculosAtivos/> */}
    // </ContainerApp>

  return (
   
  
  

      <ImageBackground
        source={ImgEstacionamento}
        resizeMode="cover"
        style={{ flex: 1}}
        >
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <Navigation/>

      </ImageBackground>

    
     
  );
}
 

