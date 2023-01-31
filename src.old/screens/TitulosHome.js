import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../global/styles";

export default function TitulosHome({title}){
    return(
        <View style={styles.headerTextView}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    headerText:{
        color:colors.grey2,
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:20
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    },
})