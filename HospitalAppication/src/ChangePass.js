import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from './Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')


export default function ChangePass({ navigation }) {
    // const navigation = useNavigation();

    const [notficationShow, setnotficationShow] = useState(false)

    const [oldPass, setoldPass] = useState('12345678')
    const [newPass, setnewPass] = useState('')
    const [ConfirmNewPass, setConfirmNewPass] = useState('')

    const [oldPassKey, setoldPassKey] = useState('')
    const [newPassKey, setnewPassKey] = useState('')
    const [ConfirmNewPassKey, setConfirmNewPassKey] = useState('')

    const [message1, setmessage1] = useState('')
    const [message2, setmessage2] = useState('')
    const [message3, setmessage3] = useState('')

    function changePass() {
        let old = oldPassKey
        let neew = newPassKey
        let confirmnew = ConfirmNewPassKey

        if (old != oldPass)
            setmessage1("error in old password")

        else if (neew.length < 7) {
            setmessage2("password is less than 8")
        }
        else if (neew != confirmnew) {
            setmessage3("confirm password is not true")
        }

        else if (old == oldPass && neew.length > 7 && neew == confirmnew) {
            setoldPass(neew)
            alert("Password is changed sucssufully")
            setmessage1('')
            setmessage2('')
            setmessage3('')
            setoldPassKey('')
            setnewPassKey('')
            setConfirmNewPassKey('')
        }

    }


    // function done() {

    // }
    return (
        <>
            <View style={{ flex: 1, alignItems: "center", backgroundColor: COLORS.white }}>
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
                        <Text style={styles.page_name_text}>Change Password</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() =>
                            navigation.goBack()
                        }
                    >
                        <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                </View>


                <View style={{
                    width: width / 1.1, height: height / 1.7, marginTop: MARGIN.xxlMargin,
                    // backgroundColor: "#00f"
                }}>
                    <View style={{ marginBottom: height / 18 }}>
                        <Text style={styles.text_des}>
                            Enter old Password
                        </Text>
                        <TextInput
                            placeholder='Enter old Password'
                            style={styles.txtinputStyle}
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.grayFont}
                            value={oldPassKey}
                            onChangeText={(value) =>
                                setoldPassKey(value)
                            }
                        />
                        <Text style={styles.errormessage}>
                            {message1}
                        </Text>
                    </View>

                    <View style={{ marginBottom: height / 18 }}>
                        <Text style={styles.text_des}>
                            Enter New Password
                        </Text>
                        <TextInput
                            placeholder='Enter New Password'
                            style={styles.txtinputStyle}
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.grayFont}
                            value={newPassKey}
                            onChangeText={(value) =>
                                setnewPassKey(value)
                            }
                        />
                        <Text style={{ color: COLORS.black, fontSize: 10, marginHorizontal: 15 }}>
                            more than 8 latter&numbers
                        </Text>
                        <Text style={styles.errormessage}>
                            {message2}
                        </Text>
                    </View>

                    <View >
                        <Text style={styles.text_des}>
                            Enter New Password again
                        </Text>
                        <TextInput
                            placeholder='Enter New Password again'
                            style={styles.txtinputStyle}
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.grayFont}
                            value={ConfirmNewPassKey}
                            onChangeText={(value) =>
                                setConfirmNewPassKey(value)
                            }
                        />

                        <Text style={styles.errormessage}>
                            {message3}
                        </Text>
                    </View>


                </View>

                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        changePass()
                    }}
                >
                    <Text style={{ color: COLORS.white, fontSize: FONTS.h2, fontFamily: "Cabin-Regular" }}>Done</Text>
                </TouchableOpacity>

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


    },
    text_des: {
        marginVertical: MARGIN.lMargin,
        fontSize: FONTS.h5,
        color: COLORS.mainColor,
        letterSpacing: 1.1,
        // alignSelf: "center",
        fontFamily: "Cabin-Regular",
        paddingHorizontal: PADDING.lPadding
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
        borderColor: COLORS.black


    },

    errormessage: {
        fontSize: 10,
        color: 'red',
        margin: MARGIN.lMargin,
        alignSelf: "center"
    }
    ,
    button: {
        width: width / 2.5,
        height: height / 14,
        backgroundColor: COLORS.mainColor,
        borderRadius: RADIUS.mdRadius,
        marginTop: "12%",
        padding: PADDING.lPadding,
        alignItems: "center",
        justifyContent: "center",

    }
})