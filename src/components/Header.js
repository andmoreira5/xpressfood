import React from "react";
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { Icon } from "react-native-elements";
import { colors, parameters } from "../global/styles";

export default function Header({title, type}){
    return (
        <View style={styles.header}>
            <View style={{marginLeft:20}}>
                <Icon 
                    type = "material-community"
                    name = {type}
                    color = {colors.cardbackground}
                    size = {28}
                    onPress = {()=>{}}
                />
            </View>
            <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
        </View>
    )
}

const  styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight
    },
    headerText : {
        color: colors.cardbackground,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30
    }
})