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
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')


export default function DoctorPage() {
  const [notficationShow, setnotficationShow] = useState(false)

  const navigation = useNavigation();


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
            <Text style={styles.page_name_text}>Make appointment</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
          >
            <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>

        </View>


        <View style={styles.doctor_view}>
          <View style={styles.doctor_img_view}>
            <Image source={require('../img/1.png')}
              style={styles.doctor_img}
            />
          </View>
          <View style={styles.doctor_info}>
            <Text style={styles.doctor_name}
              numberOfLines={1}
            >
              Abdelrhman ghodia
            </Text>
            <Text style={styles.doctor_section}>
              cancer Department
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={styles.doctor_section}>3.3</Text>
                <Ionicons name="star" size={20} color={COLORS.white} style={{ marginHorizontal: 3 }} />

              </View>
         
              <Text style={styles.doctor_exp}>
              ( 5 years of experience )
            </Text>
            </View>
        
            <Text style={styles.doctor_status}>
                Available now
              </Text>
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
  doctor_view: {
    width: width / 1.1,
    height: height / 5.5,
    backgroundColor: COLORS.mainColor,
    marginVertical: MARGIN.lMargin,
    flexDirection: "row-reverse",
    borderRadius: RADIUS.lgRadius,
    elevation: 5,
    justifyContent: "space-between"
    // padding: PADDING.lPadding
  },
  doctor_img_view: {
    width: width / 2.7,
    height: height / 5.5,
    // backgroundColor: "#f0f",
    borderRadius: RADIUS.lgRadius,
    alignItems: "center",
    justifyContent: "center"
  },
  doctor_img: {
    width: width / 2.7,
    height: height / 5.5,
    borderRadius: RADIUS.lgRadius,

    // resizeMode: "contain"
  }
  ,
  doctor_info: {
    // backgroundColor: "#0ff",
    width: width / 1.9,
    height: height / 5.5,
    borderBottomStartRadius: RADIUS.lgRadius,
    borderTopStartRadius: RADIUS.lgRadius,
    padding: PADDING.sPadding
  }
  ,
  depart_textNameStyle: {
    color: COLORS.mainColor,
    textAlign: "right",
    fontSize: FONTS.h2,
    fontFamily: "Cabin-Regular"

  },
  doctor_name: {
    fontFamily: "Cabin-Bold",
    fontSize: FONTS.h2,
    color: COLORS.white,


  }
  ,
  doctor_section: {
    fontFamily: "Cabin-Regular",
    fontSize: FONTS.h4,
    color: COLORS.white,
    
  },
  doctor_status: {
    fontFamily: "Cabin-Bold",
    fontSize: FONTS.h2,
    letterSpacing: 1.5,
    color: "#0f0",
    // color:"#f00",
    alignSelf:"center",
    marginVertical:5
  },
  doctor_exp: {
    fontFamily: "Cabin-Regular",
    color: COLORS.white,
    fontSize: FONTS.h6
  },
});
