import * as React from 'react';
import { 
    View,
     Text,
     StyleSheet
    } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN , FONTS ,ICONSSIZE,PADDING,RADIUS} from '../Constants/Constant'
import Splash from '../screen/Splash';
import Intro from '../screen/Intro';
import SignIn from '../screen/SignIn';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
    
      screenOptions={{
         headerShown: false,
    }}
      initialRouteName="Splash"
      >
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name='SignIn' component={SignIn}/>
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({

});

export default AuthStack;
