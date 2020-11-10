import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';
import { SliderBox } from "react-native-image-slider-box";
import market5 from '../Images/market5.png';
var { width, height } = Dimensions.get("window");
class MarketScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../Images/market1.jpg'),
                require('../Images/market2.jpg'),
                require('../Images/market3.jpg'),
                require('../Images/market4.jpg'),          // Local image
            ]
        };
    }
    render() {


        return (

            <ScrollView >
                <View>
                    <View style={{ marginLeft: 10, }}>
                        <Text style={{ backgroundColor: '#fa8072', color: 'white', fontSize: 15 }}>
                            DAILY ESSENTIALS, DELIVERED QUICKLY
                        </Text>
                    </View>

                    <View style={{ marginTop: 5 }}>
                        <SliderBox images={this.state.images} />
                    </View >
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View>
                            <Text style={{ marginLeft: 11, marginTop: 15, fontWeight: 'bold', fontSize: 20 }}>
                                Partner Stores near You
                        </Text>
                        </View>
                        <View style={{ marginTop: 21, marginRight: 15, marginLeft: 10, justifyContent: 'flex-end', flex: 1, flexDirection: 'row', }}>
                            <FontAwesome style={{ fontSize: width * 0.050, }} icon={SolidIcons.search} />
                        </View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View>
                            <Image source={market5} style={styles.image} />
                        </View>
                        <View>
                            <Text style={{ marginTop: 11, fontWeight: 'bold', fontSize: 20, }}>
                                Shri Ganesh EnterPrise
                           </Text>
                            <Text>
                                Rakhial
                           </Text>
                            <Text>
                                Staples
                           </Text>
                            <Text>
                                72 mins
                           </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>



        );
    }
}
export default MarketScreen;

const styles = StyleSheet.create({
    image: {
        width: width * 0.250,
        height: width * 0.25,
        resizeMode: 'cover',
        marginHorizontal: 10,
        marginTop: 10,

    },
})