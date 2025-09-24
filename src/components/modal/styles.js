import styled from "styled-components/native";


export const BackgroundModal = styled.View`
background-color: #000000 ;
width: 336px;
height: 470px;
border-radius: 15px;
display: flex;
flex-direction: column;
padding-top: 40px; 
border-width: 1px;
border-color: #D00000;
`
export const ModalInformation = styled.View `
margin: 40px 100px 30px 30px;
border-width: 1px;
`
export const ModalMensagem = styled.View`
width: 50%;
align-items: center;
margin: 0 auto;
`
export const ModalValorContainer = styled.View`
width: 100%;
align-items: center;
`

export const ModalSubtitle = styled.Text`
color: #FFFFFF;
font-size: 22px;
text-transform: capitalize;
/* padding: 0px 70px; */
text-align: center;
`

export const ModalContent = styled.Text`
color: #FFFFFF;
font-size: 14px;
margin-bottom: 22px;
`

export const ModalValor = styled.Text`
color: #FFFFFF;
font-size: 14px;
text-align: center;
margin-bottom: 14px;
`

export const ModalOverlay = styled.View`
  flex: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`
