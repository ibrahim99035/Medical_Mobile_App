import React, { useState, useEffect } from 'react';
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
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')



export default function DoneAwy(props) {
  const [notficationShow, setnotficationShow] = useState(false)

  const navigation = useNavigation();


  const [name, setname] = useState("")
  const [age, setage] = useState('')


  const [anaName, setanaName] = useState('')
  const [anaSection, setanaSection] = useState('')

  useEffect(() => {
    // let nameee = props.route.params.pName
    // let sec = props.route.params.anaSection
    // let aname = props.route.params.anaName
    // let agee = props.route.params.age
    // setname(nameee)
    // setage(agee)
    // setanaName(aname)
    // setanaSection(sec)

  }, []);


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
            <Text style={styles.page_name_text}>Reservation Done</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
          >
            <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>

        </View>
        <View style={styles.largeView}>
          <Ionicons name="checkmark-circle" size={150} color={COLORS.white} />

          <View style={{marginVertical:MARGIN.xxlMargin}}>
          <Image source={require("../img/frame.png")} style={{ width: 300, height: 300 }} />
          </View>

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


  },
  largeView:
  {
    width: width,
    height: height,
    backgroundColor: COLORS.mainColor,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: width / 4,
    height: height / 14,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lgRadius,
    marginTop: "30%",
    padding: PADDING.lPadding,
    alignItems: "center",
    justifyContent: "center",

  }

});
