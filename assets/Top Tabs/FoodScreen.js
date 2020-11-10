import React, { Component } from 'react';
import { View, ImageBackground, FlatList, Image, Text, StyleSheet, TextInput, Button, StatusBar, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';
import paneerImage from '../Images/Paneer.jpg';
import dosaImage from '../Images/dosa.jpg';
import pizzaImage from '../Images/pizza.jpg';
import chattImage from '../Images/chaat.jpg';
import bowlImage from '../Images/bowl.jpg';
import idliImage from '../Images/idli.jpg';

import samosaImage from '../Images/samosa.jpg';
import teaImage from '../Images/tea.jpg';
import cakeImage from '../Images/cake.jpg';
import sandwichImage from '../Images/sandwich.jpg';
import thaliImage from '../Images/thali.jpg';
import dalImage from '../Images/dal.jpg';

import offers1 from '../Images/Offers.jpg';
import offers2 from '../Images/offers2.jpg';
import offers3 from '../Images/offers3.jpg';
import gwalia from '../Images/gwalia.png';
import dange from '../Images/dange.png';
import dominoz from '../Images/dominoz.png';
var { width, height } = Dimensions.get("window");




class FoodScreen extends Component {


    constructor() {
        super();
        this.state = {
            content: false,

        }
    }
    componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
    }

    render() {
        return (

            <ScrollView>
                <View style={{ flex: 1, }}>
                    <View >
                        <Image style={{
                            width: width,
                            height: height * 0.40,
                            resizeMode: 'contain',
                            bottom: 20,
                        }}
                            source={require('../Images/foodscreen01.jpg')}
                        />
                    </View>
                    <View style={{ bottom: 50 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', paddingLeft: 10, }}>Your neighbours are ordering....</Text>
                    </View>
                    <View style={{ width: width, flexDirection: 'row', bottom: 40, justifyContent: 'center' }} >
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={paneerImage} style={styles.image} />
                            <View style={styles.text}>
                                <Text >Paneer</Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={dosaImage} style={styles.image} />
                            <View style={styles.text}>
                                <Text >Dosa</Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={pizzaImage} style={styles.image} />
                            <View style={styles.text}>
                                <Text >Pizza</Text>
                            </View>
                        </View>


                    </View>

                    <View style={{ width: width, flexDirection: 'row', bottom: 50, justifyContent: 'center' }} >
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={chattImage} style={styles.image} />
                            <View style={styles.text}>
                                <Text >Chatt</Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={bowlImage} style={styles.image} />
                            <View style={styles.text}>
                                <Text >Bowl</Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',
                        }}>
                            <Image source={idliImage} style={styles.image} />
                            <View style={styles.text}>
                                <Text >Idli</Text>
                            </View>
                        </View>


                    </View>

                    <View>
                        {
                            this.state.content ?
                                <View>
                                    <View style={{ width: width, bottom: 50, flexDirection: 'row', justifyContent: 'center' }} >
                                        <View style={{
                                            alignItems: 'center',

                                        }}>
                                            <Image source={samosaImage} style={styles.image} />
                                            <View style={styles.text}>
                                                <Text >samosa</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',

                                        }}>
                                            <Image source={thaliImage} style={styles.image} />
                                            <View style={styles.text}>
                                                <Text >Thali</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',

                                        }}>
                                            <Image source={dalImage} style={styles.image} />
                                            <View style={styles.text}>
                                                <Text >Dal</Text>
                                            </View>
                                        </View>




                                    </View>
                                    <View style={{ width: width, bottom: 50, flexDirection: 'row', justifyContent: 'center' }}>
                                        <View style={{
                                            alignItems: 'center',

                                        }}>
                                            <Image source={sandwichImage} style={styles.image} />
                                            <View style={styles.text}>
                                                <Text >Sandwich</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',

                                        }}>
                                            <Image source={cakeImage} style={styles.image} />
                                            <View style={styles.text}>
                                                <Text >Cake</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',

                                        }}>
                                            <Image source={teaImage} style={styles.image} />
                                            <View style={styles.text}>
                                                <Text >Tea</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>

                                : null
                        }
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.componentHideAndShow()}>


                        {
                            this.state.content ?
                                <View style={{ flexDirection: 'row' }}>

                                    <Text > See Less</Text>
                                    <FontAwesome style={{ fontSize: width * 0.040, marginLeft: 10 }} icon={SolidIcons.arrowUp} />
                                </View>
                                :
                                <View style={{ flexDirection: 'row' }}>

                                    <Text > See More </Text>
                                    <FontAwesome style={{ fontSize: width * 0.040, marginLeft: 10 }} icon={SolidIcons.arrowDown} />
                                </View>
                        }

                    </TouchableOpacity>
                    <View style={{ bottom: 70, left: 12 }}>
                        <Text style={{ color: 'lightgrey' }}>
                            LATEST OFFERS
                       </Text>
                    </View>

                    <View style={{ width: width, bottom: 50, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={offers1} style={styles.offers} />

                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={offers2} style={styles.offers} />

                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={offers3} style={styles.offers} />


                        </View>
                    </View>
                    <View style={{ bottom: 30, left: 12 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>
                            Top brands in spotlight
                       </Text>
                    </View>
                    <View style={{ width: width, bottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={gwalia} style={styles.image} />
                            <View style={styles.brandtext}>
                                <Text >Gwalia Sweets</Text>
                                <Text style={{ color: 'lightgrey' }} >25 Mins</Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={dange} style={styles.image} />
                            <View style={styles.brandtext}>
                                <Text >Dangee Dums</Text>
                                <Text style={{ color: 'lightgrey' }}>45 Mins</Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={dominoz} style={styles.image} />
                            <View style={styles.brandtext}>
                                <Text > Domino's Pizza</Text>
                                <Text style={{ color: 'lightgrey' }}> 35 Mins</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ bottom: 30, left: 12 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>
                            Restaurants around you
                       </Text>
                    </View>
                    <View style={{ width: width, flexDirection: 'column', bottom: 20, justifyContent: 'center' }} >
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={paneerImage} style={styles.image2} />
                            <View style={styles.text2}>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 17, marginTop: 5, fontSize: 15 }}>Mulidhar Restaurant</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>3.3/5</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ marginLeft: 17, marginTop: 5, fontSize: 15 }}> North Indian,Gujarati and Chinese</Text>
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
                            <Image source={dosaImage} style={styles.image2} />
                            <View style={styles.text2}>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 17, marginTop: 5, fontSize: 15 }}>Silver Point Restaurant</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>3.7/5</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ marginLeft: 17, marginTop: 5, fontSize: 15 }}> North Indian,Gujarati and Chinese</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>₹ 270 for one</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            <Image source={pizzaImage} style={styles.image2} />
                            <View style={styles.text2}>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ fontWeight: 'bold', marginLeft: 17, marginTop: 5, fontSize: 15 }}>Royal Rajasthan Restaurant</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>3.8/5</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, width: width, }}>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={{ marginLeft: 17, marginTop: 5, fontSize: 15 }}> North Indian,Gujarati and Chinese</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 17, marginTop: 5, }}>₹ 290 for one</Text>
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
export default FoodScreen;

const styles = StyleSheet.create({
    image: {
        width: width * 0.270,
        height: width * 0.30,
        resizeMode: 'cover',
        marginHorizontal: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        bottom: 17,
        width: width * 0.270,
        backgroundColor: 'lightgrey',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dcdcdc',
        borderColor: 'grey',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: width,
        height: height * 0.04,
        marginBottom: 30,
        bottom: 50,



    },
    offers: {
        width: width * 0.290,
        height: width * 0.30,
        resizeMode: 'cover',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    brandtext: {
        bottom: 17,
        width: width * 0.270,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
    },
    image2: {
        width: width * 0.9,
        height: width * 0.60,
        resizeMode: 'cover',
        marginHorizontal: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginVertical: 15,
    },
    text2: {
        bottom: 17,
        width: width,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 5,


    },
})