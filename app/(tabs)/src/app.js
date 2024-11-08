
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";


import Mega from "../../../components/mega/mega"
// import Flexbox from "../../../components/layout/flexBox"
// import Quadrado from "../../../components/layout/quadrado"
// import DigiteNome from "../../../components/digiteNome"
// import ListaProdutosV2 from "../../../components/produtos/listaProdutosV2"
// import ListaProdutos from "../../../components/produtos/listaProdutos"
// import UsuarioLogado from "../../../components/usuarioLogado"
// import Pai from "../../../components/relacao/pai"
// import Membro from "../../../components/relacao/filho"
// import { SafeAreaView } from "react-native-safe-area-context";
// import ParImpar from "../../../components/parImpar";
// import Plataforma from "../../../components/diferenciar";
// import ContadorV2 from "../../../components/contador/contadorV2"
// import Pai from "../../../components/indireta/pai";
// import Contador from "../../../components/contador";
// import Titulo from "../../../components/titulo";
// import MinMax from "../../../components/minMax"
// import Aleatorio from "../../../components/aleatorio";
// import X, { Comp3, Comp2 } from "../../../components/multi";
// import Componente from "../../../components/primeiro"



export default () => (

    <SafeAreaView style={style.App}>

        <Mega qtNumeros ={6}/>

        {/* 
    <Flexbox/>
    <DigiteNome/>
    <ListaProdutosV2/>
  <ListaProdutos/>
    <UsuarioLogado usuario={ {nome: "Matheus Lula", email: "matheus@gmail.com"} }/>
    <Pai> 
        <Membro nome="Maria" sobrenome="Juana"/>
        <Membro nome="Jade" sobrenome="Arruda"/>
        <Membro nome="Mario" sobrenome="Joaquim"/>
    </Pai>
    <ParImpar num={10}/>
    <Plataforma/>
    <ContadorV2/>
    <Pai/>
    <Contador inicial={100} passo={10}/>
    <Contador/> */}
        {/* <Titulo principal="Cadastro" secundario="Tela de cadastro"/> */}

        {/* <Aleatorio min={1} max={40}/> 
     <Componente/>
    <X/>
    <Comp3/>
    <Comp2/> */}

    </SafeAreaView>


)

const style = StyleSheet.create({

    App: {
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }

});



