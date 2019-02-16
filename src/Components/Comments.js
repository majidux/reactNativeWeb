import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native-web';
import {globalStyle} from './globalStyle';
import CommentLeftSide from "./CommentLeftSide";
import CommentRightSide from "./CommentRightSide";

export default class Comments extends Component {
    render() {
        return (
            <View style={styles.comment}>
                    <CommentLeftSide/>
                    <CommentRightSide/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    comment: {
        flex: 1,
        flexDirection: 'row',
    },
});
