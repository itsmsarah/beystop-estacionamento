// import { useState } from "react";
// import { BtnBey, BtnText } from "./styles";

// export default function BtnsBey({title,onPress}){
//     const [pressed,setPressed] = useState(false);
//     return(
//        <BtnBey onPress={() => setPressed(!pressed)}
//       pressed={pressed}>
//         <BtnText>{title}</BtnText>
//        </BtnBey>

//     )
// }

import { useState } from "react";
import { BtnBey, BtnText } from "./styles";

export default function BtnsBey({ title, onPress }) {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
    if (onPress) {
      onPress(); 
    }
  };

  return (
    <BtnBey onPress={handlePress} pressed={pressed}>
      <BtnText>{title}</BtnText>
    </BtnBey>
  );
}
