import React from 'react'
import {  View } from 'react-native'
import { Button } from 'react-native-elements'
import { parameters } from '../../global/styles'

export default function Botao({title, cor, corTitle, funcao}){
    return(
        <View style={{marginHorizontal:20, marginTop:30}}>
            <Button title={title}
             buttonStyle={{...parameters.buttonStyle, backgroundColor:cor, borderColor:corTitle}} 
             titleStyle={{...parameters.buttonTitleStyle, color:corTitle}} 
             onPress={funcao}/>
        </View>
    )
}