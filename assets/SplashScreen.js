import React, { Component } from 'react';
import { View, ImageBackground, Text, Dimensions } from 'react-native';

var { width, height } = Dimensions.get("window");

export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        setTimeout(() => {
            this.props.navigation.navigate("SignUpScreen");

        }, 2000);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E23744' }} >
                <Text style={{ fontSize: width * 0.100, color: 'white', fontWeight: 'bold', }}>
                    Zomato
                </Text>

            </View>

        );
    }
}