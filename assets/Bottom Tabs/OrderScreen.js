import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';
import TopTabScreen from '../Top Tabs/TopTabScreen';

var { width, height } = Dimensions.get("window");
export default class OrderScreen extends Component {
    render() {
        return (
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


                <TopTabScreen />

            </View>
        )
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
})