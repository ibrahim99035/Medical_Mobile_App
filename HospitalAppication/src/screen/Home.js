import * as React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Linking,
    BackHandler,
    
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
const { width, height } = Dimensions.get('window')
import * as Animatable from 'react-native-animatable';

export default class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            notficationShow: false

        }
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)

    }



    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }
    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    // }
    // handleBackButtonClick() {
    //     BackHandler.exitApp()
    //     return true;
    // }


    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={COLORS.mainColor}
                />
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.white }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({
                                    notficationShow: !this.state.notficationShow
                                })
                            }
                        >
                            <Ionicons
                                name={this.state.notficationShow ? "notifications" : "notifications-outline"} size={30}
                                color={this.state.notficationShow ? COLORS.mainColor : COLORS.black} style={{ marginHorizontal: 10 }} />


                        </TouchableOpacity>
                        <Image source={require("../img/logo.png")} style={styles.logo} />
                        <TouchableOpacity
                            onPress={() =>
                                BackHandler.exitApp()
                            }
                        >
                            {/* <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} /> */}
                            <Ionicons name="exit-outline" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.nameView}>
                        <Text
                            numberOfLines={1}
                            style={[styles.textNameStyle, { fontSize: FONTS.h3, textDecorationLine: "underline" }]}>
                            Welcome Abdelrhman
                        </Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Animatable.View
                        animation={"zoomIn"}
                        >
                            <View style={styles.largeView}>
                                <Image source={require("../img/doc.png")}
                                    style={styles.newsImg} />
                                <View>
                                    <Text style={[styles.textStyle, { fontSize: FONTS.h0 }]}>
                                        Al-Asema {"\n"} Hospital
                                    </Text>
                                </View>

                            </View>
                        </Animatable.View>
{/* 
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() =>
                                this.props.navigation.navigate('DepartmentNav')
                            }

                        >
                            <View style={styles.viewForText}>
                                <Text style={styles.textStyle}>Departments</Text>
                            </View>
                            <View style={styles.viewForIcon}>
                                <Image style={styles.buttonImage} source={require("../img/doctorIcon.png")} />
                            </View>
                        </TouchableOpacity> */}


                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() =>
                                this.props.navigation.navigate('Medicine')
                            }
                        >
                            <View style={styles.viewForText}>
                                <Text style={styles.textStyle}>Medicine</Text>
                            </View>
                            <View style={styles.viewForIcon}>
                                <Image style={styles.buttonImage} source={require("../img/medi.png")} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                        onPress={()=>{
                            this.props.navigation.navigate('Service')

                        }}
                        >
                            <View style={styles.viewForText}>
                                <Text style={styles.textStyle}>Analysis</Text>
                            </View>
                            <View style={styles.viewForIcon}>
                                <Image style={styles.buttonImage} source={require("../img/service.png")} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => {
                                Linking.openURL('tel:' + "01097751608");
                            }}
                        >
                            <View style={styles.viewForText}>
                                <Text style={styles.textStyle}>Emergency</Text>
                            </View>
                            <View style={styles.viewForIcon}>
                                <Image style={styles.buttonImage} source={require("../img/Ambulance.png")} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() =>
                                this.props.navigation.navigate('IllnessStack')
                            }
                        >
                            <View style={styles.viewForText}>
                                <Text style={styles.textStyle}>Illness</Text>
                            </View>
                            <View style={styles.viewForIcon}>
                                <Image style={styles.buttonImage} source={require("../img/hl.png")} />
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{ height: 50 }}></View>
                </View>

            </>
        )
    }

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
    }
    ,
    logo: {
        width: width / 1.7,
        height: height / 10,
        marginVertical: MARGIN.lMargin,
        resizeMode: 'contain',
    }
    ,
    nameView: {
        width: width,
        marginVertical: height / 30,
        // backgroundColor: "#0f0",
        padding: PADDING.lPadding,
    }
    ,
    textNameStyle: {
        color: COLORS.mainColor,
        textAlign: "right",
        fontFamily: "Cabin-Regular"

    },
    largeView: {
        width: width / 1.1,
        height: height / 5.5,
        backgroundColor: COLORS.mainColor,
        borderRadius: RADIUS.smRadius,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    }
    ,
    newsImg: {
        resizeMode: "contain",
        width: width / 2.6,
        height: height / 5.5,
        borderRadius: RADIUS.smRadius
    }
    ,
    textStyle: {
        color: COLORS.white,
        fontSize: FONTS.h1,
        textAlign: "center",
        margin: MARGIN.lMargin,
        fontFamily: "Cabin-Regular"

    }

    ,
    buttonStyle: {
        width: width / 1.3,
        height: height / 10,
        backgroundColor: COLORS.mainColor,
        marginVertical: MARGIN.xlMargin,
        borderRadius: RADIUS.smRadius,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5, flexDirection: "row",
        alignSelf: "center"
        // paddingVertical: 10,

    }
    ,
    buttonImage: {
        width: width / 11,
        height: height / 16,
        resizeMode: 'contain',
        // borderRadius:RADIUS.mdRadius,
        marginHorizontal: MARGIN.lMargin
    }
    ,
    viewForText: { width: "75%", alignItems: "flex-end" },
    viewForIcon: { width: "25%", alignItems: "center", },

})

