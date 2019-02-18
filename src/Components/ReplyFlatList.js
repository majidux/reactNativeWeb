import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, TextInput} from 'react-native';
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
            textTwo: [
                {
                    one: 'one'
                },
                {
                    two: 'two'
                },
                {
                    three: 'three'
                }
            ]
        }
    }
    
    componentDidMount() {
        console.log(this.props.text)
    }
    
    replyExpand = () => {
        this.setState({selected: !this.state.selected})
    };
    
    inputer = text => {
        this.setState({inText: text})
    };
    
    submitter = () => {
        if (this.state.inText.length === 0) {
            return;
        } else {
            this.props.addText(this.state.inText);
            this.setState({inText: ''});
            this.setState({selected: !this.state.selected})
        }
    };
    deleteItem = index => {
        this.props.deleteText(index);
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
                            <Text style={{color: '#7a7a7a', fontWeight: '700'}}>{this.props.children.user}</Text>
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
                            <Text>Answer</Text>
                        </View>
                    
                    
                    </TouchableHighlight>
                    }
                    
                    
                    {this.state.selected &&
                    <View>
                        <View style={styles.replyViewSection}>
                            <TextInput
                                onChangeText={this.inputer.bind(this)}
                                value={this.state.inText}
                                placeholder={'Write reply'}
                                onSubmitEditing={this.submitter}
                                autoFocus={true}
                            />
                        </View>
                        <TouchableHighlight
                            style={[styles.buttonView, {alignSelf: 'flex-end', marginTop: 10}]}
                            underlayColor={'rgba(100,100,100,.3)'}
                            onPress={this.submitter}
                        >
                            
                            <View style={styles.buttonView}>
                                <Text>Reply</Text>
                            </View>
                        
                        
                        </TouchableHighlight>
                    </View>
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
        // flex:1,
        height: 100
    },
    replyView: {
        borderBottomWidth: 1,
        borderBottomColor: '#9f9f9f',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20,
        marginVertical: 10,
        marginLeft: 40,
        // flexDirection:'row'
        // borderWidth:3
    }
});
const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {deleteText, addText})(ReplyFlatList)
