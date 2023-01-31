import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import Swiper from "react-native-swiper";
import { colors, parameters } from "../../global/styles";
import Botao from "../buttons/Botao";
import { useNavigation } from '@react-navigation/native';

export default function SignInWelcomeScreen(){
    const navigation = useNavigation();

    useEffect(( ) => {
        
    }, [])

    return(
        <View style={{flex:1}}>
            <View style={{flex:3, justifyContent:'flex-start', alignItems:'center', marginTop:20, paddingTop:20}}>
                <Text style={{fontSize:24, color:colors.buttons, fontWeight:'bold'}}>DESCUBRA RESTAURANTES</Text>
                <Text style={{fontSize:24, color:colors.buttons, fontWeight:'bold'}}>EM SUA ÁREA</Text>

            </View>

            <View style={{flex:4, justifyContent:'center', }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image source={{uri:'https://api-ninjas.com/images/cats/american_wirehair.jpg'}} style={{height:'100%', width: '100%'}} />
                    </View>
                    <View style={styles.slide1}>
                        <Image source={{uri:'https://api-ninjas.com/images/cats/birman.jpg'}} style={{height:'100%', width: '100%'}} />
                    </View>
                    <View style={styles.slide1}>
                        <Image source={{uri:'https://api-ninjas.com/images/cats/chausie.jpg'}} style={{height:'100%', width: '100%'}} />
                    </View>

                </Swiper>
            </View>

            <View style={{flex:4, justifyContent:'flex-end', marginBottom:20}}>
                
            <View style={{marginHorizontal:20, marginTop:30}}>
                <Button title='ENTRAR'
                buttonStyle={{...parameters.buttonStyle}} 
                titleStyle={{...parameters.buttonTitleStyle}} 
                onPress={()=>{navigation.navigate('SigInScreen')}}/>
            </View>
                {/* <Botao title='ENTRAR' cor={colors.buttons} corTitle='white' funcao={}/> */}
                <Botao title='CRIAR CONTA' cor={'white'} corTitle={colors.buttons} />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center' ,
        alignltems:'center',
        backgroundcolor: '#9dd6eb'
    },
    slide2: {
        flex: 1,    
        justifyContent: 'center' ,
        alignltems:'center',
        backgroundcolor:'#97cae5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center' ,
        alignltems:'center',
        backgroundcolor: ' #92BBD9'
    }
})