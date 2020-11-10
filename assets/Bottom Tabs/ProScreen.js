import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';
import bg from '../Images/bg2.jpg';
import chair from '../Images/chair.png';
import box from '../Images/box.png';
import home from '../Images/home.png';
import user from '../Images/user.png';
import wheel from '../Images/wheel.png';
import rupees from '../Images/rupees.png';
import radhika from '../Images/radhika.jpg';
import ristreto from '../Images/ristreto.jpg';
import hubber from '../Images/hubber.jpg';
import makeba from '../Images/makeba.jpg';
import bistro from '../Images/bistro.jpg';
import bigbite from '../Images/bigbite.jpg';
import condition from '../Images/terms-and-conditions.png';
var { width, height } = Dimensions.get("window");
class ProScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={bg} style={{ height: height * 0.80, width: width }}  >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }} >
                            <Text style={styles.text1}>Zomato Pro</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 50, }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={chair} style={styles.image} />
                                    <View>
                                        <Text style={styles.text2}>Up to 40% off on each dining</Text>
                                        <Text style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}>experience</Text>
                                    </View>
                                </View>


                                <View style={{ borderColor: 'lightgrey', borderWidth: 0.2, marginTop: 5 }}></View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={box} style={styles.image} />
                                    <View>
                                        <Text style={styles.text2}>Up to 30% extra off an food</Text>
                                        <Text style={{
                                            marginRight: 120, color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}>deliveries</Text>
                                    </View>
                                </View>
                                <View style={{ borderColor: 'white', borderWidth: 0.2, marginTop: 5 }}></View>


                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={home} style={styles.image} />
                                    <View>
                                        <Text style={styles.text2}>20,000+ restaurants welcome</Text>
                                        <Text style={{
                                            marginRight: 110, color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}>pro members</Text>
                                    </View>
                                </View>


                                <View style={{ borderColor: 'white', borderWidth: 0.2, marginTop: 5 }}></View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={user} style={styles.image} />
                                    <View>
                                        <Text style={styles.text2}>Jump the queue for faster food</Text>
                                        <Text style={{
                                            marginRight: 120, color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}>Deliveries</Text>
                                    </View>
                                </View>



                                <View style={{ borderColor: 'white', borderWidth: 0.2, marginTop: 5 }}></View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={rupees} style={styles.image} />
                                    <View>
                                        <Text style={styles.text2}>Get Your money back if you</Text>
                                        <Text style={{
                                            marginRight: 1, color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}>don't save more than ₹250</Text>
                                    </View>
                                </View>



                                <View style={{ borderColor: 'white', borderWidth: 0.2, marginTop: 5 }}></View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={wheel} style={styles.image} />
                                    <View>
                                        <Text style={styles.text2}>Zomato Pro Days - a two day</Text>
                                        <Text style={{
                                            marginRight: 1, color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}>festival with unbelivable offers</Text>
                                    </View>
                                </View>

                                <View style={{ borderColor: 'white', borderWidth: 0.2, marginTop: 5 }}></View>

                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={
                                () => this.props.navigation.navigate('')}>
                            <Text style={styles.ButtonText}> Become a pro</Text>
                            <Text style={styles.ButtonText}>₹250/3 months</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', marginTop: 30, }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', }}>i have an activation code</Text>
                        </View>
                    </ImageBackground>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <Text style={{ marginRight: 10, fontSize: 30, color: '#E23744', marginTop: 30 }}>pro</Text>
                        <Text style={{ fontSize: 30, marginTop: 30 }}>choices for everyone!</Text>
                    </View>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25 }}>Dining restaurants to choose from </Text>
                    </View>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ fontSize: 15, color: 'lightgrey', marginTop: 15 }}>Across Ahmedabad and 40 more cities </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View>
                            <View>
                                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                                    <View>
                                        <Image source={radhika} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Radhika's Authentic.....</Text>
                                            <Text style={{ marginLeft: 15, }}>4.4/5</Text>
                                            <Text style={{ marginLeft: 15, }}>Gurukul</Text>
                                        </View>


                                    </View>
                                    <View>
                                        <Image source={makeba} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Makeba The Lounge Cafe</Text>
                                            <Text style={{ marginLeft: 15, }}>4.4/5</Text>
                                            <Text style={{ marginLeft: 15, }}>Vastrapur</Text>
                                        </View>

                                    </View>
                                    <View>
                                        <Image source={hubber} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Hubber & Holly</Text>
                                            <Text style={{ marginLeft: 15, }}>4.6/5</Text>
                                            <Text style={{ marginLeft: 15, }}>BodakDev</Text>
                                        </View>

                                    </View>

                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                                    <View>
                                        <Image source={ristreto} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Ristretto Behind The Rods</Text>
                                            <Text style={{ marginLeft: 15, }}>4.4/5</Text>
                                            <Text style={{ marginLeft: 15, }}>NavrangPura</Text>
                                        </View>




                                    </View>
                                    <View>
                                        <Image source={bistro} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>The Red Bistro</Text>
                                            <Text style={{ marginLeft: 15, }}>4.6/5</Text>
                                            <Text style={{ marginLeft: 15, }}>BodakDev</Text>
                                        </View>

                                    </View>
                                    <View>
                                        <Image source={bigbite} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Big Bite Fast Food</Text>
                                            <Text style={{ marginLeft: 15, }}>4.2/5</Text>
                                            <Text style={{ marginLeft: 15, }}>Shukan</Text>
                                        </View>

                                    </View>

                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25 }}>Delivery restaurants to order from </Text>
                    </View>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={{ fontSize: 15, color: 'lightgrey', marginTop: 15 }}>Across Ahmedabad and 40 more cities </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View>
                            <View>
                                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                                    <View>
                                        <Image source={radhika} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Radhika's Authentic.....</Text>
                                            <Text style={{ marginLeft: 15, }}>4.4/5</Text>
                                            <Text style={{ marginLeft: 15, }}>Gurukul</Text>
                                        </View>


                                    </View>
                                    <View>
                                        <Image source={makeba} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Makeba The Lounge Cafe</Text>
                                            <Text style={{ marginLeft: 15, }}>4.4/5</Text>
                                            <Text style={{ marginLeft: 15, }}>Vastrapur</Text>
                                        </View>

                                    </View>
                                    <View>
                                        <Image source={hubber} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Hubber & Holly</Text>
                                            <Text style={{ marginLeft: 15, }}>4.6/5</Text>
                                            <Text style={{ marginLeft: 15, }}>BodakDev</Text>
                                        </View>

                                    </View>

                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                                    <View>
                                        <Image source={ristreto} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Ristretto Behind The Rods</Text>
                                            <Text style={{ marginLeft: 15, }}>4.4/5</Text>
                                            <Text style={{ marginLeft: 15, }}>NavrangPura</Text>
                                        </View>




                                    </View>
                                    <View>
                                        <Image source={bistro} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>The Red Bistro</Text>
                                            <Text style={{ marginLeft: 15, }}>4.6/5</Text>
                                            <Text style={{ marginLeft: 15, }}>BodakDev</Text>
                                        </View>

                                    </View>
                                    <View>
                                        <Image source={bigbite} style={styles.image2} />
                                        <View>
                                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15, }}>Big Bite Fast Food</Text>
                                            <Text style={{ marginLeft: 15, }}>4.2/5</Text>
                                            <Text style={{ marginLeft: 15, }}>Shukan</Text>
                                        </View>

                                    </View>

                                </View>
                            </View>
                        </View>
                    </ScrollView>


                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 12, marginTop: 10 }}>
                            Frequently Asked Questions
                        </Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 12, }}>Benefits on Dining Out</Text>
                        <Text style={{ fontSize: 10, color: 'grey', marginLeft: 12, }}>12 answers</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 12, }}>Benefits on Delivery </Text>
                        <Text style={{ fontSize: 10, color: 'grey', marginLeft: 12, }}>8 answers</Text>
                    </View>
                    <View style={styles.view}>
                        <Image source={condition} style={{ marginLeft: 12, marginTop: 5 }} />
                        <View  >
                            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginLeft: 12, marginTop: 5 }}>Terms And Conditions</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>


        );
    }
}
export default ProScreen;
const styles = StyleSheet.create({
    text1: {
        fontSize: 30,
        color: 'white',
        marginTop: 60,
        alignSelf: 'center'



    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        width: width * 0.9,
        height: height * 0.090,
        backgroundColor: '#E23744',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    ButtonText: {
        color: 'white',
        fontSize: width * 0.040,
        fontWeight: 'bold',

    },
    image: {
        marginRight: 10,
    },

    image2: {
        width: width * 0.45,
        height: width * 0.30,
        resizeMode: 'cover',
        marginHorizontal: 15,
        borderRadius: 10,
        marginVertical: 15,
    },
    view: {
        flexDirection: 'row',
        borderWidth: 1,
        height: height * 0.06,
        borderColor: 'lightgrey',
        borderRadius: 2,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 9,
        marginBottom: 50
    },
    view1: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
        width: width * 0.5,
        marginLeft: 12,
        marginTop: 10
    },

});