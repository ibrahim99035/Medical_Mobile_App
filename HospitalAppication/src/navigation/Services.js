import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'

const Stack = createNativeStackNavigator();

import Service from '../screen/Service'
import DoneAnalysis from '../screen/DoneAnalysis';
import DoneAwy from '../screen/DoneAwy'

function Services() {
    return (
        <Stack.Navigator

            screenOptions={{
                headerShown: false,
            }}
        >
           
           <Stack.Screen name='Service' component={Service} />
           <Stack.Screen name='DoneAnalysis' component={DoneAnalysis} />
           <Stack.Screen name='DoneAwy' component={DoneAwy} />


        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({

});

export default Services;
