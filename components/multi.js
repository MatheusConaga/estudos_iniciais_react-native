import React from "react";
import { Text } from "react-native";
import Estilo from "../components/estilo"

export default function Comp1() {
    return (
        <Text style={Estilo.ex}>Component Primeiro</Text>
    );
}
function Comp2() {
    return (
        <Text style={Estilo.ex}>Component #2</Text>
    );
}
 function Comp3() {
    return (
        <Text style={Estilo.ex}>Component #3</Text>
    );
}

export { Comp3, Comp2}
