import React, {useState} from 'react';
import {View, TextInput,Text} from 'react-native';
import Estilo from './estilo';

export default props => {
    // let nome = "Teste"
    const [nome, setNome] = useState("")
    return (
        <View>

            <TextInput
            placeholder='Digite seu nome'
            value={nome}
            onChangeText={nome => setNome(nome)}
            />

        </View>
    )
}