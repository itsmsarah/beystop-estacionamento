import styled from "styled-components/native";



export const BtnBey = styled.TouchableOpacity`
   background-color: ${props => (props.pressed ? '#8D99AE' : '#000000')};
  border-radius: 15px;
  padding: 20px 10px;
  align-items: center;
  width: 325px;
`;

export const BtnText = styled.Text`
font-size: 16px;
color: #FFFFFF;
font-weight:bold;
`
