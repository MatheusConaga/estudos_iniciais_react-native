import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilo';

export default ({num = 0}) => {
    return(
        <View>
        {num % 2 == 0
         ? <Text style={Estilo.ex}>O numero é par</Text>
         : <Text style={Estilo.ex}>O numero é impar</Text>
        }
        </View>
    )
    
}