import React, { useState } from "react";
import { ScrollView, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import HomeHeader from "../components/HomeHeader";
import { filterData } from "../global/Data";
import { colors } from "../global/styles";
import TitulosHome from "./TitulosHome";

export default function HomeScreen(){

    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState('0')

    return(
        <View style={styles.cont}>
            <HomeHeader />

            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View>
                    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-evenly'}}>
                        <TouchableOpacity 
                        onPress={()=>{setDelivery(true)}}>
                            <View style={{...styles.deliveryButton, backgroundColor:delivery ? colors.buttons : colors.grey5}}>
                                <Text style={styles.deliveryText}>Delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>setDelivery(false)}>
                            <View style={{...styles.deliveryButton, backgroundColor:delivery ? colors.grey5 : colors.buttons}}>
                                <Text style={styles.deliveryText}>Pick Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.filterView}>
                    <View style={{flexDirection:'row', backgroundColor:colors.grey5, borderRadius:15, paddingHorizontal:20, paddingVertical:5}} >
                        <View style={{flexDirection:'row',  alignItems:'center', paddingLeft:10}}>
                            <Icon type="material-community" name="map-marker" color={colors.grey1} size={26}/>
                            <Text style={{marginLeft:5}}>22 Beessie Street</Text>
                        </View>
                        <View style={styles.clockView}>
                            <Icon type="material-community" name="clock-time-four" color={colors.grey1} size={26}/>
                            <Text style={{marginLeft:5}}>Agora</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
                            <Icon type="material-community" name="tune" color={colors.grey1} size={26}/>
                        </View>
                </View>

                <TitulosHome title='Categorias' />

                <View>
                    <FlatList 
                        horizontal={true}
                        showsHorizontalScrollIndicator = {false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem = {({item, index}) => (
                            <Pressable
                                onPress={()=>{setIndexCheck(item.id)}}
                            >
                                <View style={indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                    <Image style={{height:'45%', width:'70%'}} source={item.image} />
                                    <View>
                                    <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected} : {...styles.smallCardText} }> {item.name} </Text>
                                </View>
                                </View>
                                
                            </Pressable>
                            )}
                    />
                </View>

                <TitulosHome title='Free Delivery Now' />

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
        flex:1,
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16
    },
    filterView:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-evenly',
        marginHorizontal:10, 
        marginVertical:10
    },
    clockView:{
        flexDirection:'row', 
        alignItems:'center', 
        marginLeft:20, 
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
    },
    
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardTextSelected:{
        fontWeight:'bold',
        color:colors.cardbackground
    },
    smallCardText:{
        fontWeight:'bold',
        color:colors.grey2
    }
})