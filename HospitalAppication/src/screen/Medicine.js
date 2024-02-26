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
    FlatList
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { COLORS, MARGIN, FONTS, ICONSSIZE, PADDING, RADIUS } from '../Constants/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window')
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';


export default function Medicine() {

    const [notficationShow, setnotficationShow] = useState(false)
  

    const navigation = useNavigation();

    const [medicine, Setmedicine] = useState(
        [
            {
                id: 1,
                name: "congestal",
                view:true,
                uses: "Analgesic, antihistamine and decongestant",
                dec: "Paracetamol, chlorpheniramine, and pseudoephedrine are frequently used for cold and relief of associated symptoms, as well as hay fever and various allergies. The following are the most common symptoms that the drug reduces:\nHeadache.\nSinus pain and congestion.\n Nasal congestion.\nsneeze.\nWatery eyes.\nRunny nose.\nHigh temperature.\nItchy nose or throat.",
                change: false,
                img: require('../img/congestal.png')
            }
            ,
            {
                id: 2,
                name: "profen",
                view:true,
                uses: "Analgesic, antihistamine and decongestant",
                dec: "Paracetamol, chlorpheniramine, and pseudoephedrine are frequently used for cold and relief of associated symptoms, as well as hay fever and various allergies. The following are the most common symptoms that the drug reduces:\nHeadache.\nSinus pain and congestion.\n Nasal congestion.\nsneeze.\nWatery eyes.\nRunny nose.\nHigh temperature.\nItchy nose or throat.",
                change: false,

                img: require('../img/congestal.png')
            }
            ,
            {
                id: 3,
                name: "prexamol",
                view:true,
                uses: "Analgesic, antihistamine and decongestant",
                dec: "Paracetamol, chlorpheniramine, and pseudoephedrine are frequently used for cold and relief of associated symptoms, as well as hay fever and various allergies. The following are the most common symptoms that the drug reduces:\nHeadache.\nSinus pain and congestion.\n Nasal congestion.\nsneeze.\nWatery eyes.\nRunny nose.\nHigh temperature.\nItchy nose or throat.",
                change: false,

                img: require('../img/congestal.png')
            }
            ,
            {
                id: 4,
                name: "congestal",
                view:true,
                change: false,
                uses: "Analgesic, antihistamine and decongestant",
                dec: "Paracetamol, chlorpheniramine, and pseudoephedrine are frequently used for cold and relief of associated symptoms, as well as hay fever and various allergies. The following are the most common symptoms that the drug reduces:\nHeadache.\nSinus pain and congestion.\n Nasal congestion.\nsneeze.\nWatery eyes.\nRunny nose.\nHigh temperature.\nItchy nose or throat.",


                img: require('../img/congestal.png')
            }
        ]
    )
    const [changeIcon, setchangeIcon] = useState(false)
    const [indexglobal, Setindexglobal] = useState()

    // const description = (index) => {
    //     let med = medicine
    //     if (med[index].change == false) {
    //         med[index].change = true
    //         // Setindexglobal(index)

    //         setchangeIcon(true)
    //     }
    //     else {
    //         med[index].change = false
    //         setchangeIcon(false)
    //         // Setindexglobal(index)
    //     }
    //     Setmedicine(med)
    // }

    const description = (index) => {
        let med = [...medicine]; // Create a copy of the medicine array to avoid mutating state directly
        if (med[index].change === false) {
            med[index].change = true;
            // Setindexglobal(index);
            setchangeIcon(true); // Assuming setChangeIcon is the correct state setter function
        } else {
            med[index].change = false;
            setchangeIcon(false); // Assuming setChangeIcon is the correct state setter function
            // Setindexglobal(index);
        }
        Setmedicine(med); // Assuming setMedicine is the correct state setter function
    }
    
    

    const [IconSearch, setIconSearch] = useState(true)
    const [searchKey, setsearchKey] = useState("")

    function Search(text) {

        let list = medicine
        // let count = 0
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(text.toUpperCase())) {
                list[i].view = true

            }
            else {
                list[i].view = false
                // count++
            }
        }

        // if (count == list.length) {
        //     this.state.animation_display = true
        // }


        // if (count != list.length) {
        //     this.state.animation_display = false

        // }



        Setmedicine(list)
        // count = 0
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
                        <Text style={styles.page_name_text}>Medicines</Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                    >
                        <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                </View>

                {IconSearch ? (
                    <>
                        <Animatable.View
                            animation='slideInLeft' >
                            <TouchableOpacity
                                onPress={() => {

                                    setIconSearch(false);
                                }}>
                                <Ionicons name='ios-search-circle' size={60} color={COLORS.mainColor} />
                            </TouchableOpacity>

                        </Animatable.View>
                    </>
                ) : (
                    <Animatable.View style={styles.SearchTextView}
                        animation='flipInY' >
                        {/* 'fadeOutLeft' | */}
                        <TextInput style={styles.SearchTextInput}
                            placeholder={"Find a medicine"}
                            placeholderTextColor={COLORS.grayFont}
                            onChangeText={(value) => {

                                Search(value)
                                setsearchKey(value)
                            }}

                            value={searchKey} />
                        <TouchableOpacity onPress={() => {
                            setIconSearch(true);
                        }}>

                            <Ionicons name='search' size={ICONSSIZE.xlIcon} color={COLORS.mainColor} />
                        </TouchableOpacity>

                    </Animatable.View>
                )}


                <View style={styles.continar_medicine}>
                    <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={{ width: width / 1.07 }}>

                        {medicine.map((item, index) =>
                        (
                            item.view?(          <>
                                <View style={{ width: "100%", alignItems: "center", marginVertical: MARGIN.lMargin }}>
                                    <View style={styles.medicine_view}>
                                        <View style={{
                                            flexDirection: "row-reverse", justifyContent: "space-between",
                                            alignItems: "center", width: "100%", height: height / 11, marginTop: 5
                                        }}>

                                            <Image source={item.img}
                                                style={styles.med_photo}
                                            />
                                            <Text style={{
                                                fontSize: FONTS.h1,
                                                // backgroundColor: "#0f0f",
                                                color: COLORS.white,
                                                fontFamily: "Cabin-Bold",
                                                marginLeft: 50,


                                            }}>
                                                {item.name}
                                            </Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row", justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>

                                            <TouchableOpacity style={{ alignSelf: "flex-start" }}
                                                onPress={() =>

                                                    description(index)




                                                }
                                            >
                                                <Ionicons name={item.change ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} size={30} color="#fff" />
                                            </TouchableOpacity>

                                            <Text style={{ width: width / 1.3, fontSize: 18, margin: 5, fontFamily: "Cabin-Regular", color: COLORS.white }}
                                                numberOfLines={1}
                                            >
                                                {item.uses}
                                            </Text>
                                        </View>

                                    </View>

                                    {item.change ?
                                        <Animatable.View
                                            animation={"fadeIn"}
                                        >

                                            <View style={styles.medicine_dec}>
                                                <Text style={styles.text_dec}>
                                                    {item.dec}
                                                </Text>
                                            </View>



                                        </Animatable.View>
                                        :
                                       null

                                    }

                                </View>
                            </>):(
                                null
                            )
                  
                        )
                        )}
                        <View style={{ height: 160 }}></View>

                    </ScrollView>



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


    }
    ,
    SearchTextView: {
        backgroundColor: COLORS.light,
        width: width / 1.1,
        // height: height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.smRadius,
        marginVertical: MARGIN.lMargin,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.mainColor

    },
    SearchTextInput: {
        width: width / 1.4,
        // height: height / 17,
        alignItems: "center",
        // alignSelf: "center",
        color: "#000",
        // justifyContent: "flex-end",
        fontFamily: "Alkatra-Bold",
        // borderWidth: 2,
        paddingHorizontal: PADDING.sPadding,
        fontSize: FONTS.h4,
        // backgroundColor:"#00f"

    },
    continar_medicine: {
        width: width / 1.07,
        // backgroundColor: "#00f",
        // justifyContent: "center",
        alignItems: "center",
        height: height
    }
    ,
    medicine_view: {
        width: "100%",
        height: height / 6.7,
        backgroundColor: COLORS.mainColor,
        borderRadius: RADIUS.smRadius,
        padding: 5,
        // marginVertical: MARGIN.lMargin
        // marginBottom: -10
    }
    ,


    med_photo: {
        width: width / 3,
        height: height / 9,
        // resizeMode: "contain",
        borderRadius: 10,
        margin: 10
        // backgroundColor:"#00f"
    },
    medicine_dec: {
        width: width / 1.14,
        // height: 150,
        backgroundColor: "#B0DAFFdd",
        borderBottomEndRadius: RADIUS.smRadius,
        borderBottomStartRadius: RADIUS.smRadius,
        borderColor: COLORS.mainColor,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5

    }
    ,
    text_dec: {
        // width: "97%",
        marginVertical: MARGIN.lMargin,
        fontSize: FONTS.h5,
        color: COLORS.black,
        letterSpacing: 1.1,
        alignSelf: "center",
        fontFamily: "Cabin-Regular",
        paddingHorizontal: PADDING.lPadding
    }
});
