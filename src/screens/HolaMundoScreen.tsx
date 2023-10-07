import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HolaMundoScreen = () => (
  <View style={style.container}>
    <Text style={style.text}>Hola mamá ya sé React Native :'D</Text>
  </View>
);

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  text: {fontSize: 32, textAlign: 'center'},
});
