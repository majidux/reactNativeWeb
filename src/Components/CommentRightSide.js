import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {globalStyle} from "./globalStyle";
import {FakeComments} from "./FakeComment";
// import {FakeJobOffers} from "./FakeJobOffers";
import {connect} from "react-redux";
import {fetchData,receiveUser} from "../services/fetchData/action";


class CommentRightSide extends Component {
    
    
    componentDidMount() {
        this.props.fetchData();
    }

    itemSeparator = () => {
        return (
            <View style={styles.lineViewOutSide}>
                <View style={styles.lineViewInSide}/>
            </View>
        )
    };
    
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
                <FlatList
                    data={FakeComments.slice(0, 3)}
                    windowSize={2}
                    disableVirtualization={false}
                    initialNumToRender={2}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) =>
                        <View style={styles.allComment}>
                            <View style={globalStyle.flexRow}>
                                <View>
                                    <Image
                                        source={item.profilePicture}
                                        style={styles.profilePicture}
                                    />
                                </View>
                                <View>
                                    <Text style={{color: '#7a7a7a'}}>{item.user}</Text>
                                    <Text style={styles.commentFont}>{item.position}</Text>
                                </View>
                            </View>
                            <View style={globalStyle.flexRow}>
                                <Image
                                    source={require('../Assets/images/message.png')}
                                    style={styles.imageComment}
                                />
                                <Image
                                    source={require('../Assets/images/telephone.png')}
                                    style={[styles.imageComment, {marginHorizontal: 10}]}
                                />
                            </View>
                        </View>
                    }
                
                />
                <View style={styles.headerComment}>
                    <View style={styles.titleView}>
                        <View style={styles.imageCommentView}>
                            <Image
                                source={require('../Assets/images/banners.png')}
                                style={styles.imageComment}
                            />
                        </View>
                        <View>
                            <Text style={styles.recentComment}>We're hiring!</Text>
                        </View>
                    </View>
                    <View style={styles.subtitleRecentView}>
                        <Text style={styles.subtitleRecent}>Remember that there is a bonus (3K) the person passes 3
                            month trial period , Share our hiring list!</Text>
                    </View>
                </View>
                <FlatList
                    data={this.props.allItems.data.slice(0,3)}
                    ItemSeparatorComponent={this.itemSeparator}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <View style={styles.allComment}>
                            <View style={globalStyle.flexRow}>
                                <View>
                                    <Image
                                        source={item.profilePicture}
                                        style={styles.profilePicture}
                                    />
                                </View>
                                <View style={globalStyle.flexRow}>
                                    <View>
                                        <Image
                                            source={{uri:item.url}}
                                            style={[styles.profilePicture, {marginHorizontal: 10}]}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{color: '#7a7a7a',textTransform:'capitalize'}}>{item.title}</Text>
                                        <Text style={styles.commentFont}>{item.id}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                
                />
                
            </View>
        
        );
    }
}

const styles = StyleSheet.create({
    commentRightSide: {
        flex: 2,
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
        marginLeft: 20,
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

const mapStateToProps = (state) => {
    return {
        fetchState: state.fetchState,
        allItems:state.fetchState
    }
};

export default connect(mapStateToProps,{fetchData,receiveUser})(CommentRightSide)
