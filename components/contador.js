import React, {useState} from "react";
import { Text, Button } from "react-native";
import Estilo from "../components/estilo";

export default ({inicial = 0, passo = 20}) => {

    // let num = props.inicial
    const [num, setNum] = useState(inicial)
    function inc() {
        setNum(num + passo);
    }
    function dec() {
        setNum(num - passo);
    }

    return (
        <>
            <Text style={Estilo.ex}>{num}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )

} 