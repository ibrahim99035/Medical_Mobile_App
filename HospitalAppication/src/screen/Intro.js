import * as React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window')
import LottieView from 'lottie-react-native'
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'

export default class Intro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <>
                <View style={styles.mainVeiw}>
                    <View style={{ marginTop: "15%", marginStart: "50%", alignItems: "baseline" }}>
                        <Image source={require('../img/hosLogo.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.textStyle}>Al-ASEMA Hospital</Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={[styles.textStyle, { fontSize: FONTS.h0, }]}>
                            Way to a better life
                            and good health</Text>

                        <Text style={[styles.textStyle, { fontSize: FONTS.h3, lineHeight: 25, }]}

                        >
                            Welcome to the first step of being better
                            and become new one ,
                            let's start to browse our application.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button}
                    onPress={()=>
                    this.props.navigation.navigate('SignIn')
                    }
                    >
                        <Text style={{ color: COLORS.black, fontSize: FONTS.h2 }}>Get Start</Text>
                    </TouchableOpacity>

                </View>
            </>
        )
    }




}


const styles = StyleSheet.create({
    mainVeiw: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.mainColor
    }
    ,
    logo: {
        width: width / 4,
        height: height / 8,
        margin: MARGIN.lMargin,
        paddingHorizontal: 50
    }
    ,
    textStyle: {
        color: COLORS.light,
        textAlign: "right",
        fontFamily:"Alkatra-Regular"
    }
    ,
    textView: {
        width: width / 1.1,
        height: 250,
        // backgroundColor: "#f0f",
        alignItems: "center",
        marginTop: MARGIN.xxxlMargin,
        justifyContent: "space-between",
        padding: PADDING.xlPadding
    }
    ,
    button: {
        width: width / 2,
        height: height / 10,
        backgroundColor: COLORS.light,
        borderRadius: RADIUS.lgRadius,
        marginTop: "30%",
        padding: PADDING.lPadding,
        alignItems: "center",
        justifyContent: "center",

    }
})