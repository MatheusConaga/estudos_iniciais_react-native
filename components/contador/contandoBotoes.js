import React from 'react';
import {View, Button,StyleSheet} from 'react-native';

export default props => {
    return (
        <View style={style.Botoes}>

        <Button title='-' onPress={props.dec}/>
        <Button title='+' onPress={props.inc}/>

        </View>
    )
}

const style = StyleSheet.create({

    Botoes:{
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 20,

    }

})