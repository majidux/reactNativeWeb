import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native-web';
import Statistics from "../Components/Statistics";
import Products from "../Components/Products";
import Comments from "../Components/Comments";

export default class Body extends Component {
    render() {
        return (
            <View>
                <Statistics/>
                <Products/>
                <Comments/>
            </View>
        );
    }
}

