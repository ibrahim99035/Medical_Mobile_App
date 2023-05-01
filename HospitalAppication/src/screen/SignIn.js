import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Home from './Home';
const { width, height } = Dimensions.get('window')

function SignIn({ navigation }) {
  return (
    <>
      <View style={styles.mainView}>
        <TouchableOpacity
          style={{ width: 50, height: 50, backgroundColor: "#f00" }}
          onPress={() => navigation.navigate('MainStack')}
          
        >

        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white
  }
  ,
  header: {
    width: width,
    height: height / 10,
    backgroundColor: COLORS.mainColor,
    alignItems: "center"
  }

});

export default SignIn;