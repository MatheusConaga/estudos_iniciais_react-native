import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';


export default props => {
    return (
        <>
        <Text style={Estilo.ex}>{props.a}</Text>
        <Text style={Estilo.ex}>{props.b}</Text>
        </>
    )
}