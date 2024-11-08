import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from "./quadrado"

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado color="#00ff00" />
            <Quadrado color="#00ffFF" />
            <Quadrado color="#FFff00" />
            <Quadrado />

        </View>
    )
}

const style = StyleSheet.create({

    FlexV1:{
        justifyContent: 'space-evenly',
        flexGrow:1,
        backgroundColor: '#FF0000',
    },
    FlexV2:{
        flex:1,
        width: '100%',
        // alignItems: 'stretch',
        justifyContent: 'space-evenly',
        backgroundColor: '#FF0000',
    },
    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#FF0000',
    }


})