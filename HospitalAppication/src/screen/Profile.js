// import * as React from 'react'
// import {
//     View,
//     StyleSheet,
//     Dimensions,
//     Image,
//     Text
// } from 'react-native'

// import { COLORS, MARGIN , FONTS ,ICONSSIZE,PADDING,RADIUS} from '../Constants/Constant'
// const { width, height } = Dimensions.get('window')

// export default class Profile extends React.Component {


//     constructor(props) {
//         super(props)
//         this.state = {


//         }
//     }

//     render() {
//         return (
//             <>
//          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>

//             </>
//         )
//     }

// }


// const styles = StyleSheet.create({

// })



import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    BackHandler,
    ScrollView,
    AsyncStorage,
    TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'

const { width, height } = Dimensions.get('window');

export default function Profile({ navigation }) {
    const [Email, setEmail] = useState('');

    const [notficationShow, setnotficationShow] = useState(false)


    // const navigation = useNavigation();

    return (
        <>
            <View style={styles.Page}>

                <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => {
                            setnotficationShow(!notficationShow)
                        }
                        }
                    >
                        <Ionicons
                            name={notficationShow ? "notifications" : "notifications-outline"} size={30}
                            color={notficationShow ? COLORS.mainColor : COLORS.black} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>
                    {/* <Image source={require("../img/logo.png")} style={styles.logo} /> */}

                    <View style={styles.pageNameview}>
                        <Text style={styles.page_name_text}>Profile</Text>
                    </View>

                    <TouchableOpacity
                        onPress={()=>
                        navigation.navigate("Home")
                        }
                    >
                        <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                </View>


                <View style={styles.HeaderImage}>
                    <Image
                        resizeMode="contain"
                    source={require('../img/1.png')}
                        style={styles.imageStyle}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            // this.selectFromGallery();
                        }}
                        style={styles.addPhotoViewStyle}
                    >
                        <MaterialCommunityIcons name="pen" size={25} color={"#000"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.profileDataViewStyle}>

                    <View>
                        <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                            {/* <TouchableOpacity
                                onPress={() => {
                                    // this.selectFromGallery();
                                }}
                                style={[styles.addPhotoViewStyle, {
                                    marginTop: 0,
                                    width: 20,
                                    height: 20,
                                    marginRight: 5,
                                    justifyContent: "center"
                                }]}
                            >
                                <MaterialCommunityIcons name="pen" size={15} color={"#000"} />
                            </TouchableOpacity> */}
                            <Text style={styles.nameStyle}>abdelrahmanghod</Text>

                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.emailStyle}>@abdelrahmanghod</Text>
                        </View>

                    </View>
                </View>
                <TouchableOpacity style={{
                    width: width / 1.05,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // backgroundColor: "#000",
                    flexDirection: "row",
                    marginVertical: MARGIN.sMargin

                }}>
                    <MaterialIcons name="keyboard-arrow-right" size={35} color={"#000"} />

                    <View style={{
                        // width: width / 1.05,
                        // alignSelf: "center",
                        alignItems: "center",
                        // backgroundColor: "#000",
                        flexDirection: "row"
                    }}>
                        <View
                            style={styles.button}>
                            <Text style={styles.titleStyle}>Address</Text>
                        </View>
                        <MaterialIcons name="location-pin" size={25} color={"#549cfc"} />


                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: width / 1.05,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // backgroundColor: "#000",
                    flexDirection: "row",
                    marginVertical: MARGIN.sMargin

                }}
                    onPress={(
                        () => navigation.navigate('ChangePass')
                    )}
                >
                    <MaterialIcons name="keyboard-arrow-right" size={35} color={"#000"} />
                    <View style={{
                        // width: width / 1.05,
                        // alignSelf: "center",
                        alignItems: "center",

                        // backgroundColor: "#000",
                        flexDirection: "row"
                    }}>
                        <View
                            style={styles.button}>
                            <Text style={styles.titleStyle}>Change Password</Text>
                        </View>
                        <MaterialIcons name="remove-red-eye" size={25} color={"#549cfc"} />


                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        // login();
                    }} style={{
                        width: width / 1.07,
                        // alignSelf: "flex-start",
                        marginLeft: 3,
                        alignItems: "center",
                        justifyContent: "space-between",
                        // backgroundColor: "#000",
                        flexDirection: "row",
                        marginVertical: MARGIN.sMargin
                    }}>
                    <Entypo name="log-out" size={25} color={"red"} />

                    <View style={{
                        // width: width / 1.05,
                        // alignSelf: "center",
                        alignItems: "center",

                        // backgroundColor: "#000",
                        flexDirection: "row"
                    }}>
                        {/* <MaterialIcons name="remove-red-eye" size={25} color={"#549cfc"} /> */}

                        <View
                            style={[styles.button, { marginRight: 0 }]}>
                            <Text style={styles.titleStyle}>Logout</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={() => {
                        // login();
                    }}

                    style={styles.button}>
                    <Text style={styles.titleStyle}>تغيير كلمة السر</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        // login();
                    }}

                    style={styles.button}>
                    <Text style={styles.titleStyle}>تسجيل خروج</Text>
                </TouchableOpacity> */}

            </View>
        </>
    );

}

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        alignItems: "center",
        // justifyContent:"center"
        backgroundColor: "#fff"
    },
    HeaderImage: {
        height: height / 6,
        // alignItems:"center",
        // alignSelf:"center",
        justifyContent: 'flex-end',
        // width:width,
        // backgroundColor:"#000"
    },
    profileDataViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        // marginRight: 10,
    },
    addPhotoViewStyle: {
        marginTop: -25,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        borderRadius: 15,
        backgroundColor: COLORS.mainColor
    },
    followingViewStyle: {
        width: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    nameStyle: {
        fontSize: 18,
        color: "#000",
        fontWeight: 'bold',
    },
    emailStyle: {
        fontSize: 14,
        color: "#aaa",
        marginBottom: 5,
    },
    followingTextNumbersStyle: {
        fontWeight: 'bold',
        color: "#000",
    },
    button: {
        marginVertical: 5,
        // marginLeft: 5,
        marginRight: 10,

        // width: 70,
        // backgroundColor: "#549cfc",
        alignSelf: "center",
        height: 30,
        // borderRadius: 10,
        justifyContent: 'center',
        // alignItems: "flex-end",
    },
    titleStyle: {
        color: '#181823',
        fontSize: 18,
        fontWeight: 'bold',
    },
    header: {
        width: width,
        height: height / 12,
        flexDirection: "row",
        padding: PADDING.sPadding,
        // backgroundColor:COLORS.mainColor,
        // borderBottomWidth: 0.2,
        alignItems: "center",
        justifyContent: "space-between",

    }
    ,
    goBack: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.mainColor,
        marginHorizontal: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    pageNameview: {
        width: width / 1.7,
        height: height / 10,
        marginVertical: MARGIN.lMargin,
        // backgroundColor:"#0f0",
        alignItems: "center",
        justifyContent: "center"
    },
    page_name_text: {
        fontSize: FONTS.h1,
        color: COLORS.mainColor,
        fontFamily: "Cabin-Regular"


    },
});
