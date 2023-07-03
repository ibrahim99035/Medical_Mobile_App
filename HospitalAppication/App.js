import React  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Component } from 'react';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>


      {/* <Signghod/> */}
    </>
  );
}
const styles = StyleSheet.create({});

export default App;