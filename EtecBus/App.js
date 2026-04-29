  import React, {useState, useEffect, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ActivityIndicator, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from "expo-location"; 

// Configurações fixas - locais
const SCHOOL = {
  id: 'school',
  name: 'Etec Comendador Joao Rays',
  cordinate: {},
  address: 'Rua Ludovico Victorio, 2140, Barra Bonita - SP'
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
