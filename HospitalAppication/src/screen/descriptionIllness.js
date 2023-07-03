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
    FlatList
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')
import * as Animatable from 'react-native-animatable';


export default function descriptionIllness(props) {
    const [notficationShow, setnotficationShow] = useState(false)


    const navigation = useNavigation();
    const [name, setname] = useState("")
    const [reason, setreason] = useState("")
    const [recover, setreacover] = useState("")

    useEffect(() => {
        let name1 = props.route.params.ill_name
        let reason1 = props.route.params.ill_reason
        let recover1 = props.route.params.ill_recover
        setname(name1)
        setreason(reason1)
        setreacover(recover1)
        console.log(JSON.stringify(props.route.params.name))
    }, []);


    return (
        <>
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
                        <Text style={styles.page_name_text}>Illness Information</Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                    >
                        <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-end", marginHorizontal: 20 }}>
                    <Text style={styles.ill_textNameStyle}>{name}</Text>
                </View>

                <View style={styles.ill_dec}>
                    <Text style={{ margin: MARGIN.lMargin, color: "#000", fontSize: FONTS.h4, fontFamily: "Cabin-Bold", }}>reasons :</Text>
                    <Text style={styles.text_dec}>
                        {reason}
                    </Text>
                </View>

                <View style={styles.ill_dec}>
                    <Text style={{ margin: MARGIN.lMargin, color: "#000", fontSize: FONTS.h4, fontFamily: "Cabin-Bold", }}>How To recver :</Text>
                    <Text style={styles.text_dec}>
                        {recover}
                    </Text>
                </View>
            </View>

        </>

    )

}


const styles = StyleSheet.create({
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


    }
    ,
    SearchTextView: {
        backgroundColor: COLORS.light,
        width: width / 1.1,
        // height: height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.smRadius,
        marginVertical: MARGIN.lMargin,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.mainColor

    },
    SearchTextInput: {
        width: width / 1.4,
        // height: height / 17,
        alignItems: "center",
        // alignSelf: "center",
        color: "#000",
        // justifyContent: "flex-end",
        fontFamily: "Alkatra-Bold",
        // borderWidth: 2,
        paddingHorizontal: PADDING.sPadding,
        fontSize: FONTS.h4,
        // backgroundColor:"#00f"

    },
    ill_textNameStyle: {
        color: COLORS.mainColor,
        textAlign: "right",
        fontSize: FONTS.h2,
        fontFamily: "Cabin-Bold",
        letterSpacing: 1.5,

        fontWeight: "bold"
    },
    ill_dec: {
        width: width / 1.14,
        // height: 150,
        backgroundColor: COLORS.textView,
        marginVertical: MARGIN.xlMargin,
        borderColor: COLORS.mainColor,
        borderWidth: 1,
        borderRadius: 5

    }
    ,
    text_dec: {
        // width: "97%",
        marginVertical: MARGIN.lMargin,
        fontSize: FONTS.h5,
        color: COLORS.black,
        letterSpacing: 1.1,
        alignSelf: "center",
        fontFamily: "Cabin-Regular",
        paddingHorizontal: PADDING.lPadding
    }
});
