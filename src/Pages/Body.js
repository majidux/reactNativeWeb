import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native-web';
import Statistics from "../Components/Statistics";
import Products from "../Components/Products";
import Comments from "../Components/Comments";

export default class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Statistics/>
                <Products/>
                <Comments/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        // flex: 5,
        height:1000,
        backgroundColor:'wheat'
    }
});
