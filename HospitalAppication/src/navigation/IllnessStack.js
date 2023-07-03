import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'

const Stack = createNativeStackNavigator();

import Illness from '../screen/Illness';
import descriptionIllness from '../screen/descriptionIllness';
function IllnessStack() {
    return (
        <Stack.Navigator

            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Illness' component={Illness} />
            <Stack.Screen name='descriptionIllness' component={descriptionIllness} />


        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({

});

export default IllnessStack;
