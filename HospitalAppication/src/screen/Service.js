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


export default function Service(props) {
  const [notficationShow, setnotficationShow] = useState(false);
  const navigation = useNavigation();


  useEffect(() => {


  }, []);


  const [Analysis, setAnalysis] = useState([
    {
      name: "Diabetes Illness",
      section: "Lab 1"

    },
    {
      name: "Covid-19  Illness"
      ,
      section: "Lab 2"
    },
    {
      name: "Liver-Function Illness"
      ,
      section: "Lab 2"
    },
    {
      name: "Kidney-Function Illness"
      ,
      section: "Lab 3"
    },
    {
      name: "Blood-Fluidity Illness"
      ,
      section: "Lab 4"
    },
    {
      name: "Blood-Diseases"
      ,
      section: "Lab 5"
    }, {
      name: "Hormone Illness"
      ,
      section: "Lab 6"
    },
  ])




  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString();
  };



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
            <Text style={styles.page_name_text}>Analysis</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
          >
            <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>

        </View>



        <View style={styles.mainView}>
          <ScrollView showsVerticalScrollIndicator={false}>


            {Analysis.map((analysis, index) =>

              // <Animatable.View
              //   animation={index % 2 == 0 ? ("slideInLeft") : ("slideInUp")}
              // >
              <TouchableOpacity style={styles.buttonStyle}
                onPress={() =>
                  navigation.navigate("DoneAnalysis", {

                    ana_name: analysis.name,
                    ana_place: analysis.section

                  })
                }
              >

                <Text style={styles.textStyle}>{analysis.name}</Text>


              </TouchableOpacity>
              // </Animatable.View>




            )}
            <View style={{ height: 100 }}></View>
          </ScrollView>

        </View>


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
  mainView: {
    width: width / 1.3,
    height: height,
    // backgroundColor: "#0ff",
    alignItems: "center",
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
    width: width / 1.5,
    height: height / 11,
    backgroundColor: COLORS.mainColor,
    marginVertical: MARGIN.xlMargin,
    borderRadius: RADIUS.smRadius,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    flexDirection: "row",
    // padding: 10,
  }
});

