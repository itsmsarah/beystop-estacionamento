import styled from "styled-components/native";



export const BtnBey = styled.TouchableOpacity`
   background-color: ${props => (props.pressed ? '#8D99AE' : '#000000')};
  border-radius: 15px;
  padding: 10px 30px;
  align-items: center;
`;

export const BtnText = styled.Text`
font-size: 16px;
color: #FFFFFF;
font-weight:bold;
`
