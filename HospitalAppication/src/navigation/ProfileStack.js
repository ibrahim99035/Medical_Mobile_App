import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'

const Stack = createNativeStackNavigator();
import Profile from '../screen/Profile';
import ChangePass from '../ChangePass';
function ProfileStack() {
    return (
        <Stack.Navigator

            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Profile"
        >
              <Stack.Screen name='Profile' component={Profile} />

            <Stack.Screen name='ChangePass' component={ChangePass} />


        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({

});

export default ProfileStack;
