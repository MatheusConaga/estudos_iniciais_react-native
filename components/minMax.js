import React from "react";
import { Text } from "react-native";
import Estilo from "../components/estilo";

export default (props) => {
    var num1 = props.num1;
    var num2 = props.num2;
    var menor = 0;
    var maior = 0;
    if (num1 < num2) {
        menor = num1
        maior = num2
        return (
            <Text style={Estilo.ex}>
                O valor 2 = {num2} é maior que o valor 1 = {num1}
            </Text>
        )
    } else if (num1 > num2) {
        menor = num2
        maior = num1
        return (
            <Text style={Estilo.ex}>
                O valor 1 = {num1} é maior que o valor 2 = {num2}
            </Text>
        )
    } else {
        return (
            <Text style={Estilo.ex}>
                Os valores são iguais!
            </Text>
        )
    }
    

}
