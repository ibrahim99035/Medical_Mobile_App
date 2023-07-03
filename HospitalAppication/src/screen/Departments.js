import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  StatusBar
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')



export default function Departments(props) {
  const [Departments, SetDepartments] = useState(
    [
      {
        id: 1,
        name: "Brain section",
        img: require('../img/brain.png'),
        doctors: [
          {
            id: 1,
            name: "Dr : maria",
            like: false,
            rate: 1.0,
            avilable: true,
            experience: 5,
            appointment: [
              {
                place:'hospital',
                time:'9:00',
                booking:false,
                disaple:false,
              },
              {
                place:'hospital',

                time:'9:30',
                booking:false,
                disaple:false,
              },
              {
                place:'hospital',
                time:'10:00',
                booking:false
              },
              {
                place:'hospital',
                time:'10:30',
                booking:false
              },
              {
                place:'hospital',
                time:'11:00',
                booking:false
              },
              {
                place:'hospital',
                time:'11:30',
                booking:false
              },
              {
                place:'home',
                time:"12:00",
                booking:false
              },
              {
                place:'home',
                time:"1:00",
                booking:false
              },
            ],
         

            section: "Brain",
            photo: require('../img/1.png'),
          }
          ,
          {
            id: 2,
            name: "Dr : Abdelrhman",
            like: false,
            rate: 3.0,
            avilable: true,
            experience: 3,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            appointment_home: ["12:00","1:00"],
            section: "Brain",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 3,
            name: "Dr : Ibrahim",
            like: false,
            rate: 2.2,
            avilable: true,
            experience: 4,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            appointment_home: ["12:00","1:00"],
            section: "Brain",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 4,
            name: "Dr : mahmoud",
            like: false,
            rate: 3.5,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            appointment_home: ["12:00","1:00"],
            section: "Brain",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 5,
            name: "Dr : Salma",
            like: false,
            rate: 2.0,
            avilable: true,
            experience: 7,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            appointment_home: ["12:00","1:00"],
            section: "Brain",
            photo: require('../img/1.png'),

          }

        ]
      }
      ,
      {
        id: 2,
        name: "Cancer department",
        img: require('../img/cancer.png'),
        doctors: [
          {
            id: 1,
            name: "Dr : maria",
            like: false,
            rate: 1.0,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Cancer",
            photo: require('../img/1.png'),
          }
          ,
          {
            id: 2,
            name: "Dr : Abdelrhman",
            like: false,
            rate: 3.0,
            avilable: true,
            experience: 3,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Cancer",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 3,
            name: "Dr : Ibrahim",
            like: false,
            rate: 2.2,
            avilable: true,
            experience: 4,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Cancer",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 4,
            name: "Dr : mahmoud",
            like: false,
            rate: 3.5,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Cancer",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 5,
            name: "Dr : Salma",
            like: false,
            rate: 2.0,
            avilable: true,
            experience: 7,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Cancer",
            photo: require('../img/1.png'),

          }

        ]
      }
      ,
      {
        id: 3,
        name: "Internal Medicine",
        img: require('../img/abdomen.png'),

        doctors: [
          {
            id: 1,
            name: "Dr:maria",
            like: false,
            rate: 1.0,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Internal",
            photo: require('../img/1.png'),
          }
          ,
          {
            id: 2,
            name: "Dr : Abdelrhman",
            like: false,
            rate: 3.0,
            avilable: true,
            experience: 3,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Internal",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 3,
            name: "Dr : Ibrahim",
            like: false,
            rate: 2.2,
            avilable: true,
            experience: 4,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Internal",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 4,
            name: "Dr : mahmoud",
            like: false,
            rate: 3.5,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Internal",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 5,
            name: "Dr : Salma",
            like: false,
            rate: 2.0,
            avilable: true,
            experience: 7,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Internal",
            photo: require('../img/1.png'),

          }

        ]
      }
      ,
      {
        id: 4,
        name: "Nutrition department",
        img: require('../img/nutrition.png'),
        doctors: [
          {
            id: 1,
            name: "Dr:maria",
            like: false,
            rate: 1.0,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Nutrition",
            photo: require('../img/1.png'),
          }
          ,
          {
            id: 2,
            name: "Dr\ Abdelrhman",
            like: false,
            rate: 3.0,
            avilable: true,
            experience: 3,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Nutrition",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 3,
            name: "Dr:Ibrahim",
            like: false,
            rate: 2.2,
            avilable: true,
            experience: 4,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Nutrition",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 4,
            name: "Dr:mahmoud",
            like: false,
            rate: 3.5,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Nutrition",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 5,
            name: "Dr:Salma",
            like: false,
            rate: 2.0,
            avilable: true,
            experience: 7,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Nutrition",
            photo: require('../img/1.png'),

          }

        ]
      }
      ,
      {
        id: 5,
        name: "Chest section",
        img: require('../img/chest.png'),

        doctors: [
          {
            id: 1,
            name: "Dr:maria",
            like: false,
            rate: 1.0,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Chest",
            photo: require('../img/1.png'),
          }
          ,
          {
            id: 2,
            name: "Dr\ Abdelrhman",
            like: false,
            rate: 3.0,
            avilable: true,
            experience: 3,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Chest",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 3,
            name: "Dr:Ibrahim",
            like: false,
            rate: 2.2,
            avilable: true,
            experience: 4,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Chest",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 4,
            name: "Dr:mahmoud",
            like: false,
            rate: 3.5,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Chest",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 5,
            name: "Dr:Salma",
            like: false,
            rate: 2.0,
            avilable: true,
            experience: 7,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Chest",
            photo: require('../img/1.png'),

          }

        ]
      }
      ,
      {
        id: 6,
        name: "Dermatology department",
        img: require('../img/Dermatology.png'),

        doctors: [
          {
            id: 1,
            name: "Dr:maria",
            like: false,
            rate: 1.0,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Dermatology",
            photo: require('../img/1.png'),
          }
          ,
          {
            id: 2,
            name: "Dr\ Abdelrhman",
            like: false,
            rate: 3.0,
            avilable: true,
            experience: 3,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Dermatology",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 3,
            name: "Dr:Ibrahim",
            like: false,
            rate: 2.2,
            avilable: true,
            experience: 4,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Dermatology",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 4,
            name: "Dr:mahmoud",
            like: false,
            rate: 3.5,
            avilable: true,
            experience: 5,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Dermatology",
            photo: require('../img/2.png'),

          }
          ,
          {
            id: 5,
            name: "Dr:Salma",
            like: false,
            rate: 2.0,
            avilable: true,
            experience: 7,
            appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
            section: "Dermatology",
            photo: require('../img/1.png'),

          }

        ]
      }
      ,
      // {
      //   id: 7,
      //   name: "Dermatology ",
      //   img:require('../img/Dermatology.png'),

      //   doctors: [
      //     {
      //       id: 1,
      //       name: "Dr:maria",
      //       like: false,
      //       rate: 1.0,
      //       avilable: true,
      //       experience: 5,
      //       appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
      //       section: "Dermatology",
      //       photo: require('../img/1.png'),
      //     }
      //     ,
      //     {
      //       id: 2,
      //       name: "Dr\ Abdelrhman",
      //       like: false,
      //       rate: 3.0,
      //       avilable: true,
      //       experience: 3,
      //       appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
      //       section: "Dermatology",
      //       photo: require('../img/2.png'),

      //     }
      //     ,
      //     {
      //       id: 3,
      //       name: "Dr:Ibrahim",
      //       like: false,
      //       rate: 2.2,
      //       avilable: true,
      //       experience: 4,
      //       appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
      //       section: "Dermatology",
      //       photo: require('../img/2.png'),

      //     }
      //     ,
      //     {
      //       id: 4,
      //       name: "Dr:mahmoud",
      //       like: false,
      //       rate: 3.5,
      //       avilable: true,
      //       experience: 5,
      //       appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
      //       section: "Dermatology",
      //       photo: require('../img/2.png'),

      //     }
      //     ,
      //     {
      //       id: 5,
      //       name: "Dr:Salma",
      //       like: false,
      //       rate: 2.0,
      //       avilable: true,
      //       experience: 7,
      //       appointment: ["9:00", "9:30", "10:00", "10:30", "11:00"],
      //       section: "Dermatology",
      //       photo: require('../img/1.png'),

      //     }

      //   ]
      // }
    ]
  )

  const [notficationShow, setnotficationShow] = useState(false)

  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.mainColor}
      />
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
            <Text style={styles.page_name_text}>Departments</Text>
          </View>

          <TouchableOpacity
            onPress={()=>props.navigation.navigate('Home')}
          >
            <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>

        </View>



        <View style={styles.mainView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {Departments.map((section, index) =>

              <TouchableOpacity style={[styles.buttonStyle, index % 2 == 0 ? { marginLeft: 25, } : { marginLeft: 0 }]}
                onPress={() => {
                  navigation.navigate("AllDoctors", {
                    department_name: section.name,
                    dep_doctors: section.doctors,
                    dep_img: section.img,

                  })
                }}
              >
                <View style={styles.viewForText}>
                  <Text style={styles.textStyle}>{section.name}</Text>
                </View>
                <View style={styles.viewForIcon}>
                  <Image style={styles.buttonImage} source={section.img} />
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>

          <View style={{ height: 100 }}></View>

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
    fontSize: FONTS.h2,
    color: COLORS.mainColor,
    fontFamily: "Cabin-Regular"

  },
  mainView: {
    width: width,
    height: height,
    // backgroundColor: "#0ff",
    alignItems: "center"
  },
  textStyle: {
    color: COLORS.white,
    fontSize: FONTS.h1,
    textAlign: "center",
    marginHorizontal: MARGIN.lMargin,
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
    // padding: 10,
  }
  ,
  buttonImage: {
    width: width / 11,
    height: height / 16,
    resizeMode: 'contain',
    // borderRadius:RADIUS.mdRadius,
    marginHorizontal: MARGIN.lMargin,

  }
  ,
  viewForText: { width: "75%", alignItems: "flex-end" },
  viewForIcon: { width: "25%", alignItems: "center", },

});
