import React, { useState } from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from "./contadorDisplay";
import ContadorBotoes from "./contandoBotoes";

export default props => {

    const [num,setNum] = useState(0)

    function inc() {
        setNum(num + 1);
    }
    function dec() {
        setNum(num - 1);
    }

    return (
        <>
        <Text style={Estilo.ex}>Contador</Text>
        <ContadorDisplay num={num} />
        <ContadorBotoes inc={inc} dec={dec}/>
        </>
    )
}