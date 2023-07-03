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
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
const { width, height } = Dimensions.get('window');

export default function SignUP({ navigation }) {
    const [name, setName] = useState('');
    const [nameerorr, setNameerorr] = useState('');
    const [Email, setEmail] = useState('');
    const [Emailerorr, setEmailError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneerorr, setPhoneError] = useState('');
    const [password, setPassword] = useState('');
    const [passworderorr, setPassError] = useState('');
    const [secured_pass, setSecured_pass] = useState(false);


    const validateEmail = email => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return false;
        } else {
            return true;
        }
    };
    const validatePhone = phone => {
        var pho = /^01[0125][0-9]{8}$/gm;
        return pho.test(phone);
    };
    const validatePassword = password => {
        var pass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        return pass.test(password);
    };
    const validateName = name => {
        const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{5,30}$/;
        return re.test(String(name).toLowerCase());
    };

    const signup = value => {
        let error = 0;
        //name

        if (name.trim() == '') {
            error++;
            setNameerorr('enter your name');
        } else if (!validateName(name)) {
            error++;
            setNameerorr('enter valid name ');
        } else {
            setNameerorr('');
        }

        //email
        if (Email == '') {
            error++;
            setEmailError('enter your email');
        } else if (!validateEmail(Email)) {
            error++;
            setEmailError('enter valid email');
        } else {
            setEmailError('');
        }

        //phone
        if (phone == '') {
            error++;
            setPhoneError('enter your phone number');
        } else if (!validatePhone(phone)) {
            error++;
            setPhoneError('enter valid phone number ');
        } else {
            setPhoneError('');
        }

        //password
        if (password.trim() == '') {
            error++;
            setPassError('enter password');
        } else if (password.length > 20) {
            error++;
            setPassError('the password must not exceed 20 char and number');
        } else if (!validatePassword(password)) {
            error++;
            setPassError(
                'The password must be at least 6 numbers, an uppercase letter, a lowercase letter, and a distinctive sign',
            );
        } else {
            setPassError('');
        }

        if (error == 0) {
            // navigation.navigate("")
            alert("dn")
            console.log(error)
        }
        else {
            console.log(error)
        }
    }
    const onChangeEmail = value => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return reg.test(value.trim());
    };
    const onChangePassword = value => {
        var pass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return pass.test(value.trim());
    };
    const onChangephone = value => {
        var pho = /^01[0125][0-9]{8}$/gm;
        return pho.test(value.trim());
    };

    const onChangename = value => {
        const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{4,30}$/;
        return re.test(value.trim());
    };
    const secured_password = e => {
        let securedPass = secured_pass;
        securedPass = !securedPass;
        setSecured_pass(securedPass);
    };

    return (
        <>
            <ScrollView>
                <View style={styles.Header}>
                    <View style={styles.viewImageHeader}>
                        <Image source={require('../img/logo.png')}
                            resizeMode={"cover"}
                            style={styles.ImageHeader} />
                    </View>
                    <View style={styles.ViewfirstText}>
                        <Text style={styles.firstText}>
                            Register
                        </Text>
                        <Text style={styles.scText}>
                            Please Enter Your Data to Register
                        </Text>
                    </View>
                    <View style={styles.ViewInput1}>
                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "#181823",
                            paddingHorizontal: 5,
                            // width: width / 1.05,
                            alignSelf: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            // backgroundColor: "#000"
                        }}>
                            <TextInput
                                style={styles.Input}
                                placeholder={"Name"}
                                value={name}
                                onChangeText={value => {
                                    setName(value);
                                    if (onChangename(value)) {
                                        setNameerorr('');
                                    }
                                }}
                            />
                            <Ionicons name='person-circle-outline' size={23} color={"#181823"} />
                        </View>
                        <View style={styles.ErrorView}>
                            <Text style={styles.ErrorText}>{nameerorr}</Text>
                        </View>
                    </View>
                    <View style={styles.ViewInput1}>
                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "#181823",
                            paddingHorizontal: 5,
                            // width: width / 1.05,
                            alignSelf: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            // backgroundColor: "#000"
                        }}>
                            {/* <Ionicons name='call-outline' size={23} color={"#181823"} /> */}

                            <TextInput
                                style={styles.Input1}
                                placeholder={"Phone"}
                                keyboardType="number-pad"
                                value={phone}
                                onChangeText={value => {
                                    setPhone(value);
                                    if (onChangephone(value)) {
                                        setPhoneError('');
                                    }
                                }}
                            />
                            <Ionicons name='call-outline' size={23} color={"#181823"} />
                        </View>
                        <View style={styles.ErrorView1}>
                            <Text style={styles.ErrorText}>{phoneerorr}</Text>
                        </View>
                    </View>
                    <View style={styles.ViewInput1}>
                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "#181823",
                            paddingHorizontal: 5,
                            // width: width / 1.05,
                            alignSelf: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            // backgroundColor: "#000"
                        }}>
                            <TextInput
                                style={styles.Input1}
                                placeholder="email"
                                value={Email}
                                onChangeText={value => {
                                    setEmail(value);
                                    if (onChangeEmail(value)) {
                                        setEmailError('');
                                    }
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    secured_password();
                                }}>
                                <Entypo
                                    name={'email'}
                                    // secured_pass ? 'eye-with-line' : 
                                    size={20}
                                    color={"#181823"}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ErrorView1}>
                            <Text style={styles.ErrorText1}>{Emailerorr}</Text>
                        </View>
                    </View>
                    <View style={styles.ViewInput}>
                        <View style={{
                            borderWidth: 0.7,
                            borderColor: "#181823",
                            paddingHorizontal: 5,
                            // width: width / 1.05,
                            alignSelf: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            // backgroundColor: "#000"
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    secured_password();
                                }}>
                                <Entypo
                                    name={secured_pass ? 'eye-with-line' : 'eye'}
                                    size={20}
                                    color={"#181823"}
                                />
                            </TouchableOpacity>

                            <TextInput
                                style={styles.Input3}
                                placeholder="Password"
                                secureTextEntry={secured_pass}
                                // maxLength={10}
                                value={password}
                                onChangeText={value => {
                                    setPassword(value);
                                    if (onChangePassword(value)) {
                                        setPassError('');
                                    }
                                }}
                            />

                            <Ionicons
                                name={'lock-closed-outline'}
                                size={23}
                                color={'#181823'} />
                        </View>
                        <View style={styles.ErrorView}>
                            <Text style={styles.ErrorText}>{passworderorr}</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            signup();
                        }}

                        style={styles.button}>
                        <Text style={styles.titleStyle}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("SignIn")
                        }}

                        style={styles.button1}>
                        <Text style={styles.titleStyle1}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );

}

const styles = StyleSheet.create({
    Header: {
        // flex: 1,
        height: height*1.02,
        backgroundColor: "#fff",
        justifyContent: "space-evenly"
    },
    viewImageHeader: {
        height: height / 10,
        justifyContent: "center",
        alignItems: "center"
    },
    ImageHeader: {
        width: width / 4,
        height: height / 10
    },
    ViewfirstText: {
        // backgroundColor: "#ff0",
        width: width / 1.05,
        height: height / 10,
        alignSelf: "center",
        alignItems: "flex-end"
    },
    firstText: {
        fontSize: 25,
        color: "#549cfc",
        fontWeight: "bold"
    },
    scText: {
        fontSize: 15,
        color: "#181823",
    },
    ViewInput: {
        width: width / 1.05,
        // backgroundColor: "#ff0",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 10
    },
    Input: {
        // backgroundColor: "#f00",
        alignSelf: "center",
        width: width / 1.2,
        height: height / 16,
        color: "#181823",
        fontSize: 16,
        alignItems: 'flex-end',
    },
    ErrorView: {
        // backgroundColor: "#000",

        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        justifyContent: "center",
    },
    ErrorText: {
        fontSize: 10,
        color: '#f86e87',
    },
    //
    ViewInput1: {
        width: width / 1.05,
        // backgroundColor: "#ff0",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 10

    },
    Input1: {
        // backgroundColor: "#f00",
        alignSelf: "center",
        width: width / 1.2,
        height: height / 16,
        color: "#181823",
        fontSize: 16,
        alignItems: 'flex-end',
    },
    ErrorView1: {
        // backgroundColor: "#000",

        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        justifyContent: "center",
    },
    ErrorText1: {
        fontSize: 10,
        color: '#f86e87',
    },
    textInputpassword: {
        // alignSelf:"center",
        // width:width/1.05,
        // borderWidth: 0.7,
        // borderColor: "#181823",
        // flexDirection: 'row',
        // justifyContent: 'fle',
        // alignItems: 'center',
        borderWidth: 0.7,
        borderColor: "#181823",
        paddingHorizontal: 5,
        // width: width / 1.05,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    Input3: {
        // backgroundColor: "#f00",
        alignSelf: "center",
        width: width / 1.3,
        height: height / 16,
        color: "#181823",
        fontSize: 16,
        alignItems: 'flex-end',
    },
    button: {
        width: '70%',
        backgroundColor: "#549cfc",
        alignSelf: "center",
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    button1: {
        width: '70%',
        backgroundColor: "#fff",
        alignSelf: "center",
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle1: {
        color: '#549cfc',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
