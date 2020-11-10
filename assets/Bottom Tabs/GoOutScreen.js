import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';
import offers7 from '../Images/offers7.jpg';
import collection1 from '../Images/collection1.jpg';
import collection2 from '../Images/collection2.jpg';
import collection3 from '../Images/collection3.jpg';
import fusion from '../Images/fusion.jpg';
import choclate from '../Images/choclate.jpg';
import bigbite from '../Images/bigbite.jpg';
var { width, height } = Dimensions.get("window");
class GoOutScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white', flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginLeft: 15, marginTop: 10 }}>
                            <FontAwesome style={{ fontSize: width * 0.060, }} icon={SolidIcons.home} />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ fontWeight: 'bold' }}>Home</Text>
                            <Text>Venugopal Socitey</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', marginRight: 10, }}>
                            <FontAwesome style={{ fontSize: width * 0.060, }} icon={SolidIcons.qrcode} />
                        </View>

                    </View>
                    <View style={styles.search}>
                        <View style={{ flexDirection: 'row', marginTop: 1, marginRight: 10, marginLeft: 10 }}>
                            <FontAwesome style={{ fontSize: width * 0.040, }} icon={SolidIcons.search} />
                        </View>

                        <View>
                            <TextInput
                                placeholder="Search for restaurants, cuisiness..."
                                onChangeText={(value) => this.setState({ search: value })}
                                keyboardType={"default"}
                            />


                        </View>
                    </View>

                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 20, marginBottom: 10 }}>
                            <Text style={styles.text}>Filters</Text>
                            <Text style={styles.text}>Zomato Pro</Text>
                            <Text style={styles.text}>Contactless Dining</Text>
                            <Text style={styles.text}>Nearest To Me</Text>
                            <Text style={styles.text}>Rating: 4.5+</Text>
                            <Text style={styles.text}>Book a table</Text>
                        </View>
                    </ScrollView>

                    <View>
                        <Image source={offers7} style={styles.image} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, width: width }}>
                        <View>
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>
                                Collections
                        </Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', marginRight: 10, }}>
                            <Text style={{ fontSize: 15, color: '#E23744' }}>
                                see all
                        </Text>
                        </View>
                    </View>

                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                            <View>
                                <ImageBackground source={collection1} style={styles.image2} >
                                    <Text style={styles.text2}>Trending This Week</Text>
                                    <Text style={styles.text3}>20 Places</Text>
                                </ImageBackground>

                            </View>
                            <View>
                                <ImageBackground source={collection2} style={styles.image2} >
                                    <Text style={styles.text2}>Best of Ahmedabad</Text>
                                    <Text style={styles.text3}>63 Places</Text>
                                </ImageBackground>
                            </View>
                            <View>
                                <ImageBackground source={collection3} style={styles.image2} >
                                    <Text style={styles.text2}>Live Sport Screen</Text>
                                    <Text style={styles.text3}>12 Places</Text>
                                </ImageBackground>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={{ width: width, flexDirection: 'column', bottom: 20, justifyContent: 'center' }} >
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={bigbite} style={styles.image3} />
                            <View style={styles.text4}>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 17, marginTop: 5, fontSize: 15 }}>Big Bite Fast Food</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>3.3/5</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ marginLeft: 17, marginTop: 5, fontSize: 15 }}> Sandwich,Burger,Fast Food...</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>₹ 200 for one</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={fusion} style={styles.image3} />
                            <View style={styles.text4}>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 17, marginTop: 5, fontSize: 15 }}>The Fusion Pizza</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>3.8/5</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ marginLeft: 17, marginTop: 5, fontSize: 15 }}>Pizza, Fast Food, Beverages</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>₹ 500 for Two</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={choclate} style={styles.image3} />
                            <View style={styles.text4}>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 17, marginTop: 5, fontSize: 15 }}>The Choclate Room</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>3.4/5</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ marginLeft: 17, marginTop: 5, fontSize: 15 }}>Cafe, Fast Food</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>₹ 700 for Two</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 4,
        marginTop: 20,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    search: {
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 25,
        marginLeft: 16,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.060,

    },
    text: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        color: 'grey',

    },
    image: {
        width: width * 0.9,
        height: width * 0.30,
        resizeMode: 'cover',
        marginHorizontal: 15,
        borderRadius: 10,
        marginVertical: 15,
    },
    image2: {
        width: width * 0.35,
        height: width * 0.60,
        resizeMode: 'cover',
        marginHorizontal: 15,
        borderRadius: 10,
        marginVertical: 15,
    },
    text2: {
        color: 'white',
        alignItems: 'flex-end',
        flex: 1,
        marginTop: 200,
        marginLeft: 5,
        fontWeight: 'bold',

    },
    text3: {
        color: 'white',
        alignItems: 'flex-end',
        marginLeft: 5,
        flex: 1,
        fontWeight: 'bold',

    },
    image3: {
        width: width * 0.9,
        height: width * 0.60,
        resizeMode: 'cover',
        marginHorizontal: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginVertical: 15,
    },
    text4: {
        bottom: 17,
        width: width,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 5,


    },
})



export default GoOutScreen;