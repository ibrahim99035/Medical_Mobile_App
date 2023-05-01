import * as React from 'react';
import { 
    View,
     Text,
     StyleSheet
    } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN , FONTS ,ICONSSIZE,PADDING,RADIUS} from '../Constants/Constant'

const Stack = createNativeStackNavigator();

import Departments from '../screen/Departments';
import AllDoctors from '../screen/AllDoctors';
import DoctorPage from '../screen/DoctorPage';
import Done from '../screen/Done';

function DepartmentNav() {
  return (
    <Stack.Navigator
    
      screenOptions={{
         headerShown: false,
    }}
      initialRouteName="Departments"
      >
      <Stack.Screen name='Departments' component={Departments} />
      <Stack.Screen name='AllDoctors' component={AllDoctors} />
      <Stack.Screen name='DoctorPage' component={DoctorPage} />
      <Stack.Screen name='Done' component={Done} />
     
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({

});

export default DepartmentNav;
