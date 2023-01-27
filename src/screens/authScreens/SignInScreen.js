import React, { useRef, useState } from "react";
import {View, Text, StyleSheet, Dimensions, TextInput, Alert} from 'react-native'
import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from 'react-native-animatable'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../../firebaseConfig'


function criarConta(){
    // createUserWithEmailAndPassword(auth, 'and.moreira@outlook.com', '123456')
    // .then(()=>{console.log('crious')})
    // .catch((err)=>console.log('algo deu muito errado\n' + err ))

    signInWithEmailAndPassword(auth, 'and.moreira@outlook.com', '123456')
    .then(()=>console.log('usuario logado'))
    .catch(err=> console.log('erro de autenticação \n ' + err))
   
}

export default function SignInScreen(){

    const [textInput2Fossued, setTextInput2Fossued] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return(
        <View style={styles.cont}> 
            <Header title= 'MINHA CONTA' type='arrow-left'/>

            <View style={{marginLeft:20, marginTop:10}}>
                <Text style = {title} >Entrar</Text>
            </View>
            <View style={{alignItems:'center', marginTop:10}}>
                <Text style = {styles.text1} >Acesse com email e senha</Text>
                <Text style = {styles.text1} >registrados em sua conta</Text>
            </View>
            <View>
                <View style={[{marginTop:20, marginBottom:20}, styles.textInput2]}>
                    <Icon name='email' iconStyle={{color:colors.grey3}} type='material'/>
                    <TextInput  placeholder = 'Email' style={{width:'90%'}} ref={textInput1}/>
                </View>
                <View style={styles.textInput2}>
                    <Animatable.View animation={textInput2Fossued ? '' : 'fadeInLeft'} duration={400}>
                        <Icon name='lock' iconStyle={{color:colors.grey3}} type='material'/>
                    </Animatable.View>
                    <TextInput placeholder = 'Senha' style={{width:'80%'}} ref={textInput2} onFocus={()=>{setTextInput2Fossued(false)}} onBlur={()=>{setTextInput2Fossued(true)}}/>

                    <Animatable.View animation={textInput2Fossued ? '' : 'fadeInLeft'} duration={400}>
                        <Icon name='visibility-off' iconStyle={{color:colors.grey3}} type='material'/>
                    </Animatable.View>
                    </View>
            </View>
            <View style={{marginHorizontal:20, marginVertical:30}}> 
                <Button title={'ACESSAR'} buttonStyle={parameters.buttonStyle} titleStyle={parameters.buttonTitleStyle} />
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{...styles.text1, textDecorationLine:'underline'}}>Esqueceu a senha?</Text>
            </View>
            <View style={{alignItems:'center', marginTop:30, marginBottom:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>OU</Text>
            </View>
            <View style={{marginHorizontal:20, marginTop:10}}>
                <SocialIcon title='Acessar com Facebook' type='facebook' style={styles.socialIcon} button onPress={()=>{}}/>
            </View>
            <View style={{marginHorizontal:20, marginTop:10}}>
                <SocialIcon title='Acessar com Google' type='google' style={styles.socialIcon} button onPress={()=>{}}/>
            </View>
            <View style={{marginTop:25, marginLeft:20}}>
                <Text style={{...styles.text1, }}>Novo por aqui?</Text>
            </View>
            <View style={{alignItems:'flex-end', marginRight:20}}>
                <Button title='Crie uma conta' buttonStyle={styles.createButton} titleStyle={styles.createButtonTitle} onPress={criarConta}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    cont : {
        flex: 1,
    },
    text1:{
        color: colors.grey3,
        fontSize: 16
    },

    textInput1:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:16,
        padding:10
    },
    textInput2:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingLeft:16,
        padding:10
    },
    socialIcon:{
        borderRadius:12,
        height:50
    },
    createButton:{
        backgroundColor:'white',
        alignContent : "center" ,
        justifyContent : "center" ,
        borderRadius : 12,
        borderWidth: 1 ,
        borderColor: '#ff8c52',
        height : 40,
        paddingHorizontal : 20,
    },
    createButtonTitle:{
        color: "#ff8c52" ,
        fontSize : 16 ,
        fontWeight: "bold" ,
        alignItems: "center" ,
        justifyContent : 'center',
        marginTop: -3
    }


})