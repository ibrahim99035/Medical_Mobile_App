import React, { Component, useState, useEffect } from 'react';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const { width, height } = Dimensions.get('window')


export default function AllDoctors(props) {
  const [notficationShow, setnotficationShow] = useState(false)

  const [department, setdepartment] = useState("")
  const [doctors, setdoctors] = useState([])
  const [depImg, setdepImg] = useState()


  useEffect(() => {
    let name = props.route.params.department_name
    let img = props.route.params.dep_img
    let docctors = props.route.params.dep_doctors

    setdepartment(name)
    setdoctors(docctors)
    setdepImg(img)
    // console.log(JSON.stringify(props.route.params.name))
  }, []);
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
            <Text style={styles.page_name_text}>Doctors</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
          >
            <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-end", marginHorizontal: 15 }}>
          <Image style={styles.buttonImage} source={depImg} />
          <Text style={styles.depart_textNameStyle}>{department}</Text>
        </View>
        <ScrollView>
          <View style={styles.mainView}>


            {doctors.map((doctor, index) =>

              <View style={styles.doctor_view}>
                <View style={styles.doctor_img_view}>
                  <Image source={doctor.photo}
                    style={styles.doctor_img}
                  />
                </View>
                <View style={styles.doctor_info}>
                  <Text style={styles.doctor_name}
                    numberOfLines={1}
                  >
                    {doctor.name}
                  </Text>
                  <Text style={styles.doctor_section}>
                    {doctor.section}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                      <Text style={styles.doctor_section}>{doctor.rate}</Text>
                      <Ionicons name="star" size={20} color={COLORS.white} style={{ marginHorizontal: 3 }} />

                    </View>
                    <Text style={styles.doctor_status}>
                      Available now
                    </Text>

                  </View>
                  <Text style={styles.doctor_exp}>
                    ( {doctor.experience} years of experience )
                  </Text>
                  <TouchableOpacity style={styles.book_button}
                    onPress={() =>{

                    
                      navigation.navigate("DoctorPage",{
                        doctors_information:doctors[index]
                      })
                    }
                    }
                  >
                    <Text style={styles.book_text}>
                      View
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            )}


          </View>
          <View style={{ height: 80 }}></View>

        </ScrollView>

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
  mainView: {
    width: width,
    // height: height,
    // backgroundColor: "#0ff",
    alignItems: "center"
  },
  textStyle: {
    color: COLORS.white,
    fontSize: FONTS.h1,
    textAlign: "center",
    margin: MARGIN.lMargin,
    fontFamily: "Cabin-Regular"

  }
  ,
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
  buttonImage: {
    width: width / 11,
    height: height / 16,
    resizeMode: 'contain',
    marginHorizontal: MARGIN.lMargin
  },
  doctor_name: {
    fontFamily: "Cabin-Bold",
    fontSize: FONTS.h2,
    color: COLORS.white

  }
  ,
  doctor_section: {
    fontFamily: "Cabin-Regular",
    fontSize: FONTS.h4,
    color: COLORS.white
  },
  doctor_status: {
    fontFamily: "Cabin-Regular",
    fontSize: FONTS.h4,
    letterSpacing: 1.5,
    color: "#0f0",
    // color:"#f00"
  },
  doctor_exp: {
    fontFamily: "Cabin-Regular",
    color: COLORS.white,
    fontSize: FONTS.h6
  },
  book_button: {
    width: width / 3,
    height: height / 25,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: RADIUS.smRadius,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  book_text: {
    color: COLORS.mainColor,
    fontSize: FONTS.h5,
    fontFamily: "Alkatra-Bold",

  }
});
