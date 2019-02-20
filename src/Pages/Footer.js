import React, {Component} from 'react';
import {View, Text, StyleSheet,PixelRatio} from 'react-native';

let karim = PixelRatio.get()*25;

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <Text style={styles.fontSizeFooter}>Hello</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footer: {
        marginTop:30,
        backgroundColor:'lightgreen',
        height:100
    },
    fontSizeFooter:{
        fontSize:karim,
        fontWeight:'700',
        color:'#000',
    }
});
