import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screen/Home';
import Heart from '../screen/Heart';
import Chat from '../screen/Chat';
import Profile from '../screen/Profile';
import HomeStack from './HomeStack';
import DepartmentNav from './DepartmentsNav';
import ProfileStack from './ProfileStack';
// import Service from '../screen/Service';
import Services from './Services';
const Tab = createBottomTabNavigator()

function MainStack() {
    return (

        <Tab.Navigator
            initialRouteName='Home'

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Departments') {
                        iconName = focused ? 'medkit' : 'medkit-outline'
                    }
                    //  else if (route.name === 'Chat') {
                    //     iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
                    // }

                    else if (route.name === 'Services') {
                        iconName = focused ? "eyedrop" : 'eyedrop-outline'
                    }
                     else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={25} color={color} />;
                },
                tabBarActiveTintColor: COLORS.mainColor,
                tabBarInactiveTintColor: "#000",
                

            })}
        >
            <Tab.Screen name="Profile" component={ProfileStack} />
            {/* <Tab.Screen name="Chat" component={Chat} /> */}
            <Tab.Screen name='Services' component={Services}/>
             <Tab.Screen name='Departments'  component={DepartmentNav}/>
            <Tab.Screen name="Home" component={HomeStack} />




        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#E9F8F9',
        position: 'absolute',
        padding: PADDING.sPadding,
        borderTopWidth: 0,
        borderRadius: 15,
        // right: 5,
        // left: 5,
        // marginBottom: 5

    }
});

export default MainStack;
