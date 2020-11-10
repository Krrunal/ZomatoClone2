import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
var { width, height } = Dimensions.get("window");
export default class EmailLogin extends Component {
    render() {
        return (
            <View >
                <View style={styles.input}>
                    <TextInput
                        placeholder="Email or Username"
                        onChangeText={(value) => this.setState({ name: value })}
                        keyboardType={"default"}
                    />
                    
                </View>
               <View>
                   <Text  style={{marginLeft:17,fontSize: width * 0.030,marginTop:8,color:'grey'}}>
                       We'll send you an email that will instantly log you in
                   </Text>
               </View>
               <View>
               <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => this.props.navigation.navigate('OrderScreen')}>
                    <Text style={{color:'grey'}}> Countinue </Text>
                </TouchableOpacity>
               </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.060,
        marginLeft: 15
    },
    button: {
        width: width * 0.9,
        height: height * 0.060,
        borderColor: 'silver',
        backgroundColor: 'silver',
        borderWidth: 1,
        marginTop: 40,
        marginLeft:17,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})