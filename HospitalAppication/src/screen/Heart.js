import * as React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text
} from 'react-native'

import { COLORS, MARGIN , FONTS ,ICONSSIZE,PADDING,RADIUS} from '../Constants/Constant'
const { width, height } = Dimensions.get('window')

export default class Heart extends React.Component {


    constructor(props) {
        super(props)
        this.state = {


        }
    }
    
    render() {
        return (
            <>
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>heart!</Text>
    </View>

            </>
        )
    }

}


const styles = StyleSheet.create({

})