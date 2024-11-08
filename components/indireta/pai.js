import React,{ useState } from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import Filho from "./filho";

export default props => {
    const [tex,setTex] = useState('')
    const [num,setNum] = useState(0)

    function exibirValor (num, tex){
        setNum(num)
        setTex(tex)
    }

    return (
       <>
       <Text style={Estilo.ex}>{tex}{num}</Text>
       <Filho 
       min={1} 
       max={60} 
        funcao={exibirValor}
       />
       </>
    )

}