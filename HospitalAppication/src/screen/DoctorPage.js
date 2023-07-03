import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,

} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { indigo50 } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
const { width, height } = Dimensions.get('window')


export default function DoctorPage(props) {
  const [notficationShow, setnotficationShow] = useState(false);
  const navigation = useNavigation();
  const [doctorInfo, setdoctorInfo] = useState([]);
  const [appointment, setappointment] = useState([]);

  useEffect(() => {
    if (props.route?.params?.doctors_information) {
      const doctorInfooo = props.route.params.doctors_information;
      const appoi = doctorInfooo.appointment;
      setdoctorInfo(doctorInfooo);
      setappointment(appoi);
    }
  }, []);


  // function Booking(index) {
  //   let times = appointment



  //   if (times[index].booking == true) {
  //     times[index].booking = false
  //   }
  //   else {
  //     for (let i = 0; i < times.length; i++) {
  //       times[i].booking = false
  //     } times[index].booking = true
  //   }
  //   console.log(times[index].booking + "  " + index)

  //   setappointment(times)



  // }
  const [time, settime] = useState('')
  const [disabledButton, setdisabledButton] = useState(true)
  const [index, setindex] = useState()
  const [disablTime, setdisablTime] = useState(false)

  function Booking(index) {
    let times = [...appointment];
    let checkChoose = false
    if (times[index].booking) {
      times[index].booking = false;
      setdisabledButton(true)
    } else {
      for (let i = 0; i < times.length; i++) {
        times[i].booking = false;
      }
      times[index].booking = true;
      var t = times[index].time
      checkChoose = true
      setindex(index)
    }


    setappointment(times);
    settime(t)
    // console.log(t)
    if (checkChoose) {
      setdisabledButton(false)
    }
  }


  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString();
  };

  const button = () => {
    setdisablTime(true)
    navigation.navigate("Done", {
      time: time,
      doctorName:doctorInfo.name
    })
    let times = [...appointment];
    times[index].disaple = true
    setappointment(times)



  }

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
        {
          /*
           {
                    id: 1,
                    name: "Dr : maria",
                    like: false,
                    rate: 1.0,
                    avilable: true,
                    experience: 5,
                    appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
                    appointment_home: ["12:00","1:00"],
        
                    section: "Brain",
                    photo: require('../img/1.png'),
                  }
          */
        }

        <View style={styles.doctor_view}>
          <View style={styles.doctor_img_view}>
            <Image source={doctorInfo.photo}
              style={styles.doctor_img}
            />
          </View>
          <View style={styles.doctor_info}>
            <Text style={styles.doctor_name}
              numberOfLines={1}
            >
              {doctorInfo.name}
            </Text>
            <Text style={styles.doctor_section}>
              {doctorInfo.section}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={styles.doctor_section}>{doctorInfo.rate}</Text>
                <Ionicons name="star" size={20} color={COLORS.white} style={{ marginHorizontal: 3 }} />

              </View>

              <Text style={styles.doctor_exp}>
                {doctorInfo.experience}
              </Text>
            </View>

            <Text style={styles.doctor_status}>
              Available now
            </Text>
          </View>
        </View>
        <View style={{ width: width / 1.1, marginVertical: MARGIN.lMargin, height: height / 2 }}>
          {/* <TouchableOpacity
          // onPress={()=>
          // showtimes()
          // }
          > */}
          <Text style={{
            color: COLORS.mainColor,
            textAlign: "right",
            fontSize: FONTS.h2,
            fontFamily: "Cabin-Regular",
            alignSelf: "flex-end"
          }}>Appointment Time</Text>
          <Text style={{
            color: COLORS.mainColor,
            textAlign: "right",
            fontSize: FONTS.h6,
            fontFamily: "Cabin-Regular",
            alignSelf: "flex-end"
          }}
          >Booking on : {getTomorrowDate()}</Text>

          {/* </TouchableOpacity> */}
          <ScrollView style={{ width: "100%" }}>

            <View style={styles.bookView}>
              {appointment.map((time, index) =>

              (
                <TouchableOpacity
                  style={[ styles.bookTypeView,
                  time.disaple?{ backgroundColor: "red" } : time.booking ? { backgroundColor: COLORS.mainColor } : { backgroundColor: "#ccc" } 
                ]}
                  disabled={time.disaple}
                  onPress={() =>
                    Booking(index)
                  }
                >
                  <Text style={{ color: COLORS.white, fontFamily: "Cabin-Regular", fontSize: FONTS.h3 }}>{time.place + " visit "}</Text>
                  <Text style={{ color: COLORS.white, fontFamily: "Cabin-Regular", fontSize: FONTS.h3 }}>{time.time}</Text>
                </TouchableOpacity>

              )
              )}

            </View>
            <View style={{ height: 50 }}></View>
          </ScrollView>

        </View>

        <TouchableOpacity style={[styles.BookButton, disabledButton ? { backgroundColor: "#ccc" } : { backgroundColor: COLORS.mainColor }]}
          disabled={disabledButton}
          onPress={() =>
            button()

          }
        >
          <Text style={{
            color: COLORS.white,
            fontSize: FONTS.h3,
            fontFamily: "Alkatra-Bold",
          }}>Book Appointment</Text>
        </TouchableOpacity>

      </View>
    </>
  )
  // }

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
    alignSelf: "center",
    marginVertical: 5
  },
  doctor_exp: {
    fontFamily: "Cabin-Regular",
    color: COLORS.white,
    fontSize: FONTS.h6
  },
  bookView: {
    width: "100%",
    marginVertical: MARGIN.lMargin,
    height: height / 1.5,
    // flexDirection: "row-reverse",
    alignItems: "center",
    // justifyContent: "space-between",
    // flexWrap:"wrap",
    // backgroundColor: "#00f"
  },
  bookTypeView: {
    width: width / 1.7,
    height: height / 16,
    // backgroundColor: COLORS.mainColor,
    borderRadius: RADIUS.mdRadius,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: MARGIN.lMargin,
    flexDirection: "row-reverse",
    padding: 10,
    flexWrap: "wrap"
  }
  ,
  BookButton: {
    width: width / 1.3,
    height: height / 12,
    backgroundColor: COLORS.mainColor,
    borderRadius: RADIUS.lgRadius,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: MARGIN.lMargin
  }
});

