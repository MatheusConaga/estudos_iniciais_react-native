import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
import If from "./if"

export default props => {
    const usuario = props.usuario || {}
    return (
            <>
            <If teste={usuario && usuario.nome && usuario.email}> 

        <Text style={Estilo.ex}>
            Usuário logado: 
        </Text>
        <Text style={Estilo.ex}>
            {usuario.nome} - {usuario.email}
        </Text>
            </If>
            </>
    )
}