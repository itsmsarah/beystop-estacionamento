import styled from "styled-components/native";

export const LoginContainer = styled.View`
display: flex;
flex: 1;
flex-direction: column;
align-items: end;
justify-content: end;

`
export const BackgroundLogin = styled.View`
width: 100%;
height: 605px;
display: flex;
flex-direction: column;
background-color: #D00000;
align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const LoginForm = styled.View`
margin: 40px 60px 90px 53px;
display: flex;
flex-direction: column;
`

export const TitleLogin = styled.Text`
color: #FFFFFF;
/* width: 275px; */
position: relative;
text-align: center;
font-size: 38px;
margin-bottom: 24px;
/* padding: 26px 77px 56px 78px; */
`

export const LabelInputs = styled.Text`
color: #FFFFFF ;
font-size: 16px;

`

export const ContainerLabel = styled.View`
display: flex;
flex-direction: column;
gap: 26px;
`

export const ContainerInfo = styled.View`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Caption = styled.Text`
color:  #FFFFFF;
font-size: 14px;
font-weight: bold;
`
export const CadastroLink = styled.View`
display: flex;
justify-content: center;
flex-direction: row;
`
export const CadastroCaption = styled.Text`
color: #FFFFFF ;
font-size:16px;
font-weight: bold;
`

export const CadastroSpan = styled.Text`
color: #000000 ;
font-size:16px;
font-weight: bold;
`
