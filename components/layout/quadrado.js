import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Estilo from './estilo';

export default props => {
    return (
        <View style={[style.quadrado, { backgroundColor: props.color || "#000" }]}>

        </View>
    )
}

const lado = 50 
const style = StyleSheet.create({
    quadrado: {
        width: lado,
        height: lado,
        // marginBottom: 10,
        // marginTop: 10,
        // backgroundColor: '#00FFFF',
    }
});