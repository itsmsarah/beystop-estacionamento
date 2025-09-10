import styled from "styled-components/native";





export const BackgroundCadastro = styled.View`
  width: 430px;
  height: 700px;
  flex-direction: column;
  background-color: #D00000;
  align-items: center;
  position: relative;
`;

export const CadastroImg = styled.Image`
  width: 211px;
  height: 237px;
  position: absolute;
  top: -150px;
  z-index: 10;
`;

export const CadastroContainer = styled.View`
  margin: 100px 38px 52px 38px; 
  gap: 38px;

`;

export const CadastroTitle = styled.Text`
  color: #FFFFFF;
  font-size: 38px;
  z-index: 20;
`;

export const LabelCadastro =styled.Text`
color: #FFFFFF ;
font-size: 16px;
margin-bottom: 10px;
`

export const CadastroForm = styled.View`
display: flex;
flex-direction: column;

`
export const InputContainer = styled.View`

margin-bottom: 24px;
`