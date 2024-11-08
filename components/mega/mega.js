import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../estilo"
import MegaNumero from "./megaNumero"

export default class Mega extends React.Component {


    state = {
        qtNumeros: this.props.qtNumeros,
        numeros: []
    }


    alterarQtNumero = (qtde) => {
        this.setState({
            qtNumeros: +qtde
        })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({
            numeros
        })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    // gerarNumeros = () => {
    //     const { qtNumeros } = this.state
    //     const numeros = []
    //     for (let i = 0; i < qtNumeros; i++) {
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }

    //     numeros.sort((a, b) => a - b)

    //     this.setState({
    //         numeros
    //     })

    // }

    render() {
        return (
            <>
                <Text style={Estilo.ex}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType="numeric"
                    style={{ borderBottomWidth: 1, }}
                    placeholder="Qt de Numeros"
                    value={`${this.state.qtNumeros}`}
                    onChangeText={this.alterarQtNumero}
                />
                <Button
                    title="Gerar"
                    onPress={() => this.gerarNumeros()}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }

}