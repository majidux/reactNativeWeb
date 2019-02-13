import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native-web';

export default class Comments extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Comment</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
