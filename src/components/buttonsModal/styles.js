import styled from "styled-components/native";

export const BtnModal = styled.TouchableOpacity`
   background-color: ${props => (props.pressed ? '#8D99AE' : '#FFFFFF')};
  border-radius: 15px;
  padding: 10px 4px;
  align-items: center;
  width: 246px;
  margin: 0 auto;

`;

export const BtnText = styled.Text`
font-size: 16px;
color: #000000;
font-weight:bold;
`