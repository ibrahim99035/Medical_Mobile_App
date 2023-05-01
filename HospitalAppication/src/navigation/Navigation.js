import * as React from 'react';
import {
    View,
     Text,
    StyleSheet
    } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import DepartmentNav from './DepartmentsNav';
import HomeStack from './HomeStack'
   const Stack = createNativeStackNavigator();

function Navigation({ navigation }) {
   return (
     <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthStack">
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name='MainStack' component={MainStack}/>
      {/* <Stack.Screen name='HomeStack' component={HomeStack}/> */}

     </Stack.Navigator>
   );
}
const styles = StyleSheet.create({});

export default Navigation;
