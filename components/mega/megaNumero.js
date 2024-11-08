import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Estilo from '../estilo';

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.ex, style.Num]}>
                {num}
            </Text>

        </View>
    )
}

const style = StyleSheet.create({

    Container:{
        backgroundColor: "#000",
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 25,
        // textAlign: "center",
        justifyContent: "center",
        // alignItems: "center"
    },
    Num:{
        color: '#fff'
    }

})