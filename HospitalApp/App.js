import React from 'react';
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
import Splash from './src/screen/Splash';

const App = () => {
  return (
    <>
      <Splash/>
    </>
  );
}
const styles = StyleSheet.create({});

export default App;