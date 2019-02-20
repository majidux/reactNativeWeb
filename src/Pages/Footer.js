import React, {Component} from 'react';
import {View, Text, StyleSheet, PixelRatio, FlatList, Image, TouchableHighlight} from 'react-native';
import {globalStyle} from "../Components/globalStyle";

let font = PixelRatio.get() * 25;

export default class Footer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            quickLink: [
                {
                    dashboard: 'Dashboard',
                    users: 'Users',
                    products: 'Products',
                    payment: 'Payment History',
                    reports: 'Reports',
                    promo: 'Promo codes'
                }],
            
            information: [{
                term: 'Terms & Conditions',
                privacy: 'Privacy Policy',
                cookies: 'Cookies',
                help: 'Help',
                contact: 'Contact',
            }],
            
            other: [{
                about: 'About us',
                branding: 'Branding',
                ads: 'Advertising',
                press: 'Press'
            }],
            social: [{
                facebook: require('../Assets/images/facebook.png'),
                twitter: require('../Assets/images/twitter.png'),
                linkedin: require('../Assets/images/linkedin.png'),
                instagram: require('../Assets/images/instagram.png'),
            }]
            
        }
    }
    
    render() {
        
        return (
            <View style={styles.footer}>
                <View style={styles.allFlatListOutside}>
                    <View style={styles.flatListOutside}>
                        <FlatList
                            data={this.state.quickLink}
                            renderItem={({item}) =>
                                <View style={styles.allFlatList}>
                                    <View style={styles.quickLink}>
                                        <Text style={styles.fontMain}>Quick Link</Text>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <View>
                                                <Text style={styles.menuItems}>{item.dashboard}</Text>
                                            </View>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.users}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.products}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.payment}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.reports}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.promo}</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                    <View style={styles.flatListOutside}>
                        <FlatList
                            data={this.state.information}
                            renderItem={({item}) =>
                                <View style={styles.allFlatList}>
                                    <View style={styles.information}>
                                        <Text style={styles.fontMain}>Information</Text>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.term}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.privacy}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.cookies}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.help}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {
                                        }} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.contact}</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                    <View style={styles.flatListOutside}>
                        <FlatList
                            data={this.state.other}
                            renderItem={({item}) =>
                                <View style={styles.allFlatList}>
                                    <View style={styles._other}>
                                        <Text style={styles.fontMain}>Other</Text>
                                        <TouchableHighlight onPress={() => {}} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.about}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {}} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.branding}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {}} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.ads}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => {}} underlayColor={'rgba(100,100,100,.2)'}>
                                            <Text style={styles.menuItems}>{item.press}</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <FlatList
                            data={this.state.social}
                            renderItem={({item}) =>
                                <View style={styles.allFlatList}>
                                    <Text style={styles.fontMain}>Social</Text>
                                    <View style={styles.social}>
                                        <View style={styles.socialImages}>
                                            <Image
                                                source={item.facebook}
                                                style={styles.imageSocialStyle}
                                            />
                                        </View>
                                        <View style={styles.socialImages}>
                                            <Image
                                                source={item.twitter}
                                                style={styles.imageSocialStyle}
                                            />
                                        </View>
                                        <View style={styles.socialImages}>
                                            <Image
                                                source={item.linkedin}
                                                style={styles.imageSocialStyle}
                                            />
                                        </View>
                                        <View style={styles.socialImages}>
                                            <Image
                                                source={item.instagram}
                                                style={styles.imageSocialStyle}
                                            />
                                        </View>
                                    
                                    </View>
                                </View>
                            }
                        />
                    </View>
                </View>
                <View style={styles.credit}>
                    <View style={[globalStyle.flex1,globalStyle.alignEnd]}>
                        <Text style={styles.menuItems}>v1.4 November 14 2019</Text>
                    </View>
                    <View style={[globalStyle.flex1,globalStyle.alignEnd]}>
                        <Text style={styles.menuItems}>@ 2019 Dashboard inc All Rights Reserved</Text>
                    </View>
                    <View style={[globalStyle.flex2,globalStyle.justifyCenter,globalStyle.alignEnd]}>
                        <Text style={styles.menuItems}>All Systems Operational Check out our status page more details</Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footer: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 40
    },
    allFlatList: {
        flex: 1,
    },
    flatListOutside: {
        flex: 1,
    },
    allFlatListOutside: {
        flex: 2,
        flexDirection: 'row'
    },
    credit: {
        flex: 1,
    },
    quickLink: {
        flex: 1
    },
    information: {
        flex: 1,
    },
    _other: {
        flex: 1,
    },
    social: {
        flex: 3,
        flexDirection: 'row'
    },
    fontMain: {
        color: '#7a7a7a',
        fontWeight: '700',
        marginBottom: 5
    },
    menuItems: {
        color: '#a9a9a9',
        fontSize: 12,
        fontWeight: '700',
        marginVertical: 3
    },
    socialImages: {
        borderWidth: 1,
        borderColor: '#6e6e6e',
        padding: 5,
        borderRadius: 50,
        marginHorizontal: 5
    },
    imageSocialStyle:{
        width:15,
        height:15
    }
});
