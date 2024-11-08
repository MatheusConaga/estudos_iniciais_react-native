import React from "react";
import { Text } from "react-native";
import Estilo from "../components/estilo";

export default ({min,max}) => {
  // props.min += 1000
  // props.max += 2000
  // let {min,max} = props;
  // min += 1000
  // max += 2000
const delta = max - min + 1;
  let aleatorio = Math.floor(Math.random() * delta) + min; 
  setTimeout(() => aleatorio = Math.floor(Math.random() * delta) + min, 2000 )
  return (
    <Text style={Estilo.ex}>
      O valor aleatório é {aleatorio}
    </Text>
  );
};
