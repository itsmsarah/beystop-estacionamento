import styled from "styled-components/native";


export const BackgroundModal = styled.View`
background-color: #000000 ;
width: 336px;
height: 419px;
border-radius: 15px;
display: flex;
flex-direction: column;
  padding-top: 40px; 
`
export const ModalContainer = styled.View `
margin: 20px 100px 30px 56px;
`


export const ModalSubtitle = styled.Text`
color: #FFFFFF;
font-size: 22px;
width: 300px;
text-transform: capitalize;
  padding-right: 52px;
   padding-left: 70px;
   display: flex;
   flex-direction: column;
   align-items: center;

  

`

export const ModalContent = styled.Text`
color: #FFFFFF;
font-size: 14px;
margin-bottom: 22px;
`

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`