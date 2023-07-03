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


export default function Illness() {

    const [notficationShow, setnotficationShow] = useState(false)
    const [IconSearch, setIconSearch] = useState(true)
    const [searchKey, setsearchKey] = useState("")

    const navigation = useNavigation();


    const [illnesses, Setillnesses] = useState(
        [
            {
                name: "Flu",
                reason: "Caused by influenza virus",
                recovery: "Get plenty of rest, drink fluids, and take over-the-counter pain relievers as needed. Antiviral medications may also be prescribed.",
                view: true
            },
            {
                name: "Migraine",
                reason: "Caused by abnormal brain activity",
                recovery: "Avoid triggers such as stress, certain foods, and lack of sleep. Over-the-counter pain relievers, prescription medications, and relaxation techniques may help."
                , view: true

            },
            {
                name: "Asthma",
                reason: "Chronic inflammation of the airways",
                view: true,
                recovery: "Avoid triggers such as smoke, dust, and exercise-induced asthma. Inhalers and other medications may be prescribed to manage symptoms."
            },
            {
                name: "Diabetes",
                view: true,
                reason: "Insufficient insulin production or insulin resistance",
                recovery: "Monitor blood sugar levels regularly, eat a healthy diet, exercise regularly, and take medications as prescribed by a healthcare provider."
            },
            {
                name: "Depression",
                view: true,
                reason: "Caused by a combination of genetic, biological, environmental, and psychological factors",
                recovery: "Treatment may include therapy, medication, lifestyle changes, and support from family and friends."
            },
            {
                name: "Cancer",
                view: true,
                reason: "Abnormal cell growth",
                recovery: "Treatment may include surgery, radiation, chemotherapy, and other medications. Support from family and friends can also be helpful."
            },
            {
                name: "Heart disease",
                view: true,
                reason: "Caused by a buildup of plaque in the arteries",
                recovery: "Treatment may include lifestyle changes, medication, and surgery. Regular check-ups with a healthcare provider are also important."
            },
            {
                name: "Arthritis",
                view: true,
                reason: "Inflammation of the joints",
                recovery: "Treatment may include medication, exercise, and physical therapy. Surgery may be necessary in severe cases."
            },
            {
                name: "Allergies",
                view: true,
                reason: "Reaction to allergens such as pollen, dust, and animal dander",
                recovery: "Avoid triggers, take over-the-counter antihistamines or other medications, and in severe cases, allergy shots may be recommended."
            },
            {
                name: "Obesity",
                view: true,
                reason: "Excess body fat",
                recovery: "Lifestyle changes such as eating a healthy diet, exercising regularly, and getting enough sleep can help. In some cases, medication or surgery may be recommended."
            }
        ]
    )


    function Search(text) {

        let list = illnesses
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



        Setillnesses(list)
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
                        <Text style={styles.page_name_text}>Illness</Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                    >
                        <Ionicons name="arrow-back-circle-sharp" color={COLORS.mainColor} size={40} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                </View>

                {
                    IconSearch ? (
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
                                value={searchKey}
                                onChangeText={(value) => {
                                    // makesearch(value)

                                    Search(value)
                                    setsearchKey(value)
                                }}

                            />
                            <TouchableOpacity onPress={() => {
                                setIconSearch(true);
                            }}>

                                <Ionicons name='search' size={ICONSSIZE.xlIcon} color={COLORS.mainColor} />
                            </TouchableOpacity>

                        </Animatable.View>
                    )
                }

                <View style={styles.mainView}>
                    <ScrollView showsVerticalScrollIndicator={false}>


                        {illnesses.map((ill, index) => 
                            ill.view ? (
                            <Animatable.View
                                animation={index % 2 == 0 ? ("slideInLeft") : ("slideInUp")}
                            >
                                <TouchableOpacity style={styles.buttonStyle}
                                    onPress={() =>
                                        navigation.navigate("descriptionIllness", {

                                            ill_name: ill.name,
                                            ill_reason: ill.reason,
                                            ill_recover: ill.recovery

                                        })
                                    }
                                >

                                    <Text style={styles.textStyle}>{ill.name}</Text>


                                </TouchableOpacity>
                            </Animatable.View>
                            ) : (
                                null
                            )
                        


                        )}
                        <View style={{ height: 50 }}></View>
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
        height: height / 12,
        backgroundColor: COLORS.mainColor,
        marginVertical: MARGIN.xlMargin,
        borderRadius: RADIUS.smRadius,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        flexDirection: "row",
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
});
