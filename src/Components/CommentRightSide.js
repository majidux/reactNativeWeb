import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native-web';
import {globalStyle} from "./globalStyle";

export default class CommentRightSide extends Component {
    render() {
        return (
            <View style={styles.commentRightSide}>
                <View style={styles.headerComment}>
                    <View style={styles.titleView}>
                        <View style={styles.imageCommentView}>
                            <Image
                                source={require('../Assets/images/questions.png')}
                                style={styles.imageComment}
                            />
                        </View>
                        <View>
                            <Text style={styles.recentComment}>Need help with anything?</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleRecentView}>
                        <Text style={styles.subtitleRecent}>Contact one of online administrators from list below</Text>
                    </View>
                </View>
                <View style={styles.allComment}>
                    <Text>Body</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    commentRightSide: {
        flex: 2,
    },
    headerComment:{
        height: 60,
        marginVertical: 15
    },
    imageComment: {
        width: 15,
        height: 15
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    recentComment: {
        fontSize: 22,
        color: '#404040'
    },
    subtitleRecent: {
        color: '#a9a9a9',
        fontSize: 14,
        fontWeight: '600'
    },
    subtitleRecentView: {
        marginLeft: 20
    },
    imageCommentView: {
        marginRight: 5
    },
    allComment:{
        backgroundColor: '#fff',
        flex:1
    },

});
