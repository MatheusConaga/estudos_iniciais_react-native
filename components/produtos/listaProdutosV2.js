import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo';
import Produtos from "./produtos"
import produtos from './produtos';

export default props => {
   

    return (
        <>
        <Text style={Estilo.ex}>Lista de Produtos V2</Text>
        <FlatList
            data={produtos}
            keyExtractor={i => `${i.id}`}
            renderItem={({item: p }) =>{
                return <Text>{p.id} - {p.name}</Text>
            }}
            />
        </>
    )
}