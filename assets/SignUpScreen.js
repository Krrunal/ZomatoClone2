import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';

var { width, height } = Dimensions.get("window");
export default class SignUpScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#E23744', flex: 1, alignItems: 'center', }}>

                    <Image
                        source={require('./Images/signup.png')}
                    />
                    <View style={styles.input}>
                        <View style={{ flexDirection: 'row', top: 1 }}>
                            <FontAwesome icon={SolidIcons.flag} />
                        </View>
                        <Text style={{ left: 4, flexDirection: 'row', fontSize: width * 0.040, }}>+91</Text>
                        <View>
                            <TextInput
                                placeholder="Phone Number"
                                // value={this.state.Phone}
                                onChangeText={(value) => this.setState({ Phone: value })}
                                keyboardType={"default"}
                            />


                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => this.props.navigation.navigate('OrderScreen')}>
                        <Text style={styles.ButtonText}> Send OTP </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => this.props.navigation.navigate('GoOutScreen')}>
                        <Text style={styles.ButtonText}> Go out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => this.props.navigation.navigate('ProScreen')}>
                        <Text style={styles.ButtonText}> Pro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => this.props.navigation.navigate('ExploreScreen')}>
                        <Text style={styles.ButtonText}> Explore</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.line}></View>
                        <Text style={{ marginTop: 15, color: 'black', marginLeft: 5, marginRight: 5 }}>OR</Text>
                        <View style={styles.line}></View>
                    </View>

                    <TouchableOpacity style={styles.input}
                        onPress={
                            () => this.props.navigation.navigate('EmailSignUp')}>
                        <View style={{ marginLeft: 6, flexDirection: 'row', marginTop: 1, fontSize: width * 0.050, }}>
                            <FontAwesome style={{ fontSize: width * 0.060, }} icon={SolidIcons.envelope} />
                        </View>
                        <View>
                            <Text style={{ left: 70, fontWeight: 'bold', fontSize: width * 0.040, }} >Countinue With Email </Text>

                        </View>
                    </TouchableOpacity>

                    <View style={{ width: width, justifyContent: 'center', flexDirection: 'row', margin: 5, }} >
                        <View style={[styles.button3, { marginRight: 10 }]}>
                            <View style={{ marginLeft: 15 }}>
                                <FontAwesome style={{ fontSize: width * 0.060, }} icon={BrandIcons.facebook} />
                            </View>
                            <View >

                                <Text style={{ left: 20, fontWeight: 'bold', fontSize: width * 0.040, }} >Facebook</Text>

                            </View>
                        </View>

                        <View style={styles.button3}>
                            <View style={{ marginLeft: 15 }}>
                                <FontAwesome style={{ fontSize: width * 0.060, }} icon={BrandIcons.google} />
                            </View>
                            <View >
                                <Text style={{ left: 20, fontWeight: 'bold', fontSize: width * 0.040, }} >Google</Text>

                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>By Continuing, you agree to our</Text>
                        <View style={{ flexDirection: 'row', color: 'white' }}>
                            <Text style={{ marginRight: 8, color: 'white' }}>Terms of Service</Text>
                            <Text style={{ color: 'white' }}>Privacy Policy</Text>
                            <Text style={{ marginLeft: 5, color: 'white' }}> Content Policy</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    mainview: {
        backgroundColor: 'black',
    },
    input: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.060,
    },
    textinput: {
        left: 10
    },
    button: {
        width: width * 0.9,
        height: height * 0.060,
        borderColor: 'black',
        backgroundColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        color: 'white',

        fontSize: width * 0.040,
        fontWeight: 'bold',

    },
    line: {
        height: height * 0.002,
        width: width * 0.40,
        backgroundColor: 'white',
        marginTop: 25,
        color: '#ffa500',

    },
    button2: {
        width: width * 0.9,
        height: height * 0.060,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText2: {
        color: 'black',

        fontSize: width * 0.040,
        fontWeight: 'bold',
    },
    button3: {
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.45,
        height: height * 0.060,


    }

})