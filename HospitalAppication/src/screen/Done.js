import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '...'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Done() {

  

  return (
    <>
     <Text style={{alignSelf:"center", fontSize:50}}>Done</Text>

    </>


  )

}


const styles = StyleSheet.create({

});
