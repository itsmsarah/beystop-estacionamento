
import { ImageBackground, StatusBar} from 'react-native';
import { ContainerApp } from './styles';
import ImgEstacionamento from './src/assets/img-estacionamento.png'
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import LiberacaoCarro from './src/screens/liberacaoCarro';
import RetiradaCarro from './src/screens/retirada';
import VeiculosAtivos from './src/screens/veiculosAtivos';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar'
import { useEffect } from 'react';


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
  useEffect(()=>{
   NavigationBar.setBackgroundColorAsync('transparent');
   NavigationBar.setVisibilityAsync('hidden');
   NavigationBar.setBehaviorAsync('overlay-swipe');
  },[])
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
 

