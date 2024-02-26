import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    Alert
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')


export default function DoneAnalysis(props) {
    const [notficationShow, setnotficationShow] = useState(false)

    const navigation = useNavigation();

    const [name, setname] = useState("")
    const [age, setage] = useState('')


    const [anaName, setanaName] = useState('')
    const [anaSection, setanaSection] = useState('')

    useEffect(() => {
        let name = props.route.params.ana_name
        let sec = props.route.params.ana_place
        setanaName(name)
        setanaSection(sec)
    }, []);

    const getTomorrowDate = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toDateString();
    };
    const [errormessage, seterrormessage] = useState('')

    function fun() {
        let pationName = name;
        let pationtAge = age;
        if (pationName == '' || pationName.includes('!#$%^&*()')||pationtAge==''||pationtAge<1&&pationtAge>100) {
          seterrormessage('Error in information');
        }else if(pationName==""||pationtAge==""){
            seterrormessage("fill requires")
        }else{
            seterrormessage("")
            navigation.navigate("DoneAwy",{
            
                age:age,
                anaName:anaName,
                anaSection:anaSection,
pName:name
            })
        }


      }
      

    return (
        <>
            {/* checkmark-circle */}
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.white }}>
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
                        <Text style={styles.page_name_text}>Enter Information</Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                    >
                        <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                    style={{ width: width }}
                >

                    <Text style={styles.depart_textNameStyle}>{anaName}</Text>

                    <View style={styles.largeView}>

                        <View style={{ marginVertical: MARGIN.lMargin }}>
                            <Text style={styles.text_des}>
                                Enter  patient name
                            </Text>
                            <TextInput
                                placeholder='patient name'
                                style={styles.txtinputStyle}

                                placeholderTextColor={COLORS.grayFont}
                                value={name}
                                onChangeText={(value) =>
                                    setname(value)
                                }
                            />

                        </View>

                        <View style={{ marginVertical: MARGIN.lMargin }}>
                            <Text style={styles.text_des}>
                                Enter  patient age
                            </Text>
                            <TextInput
                                placeholder='patient age'
                                style={styles.txtinputStyle}

                                placeholderTextColor={COLORS.grayFont}
                                value={age}
                                onChangeText={(value) =>
                                    setage(value)
                                }
                            />

                        </View>
                        <View style={{ marginVertical: MARGIN.lMargin, width: width / 1.2, }}>
                            <Text style={styles.text_des}>
                                Date
                            </Text>
                            <Text style={{
                                color: COLORS.black,
                                textAlign: "right",
                                fontSize: FONTS.h5,
                                fontFamily: "Cabin-Regular",
                                alignSelf: "flex-end"
                            }}
                            >   Booking on : {getTomorrowDate()}</Text>
                        </View>
                        <Text style={{
                             color: 'red',
                             marginTop:MARGIN.xxlMargin ,
                             alignSelf: "center",
                             fontSize: 15
                        }}>{errormessage}</Text>

                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            fun()
                        }
                        }
                    >
                        <Text style={{ color: "#fff", fontSize: 17 }}>Done</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>


    )

}


const styles = StyleSheet.create({
    errormessage: {

        color: 'red',
        // marginVertical:MARGIN.xxlMargin ,
        alignSelf: "center",
        fontSize: 25
    },
    depart_textNameStyle: {
        width: width / 1.1,

        color: COLORS.mainColor,
        textAlign: "right",
        fontSize: FONTS.h2,
        fontFamily: "Cabin-Regular"

    },
    txtinputStyle: {
        width: width / 1.2,
        // height: height / 17,
        // alignItems: "center",
        alignSelf: "center",
        // color: "#000",
        // justifyContent: "flex-end",
        fontFamily: "Alkatra-Regular",
        // borderWidth: 2,
        paddingHorizontal: PADDING.sPadding,
        fontSize: FONTS.h6,
        // backgroundColor:"#00f",
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 10


    },

    errormessage: {
        fontSize: 10,
        color: 'red',
        margin: MARGIN.lMargin,
        alignSelf: "center"
    },
    text_des: {
        marginVertical: MARGIN.lMargin,
        fontSize: FONTS.h5,
        color: COLORS.mainColor,
        letterSpacing: 1.1,
        // alignSelf: "center",
        fontFamily: "Cabin-Regular",
        paddingHorizontal: PADDING.lPadding,
        alignSelf: "flex-end"

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
    largeView:
    {
        width: width,
        // height: height,
        backgroundColor: COLORS.white,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "15%"
    },
    button: {
        width: width / 4,
        height: height / 14,
        backgroundColor: COLORS.mainColor,
        borderRadius: RADIUS.lgRadius,
        marginTop: "30%",
        padding: PADDING.lPadding,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"

    }

});
