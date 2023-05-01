import * as React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native'

import LottieView from 'lottie-react-native'
import { COLORS, MARGIN , FONTS ,ICONSSIZE,PADDING,RADIUS} from '../Constants/Constant'
const { width, height } = Dimensions.get('window')

export default class Splash extends React.Component {


    constructor(props) {
        super(props)

        this.ref = React.createRef(null)
        this.state = {

        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Intro');



        }, 3000)


    }

    render() {
        return (
            <>
                <View style={styles.main_view}>
                    <Image source={require('../img/logo.png')}
                        style={styles.logo}
                    />
                    <View style={{ width: width / 1, height: height / 1.7, marginTop: "13%" }}>
                        <LottieView
                            ref={this.ref}
                            source={require("../lottie/care-services.json")}
                            loop={false}
                            autoPlay={true}
                            speed={1}
                        />
                    </View>





                </View>



            </>
        )
    }

}


const styles = StyleSheet.create({
    main_view: {
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: "center",
        // justifyContent: "space-between"
    }
    ,
    logo: {
        width: width / 1.8,
        height: height / 7,
        marginVertical: MARGIN.lMargin,
        resizeMode: 'contain',


    }


})