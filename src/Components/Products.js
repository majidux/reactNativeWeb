import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native-web';

export default class Products extends Component {
    render() {
        return (
            <View style={styles.products}>
                <Text>Products</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    products: {
        flex: 4,
    }
});
