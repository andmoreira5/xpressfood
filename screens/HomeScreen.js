import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation()

  return (
    <SafeAreaView className='bg-white pt-5'>
            {/* Header  */}
        {/* <Text> */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2 mt-6 px-2'>
                <Image source={{uri:"https://links.papareact.com/wru"}} className='h-7 w-7 p-4 rounded-full'  />
                <View  className='flex-1'>
                    <Text className='font-bold text-gray text-xs '>Delivery now!</Text>
                    <Text className='font-bold text-xl'>
                        Current Location 
                        <Icon type="material-community" name="chevron-down" color='#333' size={20}/>
                    </Text>
                </View>
                <Icon type="material-community" name="account" color='#333' size={35}/>
            </View>
            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 bg-gray-clear space-x-2 p-3'>
                    <Icon type="material" name="search" color='#333' size={35}/>
                    <TextInput 
                        placeholder='Restaurantes e cozinhas'
                        keyboardType='default' />
                </View>
                <Icon type="material-community" name="cog" color='#333' size={35}/>
            </View>
        {/* </Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen