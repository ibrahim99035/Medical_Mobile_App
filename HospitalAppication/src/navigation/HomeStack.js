import * as React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'

const Stack = createNativeStackNavigator();


import Medicine from '../screen/Medicine';
// import DepartmentNav from './DepartmentsNav';
import Home from '../screen/Home';
import IllnessStack from './IllnessStack';
function HomeStack() {
  return (
    <Stack.Navigator

      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name='Home' component={Home} />
      {/* <Stack.Screen name='DepartmentNav' component={DepartmentNav} /> */}
      <Stack.Screen name='Medicine' component={Medicine} />
      <Stack.Screen name='IllnessStack' component={IllnessStack}/>

    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({

});

export default HomeStack;
