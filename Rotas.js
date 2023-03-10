//Componente com as rotas do aplicativo (para permitir navegação de uma tela para outra.)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';


const AppStack = createStackNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <AppStack.Screen name='HomeScreen' component={HomeScreen}></AppStack.Screen>
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;