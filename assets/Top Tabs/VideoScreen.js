import { Root } from 'native-base';
import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';
import video1 from '../Images/video1.jpg';
import video2 from '../Images/video2.jpg';
import video3 from '../Images/video3.jpg';
import cake from '../Images/cake.jpg';
import bistro from '../Images/bistro.jpg';
import chaat from '../Images/chaat.jpg';
import dal from '../Images/dal.jpg';
import choclate from '../Images/choclate.jpg';
var { width, height } = Dimensions.get("window");
class VideoScreen extends Component {
    render() {
        return (

            <ScrollView >

                <View>
                    <View style={{ marginLeft: 12, marginTop: 12 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Watch Zomato Origianls
                        </Text>

                    </View>

                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <View>
                            <Image source={video1} style={styles.image2} />
                        </View>
                        <View>
                            <Image source={video2} style={styles.image2} />
                        </View>
                        <View>
                            <Image source={video3} style={styles.image2} />
                        </View>

                    </View>

                    <View style={{ marginLeft: 12, marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Cook With the Pros
                        </Text>

                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <View>
                            <Image source={cake} style={styles.image2} />
                        </View>
                        <View>
                            <Image source={bistro} style={styles.image2} />
                        </View>
                        <View>
                            <Image source={chaat} style={styles.image2} />
                        </View>

                    </View>
                    <View style={{ marginLeft: 12, marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Anyone Can Cook
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 10 }}>
                        <View>
                            <Image source={dal} style={styles.image2} />
                        </View>
                        <View>
                            <Image source={choclate} style={styles.image2} />
                        </View>
                        <View>
                            <Image source={chaat} style={styles.image2} />
                        </View>

                    </View>
                </View>

            </ScrollView>




        );
    }
}
export default VideoScreen;
const styles = StyleSheet.create({
    image2: {
        width: width * 0.30,
        height: width * 0.60,
        resizeMode: 'cover',
        marginHorizontal: 5,
        borderRadius: 10,
        marginVertical: 15,
    },

});