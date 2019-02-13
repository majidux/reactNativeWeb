import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight} from 'react-native-web';

export default class Header extends Component {
    render() {
        return (
            <View style={styles._header}>
                <View style={styles.leftSide}>
                    <View style={styles.logoView}>
                        <Image
                            source={require('../Assets/images/logo.png')}
                            style={styles.logoImage}
                        />
                    </View>
                    <View style={styles.userView}>
                        <Image
                            source={require('../Assets/images/employee.png')}
                            style={styles._imageStyle}
                        />
                        <TouchableHighlight underlayColor={'rgba(50,50,50,.5)'}>
                            <Text style={styles.fontMenuItems}>USERS</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.userView}>
                        <Image
                            source={require('../Assets/images/order.png')}
                            style={styles._imageStyle}
                        />
                        <TouchableOpacity>
                            <Text style={styles.fontMenuItems}>ORDERS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userView}>
                        <Image
                            source={require('../Assets/images/gift.png')}
                            style={styles._imageStyle}
                        />
                        <TouchableOpacity>
                            <Text style={styles.fontMenuItems}>PRODUCTS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <View style={styles._notification}>
                        <Image
                            source={require('../Assets/images/alarm.png')}
                            style={styles._notificationImage}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/images/profile.jpg')}
                            style={styles.profilePicture}
                        />
                    </View>
                    <View>
                        <View style={styles.personView}>
                            <Text style={styles.fontMenuItems}>Olive Houston</Text>
                            <Image
                                source={require('../Assets/images/sort-down.png')}
                                style={styles.pointer}
                            />
                        </View>
                        <View>
                            <Text style={styles.personTitle}>Marketing Specialist</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _header: {
        flex: 1,
        backgroundColor: '#f7f7ff',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    userView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
    },
    _imageStyle: {
        width: 10,
        height: 10,
        marginRight: 5
    },
    logoImage: {
        width: 50,
        height: 50
    },
    logoView: {},
    fontMenuItems: {
        fontSize: 11,
        color: '#5f5f5f',
        fontWeight: '700'
    },
    leftSide:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    rightSide:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent: 'flex-end'
    },
    personTitle:{
        fontSize: 9,
        color: '#9f9f9f',
        fontWeight: 'bold'
    },
    pointer:{
        width:5,
        height:5,
        marginLeft: 5
    },
    personView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    _notificationImage:{
        width:10,
        height:10
    },
    _notification:{
        padding:10,
        borderRadius:30,
        borderWidth:1,
        borderColor:'#b7b7b7'
    },
    profilePicture:{
        width:30,
        height:30,
        borderRadius: 30,
        marginHorizontal:10
    }
});
