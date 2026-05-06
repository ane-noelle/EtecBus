  import React, {useState, useEffect, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ActivityIndicator, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from "expo-location"; 

// Configurações fixas - locais
const SCHOOL = {
  id: 'school',
  name: 'Etec Comendador Joao Rays',
  cordinate: { latitude: -22.48920909957289, longitude: -48.54640704593705},
  address: 'Rua Ludovico Victorio, 2140, Barra Bonita - SP'
};

const BUS_STOPS = [
  {
    id: 'stop_1',
    name: 'Autoescola Muriano',
    address: 'R. Geraldo Fazzio, 484',
    cordinate: { latitude: -22.484226345567947, longitude: -48.564770398285106},
    lines: ['Nova Barra'],
  }
];

//Distancia Haversine (metros)
function getDistance(c1,c2) {

}

function formaDistance(m) {
  return m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`; 
}

// HTML do leaflet (openstreetmap - sem chave)
function buidLeafletHTML(userCoord, nearestStopId, selectedStopId) {
  const stopsJSON = JSON.stringify(BUS_STOPS);
  const schoolJSON = JSON.stringify(SCHOOL);
  const userJSON =  userCoord ? JSON.stringify(userCoord) : 'null';

  return ``;

}


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
