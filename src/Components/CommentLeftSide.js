import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import ReplyFlatList from "./ReplyFlatList";
import {FakeComments} from "./FakeComment";
import {connect} from "react-redux";

class CommentLeftSide extends Component {

    
    render() {
        return (
            <View style={styles.commentLeftSide}>
                <View>
                    <View style={styles.headerComment}>
                        <View style={styles.titleView}>
                            <View style={styles.imageCommentView}>
                                <Image
                                    source={require('../Assets/images/comment.png')}
                                    style={styles.imageComment}
                                />
                            </View>
                            <View>
                                <Text style={styles.recentComment}>Recent comments</Text>
                            </View>
                        </View>
                        <View style={styles.subtitleRecentView}>
                            <Text style={styles.subtitleRecent}>Reply on comments that are not flattering</Text>
                        </View>
                    </View>
                    <FlatList
                        data={FakeComments.slice(0,2)}
                        extraData={this.props.textReply}
                        renderItem={({item},index) => <ReplyFlatList text={this.props.textReply} children={item}/>}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    commentLeftSide: {
        flex: 3,
        marginRight: 30,
    },
    headerComment: {
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
    allComment: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingRight: 0
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginHorizontal: 10
    },
    commentFont: {
        color: '#a9a9a9',
        fontSize: 12,
        fontWeight: '700',
    },
    lineViewOutSide: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    lineViewInSide: {
        width: 350,
        height: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#rgba(100,100,100,.2)'
    },
});

const mapStateToProps = state => {
    return {
        textReply: state.textReply
    }
};

export default connect(mapStateToProps, )(CommentLeftSide)
