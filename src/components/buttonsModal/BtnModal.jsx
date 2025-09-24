import { useState } from "react";
import { BtnModal, BtnText } from "./styles";

export default function BtnsModal({ title, onPress }) {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
    if (onPress) {
      onPress(); 
    }
  };

  return (
    <BtnModal onPress={handlePress} pressed={pressed}>
      <BtnText>{title}</BtnText>
    </BtnModal>
  );
}