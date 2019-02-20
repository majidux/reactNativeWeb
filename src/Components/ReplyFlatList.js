import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, TextInput, Animated} from 'react-native';
// import {FakeComments} from "./FakeComment";
import {globalStyle} from "./globalStyle";
import {connect} from "react-redux";
import {deleteText, addText} from "../services/commentReply/action";

class ReplyFlatList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            inText: '',
            scaleHeightOpen: new Animated.Value(0),
            scaleHeightClose: new Animated.Value(1),
        }
    }
    
    
    replyExpand = () => {
        this.setState({selected: !this.state.selected})
    };
    
    inputer = text => {
        this.setState({inText: text})
    };
    
    submitter = (index) => {
        if (this.state.inText.length === 0) {
            return;
        } else {
            this.props.addText(this.state.inText, index);
            this.setState({inText: ''});
            this.setState({selected: !this.state.selected})
        }
    };
    
    deleteItem = index => {
        this.props.deleteText(index);
    };
    
    // animateInputOpen = () => {
    //     Animated.timing(
    //         this.state.scaleHeightOpen,
    //         {
    //             toValue: 100,
    //             duration: 3000,
    //             useNativeDriver: true
    //         }
    //     ).start(() => this.animateInputClose())
    // };
    // animateInputClose = () => {
    //     Animated.timing(
    //         this.state.scaleHeightClose,
    //         {
    //             toValue: 0,
    //             duration: 3000,
    //             useNativeDriver: true
    //         }
    //     ).start()
    // };
    
    
    animatedHeight = () => {
        if (this.state.scaleHeightOpen._value === 1) {
            Animated.timing(
                this.state.scaleHeightOpen,
                {
                    toValue: 180,
                    duration: 100
                }
            ).start();
            
        } else if (this.state.scaleHeightOpen._value === 0) {
            
            Animated.timing(
                this.state.scaleHeightOpen,
                {
                    toValue: 50,
                    duration: 100
                })
                .start()
        }
        Animated.timing(
            this.state.scaleHeightOpen,
            {
                toValue: 50,
                duration: 100
            }).start(() => Animated.timing(
            this.state.scaleHeightOpen,
            {
                toValue: 180,
                duration: 150
            }).start()
        );
    };
    
    
    render() {
        return (
            <View style={styles.allComment}>
                <View style={styles.commenterDetail}>
                    <View style={[globalStyle.flexRow]}>
                        <View>
                            <Image
                                source={this.props.children.profilePicture}
                                style={styles.profilePicture}
                            />
                        </View>
                        <View>
                            <Text style={styles.fontMain}>{this.props.children.user}</Text>
                            <Text style={styles.commentFont}>{this.props.children.position}</Text>
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
                    <View style={[globalStyle.flex1]}>
                        <Text style={styles.commentFont}>{this.props.children.comment}</Text>
                    </View>
                    <View style={styles.lineViewOutSide}>
                        <View style={styles.lineViewInSide}/>
                    </View>
                    
                    <View>
                        {this.props.text.map((items, index) =>
                            <View key={index} style={styles.replyView}>
                                <Text style={styles.commentFont}>{items}</Text>
                                <TouchableHighlight
                                    style={[{alignSelf: 'flex-end', marginTop: 10}]}
                                    underlayColor={'rgba(100,100,100,.3)'}
                                    onPress={this.deleteItem.bind(this)}
                                >
                                    <Text>Delete</Text>
                                </TouchableHighlight>
                            </View>)}
                    
                    
                    </View>
                    
                    
                    {!this.state.selected &&
                    <TouchableHighlight
                        style={styles.buttonView}
                        underlayColor={'rgba(100,100,100,.3)'}
                        onPress={this.replyExpand}
                    >
                        
                        <View style={styles.buttonView}>
                            <Text onPress={this.animatedHeight}>Answer</Text>
                        </View>
                    
                    
                    </TouchableHighlight>
                    }
                    
                    
                    {this.state.selected &&
                    <Animated.View>
                        <Animated.View style={[styles.replyViewSection, {opacity: this.state.scaleHeightClose}]}>
                            <TextInput
                                onChangeText={this.inputer.bind(this)}
                                value={this.state.inText}
                                placeholder={'Write reply'}
                                onSubmitEditing={this.submitter.bind(this, this.props.index)}
                                autoFocus={true}
                            />
                        </Animated.View>
                        <TouchableHighlight
                            style={[styles.buttonView, {alignSelf: 'flex-end', marginTop: 10}]}
                            underlayColor={'rgba(100,100,100,.3)'}
                            onPress={this.submitter.bind(this, this.props.index)}
                        >
                            
                            <View style={styles.buttonView}>
                                <Text>Reply</Text>
                            </View>
                        
                        
                        </TouchableHighlight>
                    </Animated.View>
                    }
                
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    className: {
        flex: 1,
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
    fontMain: {
        color: '#7a7a7a',
        fontWeight: '700'
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
        flex: 8,
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 5
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
    lineViewOutSide: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    lineViewInSide: {
        width: 500,
        height: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#rgba(100,100,100,.2)'
    },
    buttonView: {
        borderWidth: 1,
        borderColor: '#cbcbcb',
        borderRadius: 5,
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rateStarView: {
        flexDirection: 'row',
        flex: 1
    },
    rateStarImage: {
        width: 10,
        height: 10,
        marginHorizontal: 2,
    },
    replyViewSection: {
        borderWidth: 1,
        height:100
    },
    replyView: {
        borderBottomWidth: 1,
        borderBottomColor: '#9f9f9f',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20,
        marginVertical: 10,
        marginLeft: 40,
    }
});
const mapStateToProps = state => {
    return {
        commentReply: state.commentState
    }
};

export default connect(mapStateToProps, {deleteText, addText})(ReplyFlatList)
