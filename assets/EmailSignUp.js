import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
var { width, height } = Dimensions.get("window");
export default class SignUpScreen extends Component {
    render() {
        return (
            <View >


                <View style={styles.input}>   
                     <TextInput
                    placeholder="Name"
                 
                    onChangeText={(value) => this.setState({ name: value })}
                    keyboardType={"default"}
                /> 
                </View>
                <View style={styles.input}>   
                     <TextInput
                    placeholder="Email"
                    onChangeText={(value) => this.setState({ email: value })}
                    keyboardType={"default"}
                    
                /> 
                </View>
                <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => this.props.navigation.navigate('OrderScreen')}>
                    <Text style={{color:'grey'}}> Countinue </Text>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity
                    onPress={
                        () => this.props.navigation.navigate('EmailLogin')}>
                    <Text style={{color:'red',marginTop: 15,fontSize:15}}> Already have an account? Login </Text>
                </TouchableOpacity>
                </View>

            </View>
        );

    }
}



const styles = StyleSheet.create ({
    input: {
        borderBottomColor:'grey',
        borderBottomWidth:1,
         marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.060,
        marginLeft:15 
    },
    button:{
        width: width * 0.9,
        height: height * 0.060,
        borderColor: 'silver',
        backgroundColor: 'silver',
        borderWidth: 1,
        marginTop: 50,
        marginLeft:17,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})