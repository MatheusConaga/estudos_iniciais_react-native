import React,{Fragment} from "react";
import {Text} from "react-native";
import Estilo from "../components/estilo";
import Botao from "../components/botao";

export default props => {


    return (
        <Fragment>
            <Text style={Estilo.ex}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
            <Botao/>
        </Fragment>
    )

}