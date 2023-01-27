import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Rotas from './Rotas';
import { colors } from './src/global/styles';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={"light-content"}
        backgroundColor={colors.buttons}
      />
      <Rotas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
