//Componente com as rotas do aplicativo (para permitir navegação de uma tela para outra.)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInWelcomeScreen from './src/screens/authScreens/SigInWelcomeScreen';
import SignInScreen from './src/screens/authScreens/SignInScreen';


const AppStack = createStackNavigator();

const Rotas = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <AppStack.Screen name="SigInWelcomeScreen" component={SignInWelcomeScreen} />
                <AppStack.Screen name="SigInScreen" component={SignInScreen} />
                
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;