import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
} from 'react-native-fontawesome';
import { SliderBox } from "react-native-image-slider-box";
import rating from '../Images/rating.png';
import feed4 from '../Images/feed4.jpg'
import feed5 from '../Images/feed5.jpg'
import feed6 from '../Images/feed6.jpg'
import profile from '../Images/profile.png';
import radhika from '../Images/radhika.jpg';
var { width, height } = Dimensions.get("window");
class FeedScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../Images/feed1.jpg'),
                require('../Images/feed2.jpg'),
                require('../Images/feed3.jpg'), // Local image
            ]
        };
    }
    render() {
        return (

            <ScrollView>
                <View>
                    <View style={{ marginLeft: 10, backgroundColor: '#F1C40F', }}>
                        <Text style={{ color: 'white', fontSize: 12, height: height * 0.03, marginTop: 5, marginLeft: 5 }}>
                            SAY HELLO TO OUR FOODIE COMMUNITY
                        </Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <SliderBox images={this.state.images} />
                    </View>
                    <View>
                        <Image source={feed4} style={styles.image} />
                    </View>

                    <View style={{ marginLeft: 12, marginTop: 12 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            Trending Posts in Your City
                        </Text>
                        <Text style={{ color: 'lightgrey' }}>
                            See what the foodies are saying
                        </Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 15, marginTop: 10 }}>
                                <Image source={profile} style={{ width: width * 0.100, height: height * 0.05 }} />
                            </View>
                            <View style={{ marginLeft: 5, marginTop: 10 }}>
                                <Text >Dr.Rahil wrote a 5 Star review</Text>
                                <Text style={{ fontSize: 12 }}>Level 10, 168 Followers</Text>
                            </View>
                            <View style={styles.follow}>
                                <Text style={{ color: '#E23744', }}>Follow</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={rating} style={styles.rating} />
                        <Text style={{ marginTop: 40 }}>5.0</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: 'grey' }}></View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 15, marginTop: 10 }}>
                                <Image source={radhika} style={{ width: width * 0.100, height: height * 0.05, borderRadius: 5 }} />
                            </View>
                            <View style={{ marginLeft: 5, marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold' }} >Amrutam</Text>
                                <Text style={{ fontSize: 12 }}>Gujarati</Text>
                                <Text style={{ fontSize: 12 }}>Nikol</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', marginRight: 5 }}>
                                <FontAwesome icon={SolidIcons.save} style={{ fontSize: width * 0.06 }} />
                            </View>

                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: 'grey' }}></View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <FontAwesome icon={SolidIcons.thumbsUp} style={{ fontSize: width * 0.04 }} />
                        <Text> Positive</Text>

                    </View>
                    <View style={{ borderWidth: 1, borderRadius: 15, borderColor: 'lightgrey', marginTop: 5, marginLeft: 10, width: width * 0.2 }}>
                        <Text style={{ marginLeft: 10 }}>ambience</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 10, marginTop: 15, padding: 5 }}>
                            AMRUTAM is an authentic Gujarati cuisine restaurant situated at Nikol. Place has beautiful vibes and eye catcy interior.
                            They are serving unlimited Gujarati thali at 350/- INR. I had a beautiful experience. Mung dal chilla and Dal bati was best among all served in my thali. All Sabjis could be more spicy.
                            If you are stayin around Nikol u can visit this place for unlimited authentic Gujarati Thali.
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={feed5} style={styles.feedimage} />
                            <Image source={feed6} style={styles.feedimage} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.button}
                            // onPress={
                            //     () => this.props.navigation.navigate('GoOutScreen')}
                            >

                                <Text style={styles.ButtonText}> Book A Table</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            // onPress={
                            //     () => this.props.navigation.navigate('GoOutScreen')}
                            >
                                <FontAwesome icon={SolidIcons.shoppingBag} style={{ fontSize: width * 0.04, color: '#E23744' }} />
                                <Text style={styles.ButtonText}> Order Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        <Text style={{ marginLeft: 10, color: 'grey' }}>Yesterday</Text>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                            <Text style={{ alignSelf: 'flex-end', marginRight: 10, color: 'grey' }}>2 Likes</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: 'grey' }}></View>
                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                            <FontAwesome icon={SolidIcons.thumbsUp} style={{ fontSize: width * 0.04 }} />
                            <Text style={{ marginLeft: 5 }}>Like</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, marginBottom: 30 }}>
                            <FontAwesome icon={SolidIcons.shareSquare} style={{ fontSize: width * 0.04 }} />
                            <Text style={{ marginLeft: 5 }}>Share</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 2, borderColor: 'grey' }}></View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 15, marginTop: 10 }}>
                                <Image source={profile} style={{ width: width * 0.100, height: height * 0.05 }} />
                            </View>
                            <View style={{ marginLeft: 5, marginTop: 10 }}>
                                <Text >Krupali wrote a 5 Star review</Text>
                                <Text style={{ fontSize: 12 }}>114 reviews, 168 Followers</Text>
                            </View>
                            <View style={styles.follow}>
                                <Text style={{ color: '#E23744', }}>Follow</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={rating} style={styles.rating} />
                        <Text style={{ marginTop: 40 }}>5.0</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: 'grey' }}></View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 15, marginTop: 10 }}>
                                <Image source={radhika} style={{ width: width * 0.100, height: height * 0.05, borderRadius: 5 }} />
                            </View>
                            <View style={{ marginLeft: 5, marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold' }} >Kaffe - Mast Hai</Text>
                                <Text style={{ fontSize: 12 }}>Cafe, Italian,North Indian</Text>
                                <Text style={{ fontSize: 12 }}>Nikol</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', marginRight: 5 }}>
                                <FontAwesome icon={SolidIcons.save} style={{ fontSize: width * 0.06 }} />
                            </View>

                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: 'grey' }}></View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <FontAwesome icon={SolidIcons.thumbsUp} style={{ fontSize: width * 0.04 }} />
                        <Text> Positive</Text>

                    </View>
                    <View style={{ borderWidth: 1, borderRadius: 15, borderColor: 'lightgrey', marginTop: 5, marginLeft: 10, width: width * 0.2 }}>
                        <Text style={{ marginLeft: 10 }}>ambience</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 10, marginTop: 15, padding: 5 }}>
                            Looking for amazing ambience with amazing food?
                            Then I'll definitely suggest this place!!
                            And the main thing is.. This cafe is open for 24 hours!!
                            One of the best place for hangout with friends!!
                            Staff and service are so good!!
                            This cafe is in Agora mall!!
                            Ambience was pretty amazing!!😍
                            Seating area was separated by chains in which you can do small parties and get to gatherings!!
                            Food quality and presentation was too good!! 😋

                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={feed5} style={styles.feedimage} />
                            <Image source={feed6} style={styles.feedimage} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.button}
                            // onPress={
                            //     () => this.props.navigation.navigate('GoOutScreen')}
                            >

                                <Text style={styles.ButtonText}> Book A Table</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            // onPress={
                            //     () => this.props.navigation.navigate('GoOutScreen')}
                            >
                                <FontAwesome icon={SolidIcons.shoppingBag} style={{ fontSize: width * 0.04, color: '#E23744' }} />
                                <Text style={styles.ButtonText}> Order Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        <Text style={{ marginLeft: 10, color: 'grey' }}>Yesterday</Text>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
                            <Text style={{ alignSelf: 'flex-end', marginRight: 10, color: 'grey' }}>2 Likes</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: 'grey' }}></View>
                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                            <FontAwesome icon={SolidIcons.thumbsUp} style={{ fontSize: width * 0.04 }} />
                            <Text style={{ marginLeft: 5 }}>Like</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, marginBottom: 30 }}>
                            <FontAwesome icon={SolidIcons.shareSquare} style={{ fontSize: width * 0.04 }} />
                            <Text style={{ marginLeft: 5 }}>Share</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>


        );
    }
}
export default FeedScreen;

const styles = StyleSheet.create({
    image: {
        width: width * 0.9,
        height: width * 0.25,
        resizeMode: 'cover',
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'grey',
        marginTop: 15,

    },
    follow: {
        justifyContent: 'flex-end',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#E23744',
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 6
    },
    rating: {
        width: width * 0.3,
        height: width * 0.25,

    },
    feedimage: {
        width: width * 0.45,
        height: width * 0.60,
        resizeMode: 'cover',
        marginHorizontal: 8,
        borderRadius: 10,
        marginVertical: 15,
    },
    button: {
        width: width * 0.45,
        height: height * 0.040,
        borderColor: '#E23744',
        marginHorizontal: 8,
        color: '#E23744',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ButtonText: {
        color: '#E23744',
        fontSize: width * 0.040,
        fontWeight: 'bold',

    },
});