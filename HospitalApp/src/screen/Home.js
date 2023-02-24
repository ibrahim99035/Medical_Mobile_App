import * as React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
const { width, height } = Dimensions.get('window')

export default class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            notficationShow: false

        }
    }

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
                        <TouchableOpacity >
                            {/* <Ionicons name="arrow-back" color={COLORS.white} size={30} /> */}
                            <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.nameView}>
                        <Text
                            numberOfLines={1}
                            style={[styles.textStyle, { fontSize: FONTS.h3, textDecorationLine: "underline" }]}>
                            Welcome Abdelrhman
                        </Text>
                    </View>


                    <View style={styles.largeView}>
                        <Image source={require("../img/doc.png")}
                            style={styles.newsImg} />

                    </View>
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
        textAlign: "right"
    },
    largeView: {
        width: width / 1.1,
        height: height / 5.5,
        backgroundColor: COLORS.mainColor,
        borderRadius: RADIUS.smRadius,
        flexDirection: "row",
        alignItems: "center"
    }
    ,
    newsImg: {
        resizeMode: "contain",
        width: width / 2.6,
        height: height / 5.5,
        borderRadius: RADIUS.smRadius
    }
})

