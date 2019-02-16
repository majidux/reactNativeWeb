import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, FlatList} from 'react-native';
import {globalStyle} from "./globalStyle";
import {FakeComments} from "./FakeComment";

export default class CommentLeftSide extends Component {
    render() {
        return (
            <View style={styles.commentLeftSide}>
                <View style={styles.headerComment}>
                    <View style={styles.titleView}>
                        <View style={styles.imageCommentView}>
                            <Image
                                source={require('../Assets/images/comment.png')}
                                style={styles.imageComment}
                            />
                        </View>
                        <View>
                            <Text style={styles.recentComment}>Recent comment</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleRecentView}>
                        <Text style={styles.subtitleRecent}>Replay on comments that are not flattering</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={FakeComments}
                        renderItem={({item})=>
                            <View style={styles.allComment}>
                                <View style={styles.commenterDetail}>
                                    <View style={[globalStyle.flexRow]}>
                                        <View>
                                            <Image
                                                source={item.profilePicture}
                                                style={styles.profilePicture}
                                            />
                                        </View>
                                        <View>
                                            <Text style={{color:'#7a7a7a',fontWeight:'700'}}>{item.user}</Text>
                                            <Text style={styles.commentFont}>New customer</Text>
                                        </View>
                                    </View>
                                    <View>
                
                                        <View style={[styles.rateStarView, globalStyle.alignCenter]}>
                                            <Text>RATED</Text>
                                            <Image
                                                source={require('../Assets/images/goldStar.png')}
                                                style={styles.rateStarImage}
                                            />
                                            <Image
                                                source={require('../Assets/images/goldStar.png')}
                                                style={styles.rateStarImage}
                                            />
                                            <Image
                                                source={require('../Assets/images/goldStar.png')}
                                                style={styles.rateStarImage}
                                            />
                                            <Image
                                                source={require('../Assets/images/goldStar.png')}
                                                style={styles.rateStarImage}
                                            />
                                            <Image
                                                source={require('../Assets/images/greyStar.png')}
                                                style={styles.rateStarImage}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.commentSection}>
                                    <View style={[globalStyle.flex1,styles.commentView]}>
                                        <Text style={styles.commentFont}>{item.comment}</Text>
                                    </View>
                                    <View style={styles.lineViewOutSide}>
                                        <View style={styles.lineViewInSide}/>
                                    </View>
                                    <TouchableHighlight style={styles.buttonView} underlayColor={'rgba(100,100,100,.3)'} onPress={()=>{}}>
                                        <View style={styles.buttonView}>
                                            <Text>Answer</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        }
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
        backgroundColor: '#fff',
        flex: 8,
        padding: 30
    },
    commenterDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginHorizontal: 10
    },
    commentSection: {
        paddingLeft: 60,
        flex: 1,
    },
    commentFont: {
        color: '#a9a9a9',
        fontSize: 12,
        fontWeight: '700',
    },
    lineViewOutSide:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:20
    },
    lineViewInSide:{
        width:500,
        height:1,
        borderBottomWidth:2,
        borderBottomColor:'#rgba(100,100,100,.2)'
    },
    buttonView:{
        borderWidth:1,
        borderColor:'#cbcbcb',
        borderRadius: 5,
        width:70,
        height:30,
        justifyContent:'center',
        alignItems:'center',
    },
    rateStarView: {
        flexDirection: 'row',
        flex: 1
    },
    rateStarImage: {
        width: 10,
        height: 10,
        marginHorizontal: 2
    },
});
